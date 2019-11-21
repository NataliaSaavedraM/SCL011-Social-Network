# Creando una Red Social

## Índice

* [Preámbulo](#preámbulo)
* [Resumen del proyecto](#resumen-del-proyecto)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Consideraciones generales](#consideraciones-generales)
* [Parte obligatoria](#parte-obligatoria)
* [Hacker Edition](#hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas-front-end)
* [Contenido de referencia](#pistas-/-tips-/-lecturas-complementarias)

***

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y much@s no podemos
vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## Resumen del proyecto

En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [empanadas](https://es.wikipedia.org/wiki/Empanada) o de
los [tacos de canasta](https://es.wikipedia.org/wiki/Taco), etc.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

## Objetivos de Aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
 (con más de una vista / página) en la que podamos **leer y escribir datos.**

## Consideraciones generales

- Este proyecto se debe "resolver" en tríos.

- La lógica del proyecto debe estar implementada completamente en JavaScript (ES6+),
HTML y CSS :smiley:. Para este proyecto no está permitido utilizar
frameworks o librerías de CSS y JS.

- La división del trabajo debe permitir que todo el equipo
practique el aprendizaje de todo lo esperado **cada sprint**. _No se dividan el
trabajo como en una fábrica._

- Trabajen en una sola historia por vez, no pueden avanzar a la siguiente sin
haber completado la anterior.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### General

Este proyecto no incluye un _boilerplate_, así es que tendrás que definir la
estructura de carpetas y escribir tus propias Pruebas Unitarias (tests). Para
hacerlo, puedes guiarte de los proyectos anteriores.

### Definición del producto

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Comparte fotos de
entrevistas (si las tienes), cuestionarios y tus sketches/(bocetos).

Es importante que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social.

Cada una de tus Historias de Usuario debe tener:
- **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

- **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
para que, como equipo, sepan que esa historia está terminada y lista
para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
incluir estos aspectos en su Definición de Terminado (más todas las que
  necesiten agregar):

  * Debe ser una SPA.
  * Debe ser _responsive_.
  * Debes haber recibido _code review_ de al menos una compañera de otro equipo.
  * Haces _test_ unitarios y, además, has testeado tu producto manualmente.
  * Hiciste _pruebas_ de usabilidad e incorporaste el _feedback_ del usuario.
  * Desplegaste tu aplicación y has etiquetado tu versión (git tag).

### Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu producto y
con eso deberás diseñar la Interfaz de Usuario (UI por sus siglas en inglés) de
esta red social que siga este flujo.
Este diseño debe representar la solución que se implementará finalmente en
código.

### Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (tablets, celulares, etc.). Te
sugerimos seguir la técnica de `mobile first` (más detalles sobre esta técnica
al final).

### Pruebas unitarias (unit tests)

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_, y _branches_.

### Implementación de la Interfaz de Usuario (UI y comportamiento de Interfaz de Usuario)

Estas son consideraciones para que escribas las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Para el login y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y con cuenta de Google.
* Validaciones:
  - La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema debe mostrar mensajes de error para
    ayudar al usuario a corregirlos.
  - Al recargar la aplicación, se debe verificar si el usuario está
    logueado antes de mostrarle el contenido.


#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, debe validar que exista contenido en
  el _input_.
* Comportamiento:
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### Hacker edition

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

### Consideraciones técnicas Front-end

El corazón de este proyecto incluye:

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con multiples vistas para esto tu aplicacion debera ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Que el sitio sea responsive, ya dicho.
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [Firebase](https://firebase.google.com/).

Además, podrías agregar algunas tareas nuevas de acuerdo a tus decisiones:

* Recuerda que no hay un setup de **tests** definido, dependerá de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en éstas pruebas, incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### Consideraciones técnicas UX

Desde el punto de vista de UX, deberás:

* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de testing con el producto en HTML.

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### Habilidades Blandas/Socioemocionales

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de Problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Responsabilidad |
| Comunicación eficaz |
| Presentaciones |


### Habilidades Técnicas, Front-end

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| SEO |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### Habilidades Técnicas, UX

| Habilidad |
|-----------|
| User Centricity |
| Visual Desing |

***

## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***

<a href="https://imgbb.com/"><img src="https://i.ibb.co/hfDSSDz/logo.png" alt="logo" border="0"></a>

## **Índice**

- [1- Reciclaje Unidos](#Reciclaje-Juntos)
  - [1.1-Preámbulo](#preámbulo)
  - [1.2-Usuario](#usuario)
  - [1.3-Problemática del Usuario](#problemática-del-Usuario)
  - [1.4-Objetivos de la Aplicación](#objetivos-de-la-aplicacion)
- [2-Metodología UX](#Metodología-UX)

  - [2.1-Encuesta online](#Encuesta-online)
    - [2.1.1-Alcance de la encuesta](#alcance-de-la-encuesta)
    - [2.1.2-Conclusiones de la encuesta](#Conclusiones-de-la-encuesta)
  - [2.2-Historias de Usuario](#historias-de-usuario)
  - [2.3-Diagrama de Flujo](#diagrama-de-flujo)
  - [2.4-Prototipo de Baja Fidelidad](#prototipo-de-baja-fidelidad)
    - [2.4.1-Sketch](#sketch)
    - [2.4.2-Wireframe](#wireframe)
    - [2.4.3-Tests de usabilidad](#tests-de-usabilidad)
  - [2.5-Estudios de interfaz](#Estudios-de-interfaz)
    - [2.5.1-Estudio de benchmark](#Estudio-de-benchmark)
    - [2.5.2-Guia de estilos](#Guia-de-estilos)
  - [2.6-Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
    
    - [2.7-Evaluación heuristica](#evaluacion-heuristica)

- [3-Pruebas unitarias](#Pruebas-unitarias)
- [4-Futuras Mejoras](#futurasmejoras)
- 5-[Planificacion](#Planificacion)
- [6-Herramientas](#herramientas)
- [7-Checklist obligatorio](#checklist-obligatorio)



## **1- Reciclaje Unidos**
Aquí poner el link de la aplicación.

## **1.1-Preámbulo**
Actualmente uno de los medios de comunicación mas potentes que existen son las redes sociales, a trabes de estas damos a conocer nuestro sentir, buscamos información de temas puntuales y nos relacionamos con otras personas que tienden a tener intereses similares a los nuestros.

## **1.2-Usuario**
Personas con cierta conciencia ambiental que recicla o tiene las ganas de reciclar sus desechos.   Actualmente el target según los últimos estudios en Chile son principalmente mujeres de entre 56 y 60 años, ABC1, principalmente por accesibilidad. Sin embargo a partir de esta aplicación la idea es facilitar la accesibilidad al reciclaje.


## **1.3-Problemática del Usuario**
Cada chileno produce 1.1 kilos de basura domiciliaria diaria. Sin embargo, el 80% no recicla su basura de manera habitual. Debido a las falta de costumbre y accesibilidad  de centros de reciclaje. Esto ultimo se puede deber a la distancia o información que las personas tengan de estos centros. Asi como tambien el tiempo o disposicion para esto.

## **1.4-Objetivos de la Aplicación**
Fomentar el reciclaje entre los usuarios, ya sea por que se encuentra con personas que quieren implementar este mismo habito.
Conectar a quienes quieren reciclar con valorizadores de residuos, empresas que se dedican a recepcionar ciertos desechos con el proposito de reutilizarlos.
Promover la cultura del reciclaje a traves del conocimiento y diversas actividades realizadas por los mismos usuarios de la aplicación.


## **2-Metodología UX**
## **2.1-Encuesta online**
[Encuesta](https://docs.google.com/forms/d/1ig6b3R66fTu3Kbld2cH6bvpadLCux255c4Q8lyoDfm8/edit#responses)
## **2.1.1-Alcance de la encuesta**
## **2.1.2-Conclusiones de la encuesta**
## **2.2-Historias de Usuario**
## **2.3-Diagrama de Flujo**
## **2.4-Prototipo de Baja Fidelidad**
## ** 2.4.1-Sketch**
## **2.4.2-Wireframe**
## **2.4.3-Tests de usabilidad**
## **2.5-Estudios de interfaz**
## **2.5.1-Estudio de benchmark**
## **2.5.2-Guía de estilos**
## **2.6-Prototipo de Alta Fidelidad**
## ** 2.7-Evaluación heuristica **
## **3-Pruebas unitarias**
## **4-Futuras Mejoras**
## **5-Herramientas**
## **6-Planificacion**
[Trello](https://trello.com/b/kzy9szjK/reciclaje-unido)
[GitHub](https://github.com/NataliaSaavedraM/SCL011-Social-Network/projects/1)
## **7-Checklist obligatorio**
### Javascript 

 - [ ] Usa varias páginas (sin diferentes HTML, todo a través de código JS)	
 - [ ] Usa "routing", esto es, cambio de URL sin usar otro HTML (todo a través de JS)		
 - [ ] 	Usa funciones pequeñas con una sola funcionalidad		
 - [ ] 	Usa Firebase Auth / Mongo Stitch Auth		
 - [ ] 	Puede guardar información en Firebase Database / Mongo Stitch / Local Storage		
 - [ ] 	Puede Leer desde Firebase Database / Mongo Stitch / Local Storage		
 - [ ] 	Mantiene orden del código (usa ESLint, por ejemplo)		
 - [ ] 	Hay test (al menos para las funciones principales)		
 - [ ] 	Guarda archivos, como imagenes, en Firebase Storage u otro servicio de almacenamiento		
		
### HTML 
 - [ ] 	Tiene solo un archivo principal		
 - [ ] 	Usa HTML semántico (section, header, article, footer...)		
 - [ ] 	Hay orden y estructura del HTML generado por JS					

### CSS
 - [ ] 	Se adapta a todas las pantallas		
 - [ ] 	Usa una hoja de estilos clara, con clases reutilizables		
	
### GIT
 - [ ] 	Hace commits con propósito claro y pequeños		
 - [ ] 	Usa "ramas de característica" (Feature branch)		
 - [ ] 	Hay pull requests con intención clara, una característica en particular para cada uno		
 - [ ] 	Usa tags en su repositorio		
	
### Github / Planificación *
 - [ ] 	Hay issues o tareas bien definidas		
 - [ ] 	Hay releases con tags involucrados		
 - [ ] 	Está desplegado el proyecto		
