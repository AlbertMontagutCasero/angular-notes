# Angular Notes

### Create Project

```bash
$ ng new [nombre-proyecto]
```



### Sistema de Archivos

#### Global

```bash
./e2e # configuraciones del framework y typescript
./node_modules # almacena las dependencias descargadas por npm
./src # contiene el codigo del proyecto
./.angular.json # configuraciones de angular/cli, subcomandos. Donde se guardan los assets. Directorio donde se almacenan los builds, directorio root.
./.editorconfig # configuracion basicas a nivel de editor de ficheros. La configuracion de caracteres
./.karma.conf.js # Testing
./package.json # Dependencias y librerias que necesita angular para funcionar
./tsconfig.json # Fichero de configuraciones de typescript
./tslint.json # Configuracion del analizador syntactico
```

#### SRC

```bash
./src/styles.css # CSS global del proyecto
./src/main.ts # Donde se carga el modulo principal
./src/index.html # Pagina principal donde carga el framework
./src/enviroments/ # Directorio que contiene archivos para la configuracion de los entornos de produccion y desarrollo
./src/assets/ # Directorio que contiene las imagenes que se usaran en el proyecto
./src/app/ # Contiene el modulo principal de la aplicacion, el componente principal y los demás componentes que crearemos. 
```



### Elementos que conforman Angular

#### Componentes

Un componente al final va a controlar un trozo de pantalla o de la vista. 

Todo lo que se puede ver en pantalla es controlado y gestionado por este tipo de elementos.

La lógica de un componente dentro una clase en Angular es que da soporte a una 
vista interactuando con ella a través de un API con propiedades y métodos.

El componente hace de mediador entre la vista a través de la plantilla y 
la lógica de la app donde se incluirá el modelo de datos, es decir una especie de controlador.

#### Plantillas

Las plantillas van a definir la vista de los componentes. 

Son htmls y tienen sintaxis especial de Angular. Trabajando con el databinding y las directivas.

#### Decoradores y Metadatos

Con los decoradores (patrón de diseño) vamos a configurar dinamicamente atributos/metadatos de las clases y componentes.

Los metadatos van a describir a las clases pero también describen relaciones, por ejemplo si tenemos un componente y una plantilla el metadato se va a encargar de decirle a Angular que ese componente y esa 
plantilla van juntos, entre otras muchas cosas.

#### Servicios

Son clases con un objetivo claro, facilita la reutilización, son un tipo de componente dentro de la arquitectura de Angular y mediante la inyección de dependencias los podemos usar en otros componentes 
principales digamos.

#### Providers

Son servicios que nos proveen de datos o funcionalidades mediante sus métodos. Existen providers/servicios propios de Angular o creados por nosotros mismos.

#### Directivas

Son funcionalidades aplicables al DOM y a los elementos HTML en las plantillas de un componente. Por ejemplo una directiva puede servir para controlar que un div se muestre o no o recorrer un array en la vista (directivas estructurales, estructuras condicionales y de control) o incluso también puede servir para darle una un estilo u otro aun elemento del HTML o también para interactuar con el modelo de datos 
del componente. 

![](https://angular.io/generated/images/guide/architecture/overview2.png)

