## Capturadora de Paquetes de Interfaces WEB.

<p>Este es mi Script para capturar datos de Interfaz de Red, realizado en forma de Challenge. El mismo tiene que brindar ciertos parametros puntuales:</p>

<ul>
  <li>
    Direccion IP de Origen
  </li>
    <li>
    Direccion IP de Destino
  </li>
    <li>
    Protocolo
  </li>
    <li>
    Tamaño del Paquete
  </li>
  
</ul>

## Instalación.


<p>Es necesario que tenga instalado NODE JS en su equipo, una version LTS de ser posible,actualmente la 20 es la recomendable. Y tambien se recomienda tener un gestor de paquetes, en este caso recomiendo NPM.</p>
<ul>
  <li>
<a href="https://nodejs.org/en">Node JS</a>
      </li>
    <li>
<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">NPM</a>
 </li>
</ul>



<p>Luego necesita instalar dependencias desde la carpeta "captureInfoWeb", abriendo un CMD.</p>

``` CMD
  npm install
```


<p>Con eso instalamos las dependencias necesarias para que el script funcione</p>

## USO

Por defecto dicho script se ejecuta con la busqueda establecida en "https://www.google.com.ar/", pero se puede cambiar desde el block de notas
buscando la linea de codigo 

``` javascript
await page.goto("https://www.google.com.ar/");
```

<p>En en parentesis podemos colocar ya sea una ip numeral por ejemplo 192.168.0.224 o entre una pagina web convencional entre " " </p>


<p>Una vez que modificamos esto a nuestra necesidad, abrimos una terminal y ejecutamos el script, de la siguiente manera</p>

``` Node
node capture.msj
```


## Autor

 ``` javascript

Juan Pablo Senatra

```


