/** @format */

import puppeteer from "puppeteer";

let totalPackets = 0;
const protocolCounts = {};
const srcIpCounts = {};
const dstIpCounts = {};

async function capturePackets() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.setRequestInterception(true);

	page.on("request", (request) => {
		totalPackets++;

		const srcIp = "Nuestra IP, Puppeteer no captura la IP de origen"; // Puppeteer no captura la IP de origen
		const dstIp = new URL(request.url()).hostname;
		const protocol = request.resourceType();
		const packetLength = request.headers()["content-length"] || "N/A";

		// Incrementar contadores de protocolos
		protocolCounts[protocol] = (protocolCounts[protocol] || 0) + 1;

		// Incrementar contadores de IPs de origen
		srcIpCounts[srcIp] = (srcIpCounts[srcIp] || 0) + 1;

		// Incrementar contadores de IPs de destino
		dstIpCounts[dstIp] = (dstIpCounts[dstIp] || 0) + 1;

		console.log(`IP de origen: ${srcIp}`);
		console.log(`IP de destino: ${dstIp}`);
		console.log(`Protocolo: ${protocol}`);
		console.log(`Tamaño del paquete: ${packetLength}`);
		console.log("------------------------------");

		request.continue();
	});

	await page.goto("https://www.google.com.ar/");

	// Esperar un tiempo para capturar suficientes paquetes
	await new Promise((resolve) => setTimeout(resolve, 60000));

	await browser.close();

	// Mostrar estadísticas
	console.log(`Número total de paquetes capturados: ${totalPackets}`);

	console.log("Número de paquetes por protocolo:");
	for (const protocol in protocolCounts) {
		console.log(`${protocol}: ${protocolCounts[protocol]}`);
	}

	console.log("Las 5 principales direcciones IP de origen con mayor tráfico:");
	const sortedSrcIps = Object.entries(srcIpCounts)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5);
	sortedSrcIps.forEach(([ip, count]) => {
		console.log(`${ip}: ${count}`);
	});

	console.log("Las 5 principales direcciones IP de destino con mayor tráfico:");
	const sortedDstIps = Object.entries(dstIpCounts)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5);
	sortedDstIps.forEach(([ip, count]) => {
		console.log(`${ip}: ${count}`);
	});
}

capturePackets();
