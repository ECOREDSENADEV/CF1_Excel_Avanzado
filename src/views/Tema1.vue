<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Tablas
    
    p.mb-5 Una de las herramientas más poderosas y fundamentales en Excel es la capacidad de trabajar con tablas. A menudo, los usuarios nuevos simplemente introducen datos en las celdas, creando lo que se conoce como un rango de datos. Sin embargo, convertir ese rango en una tabla de Excel desbloquea una gran cantidad de funcionalidades que hacen que la gestión y el análisis de datos sean mucho más eficientes y menos propensos a errores.

    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/2.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Al transformar un rango en una tabla, se activan automáticamente funciones como el filtrado y la ordenación de datos, lo que permite manipular y analizar la información de manera más rápida y precisa. Además, las tablas se expanden automáticamente cuando se agregan nuevos datos, eliminando la necesidad de ajustar manualmente las fórmulas y los rangos. Esto no solo ahorra tiempo, sino que también reduce significativamente el riesgo de errores en los cálculos y análisis.

        p(data-aos="fade-left") Otra característica destacada de las tablas de Excel es su capacidad para mantener la integridad de los datos y mejorar la presentación visual. Las tablas aplican automáticamente un formato coherente a todas las filas y columnas, lo que facilita la lectura y comprensión de la información. Asimismo, permiten la creación de columnas calculadas, donde las fórmulas se aplican automáticamente a toda la columna y se actualizan dinámicamente al modificarse los datos.
    
    .row.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 Esta funcionalidad, combinada con la facilidad para crear tablas dinámicas a partir de tablas de Excel, convierte a esta herramienta en un recurso indispensable para cualquier usuario que busque optimizar su trabajo con datos en hojas de cálculo.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipos
    
    p.mb-5 Las tablas pueden clasificarse según múltiples criterios, y cada tipo está diseñado para satisfacer necesidades específicas de presentación y análisis de datos:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Tablas estáticas")
            p.ms-5 Son estructuras fijas que presentan información de manera organizada sin capacidades de interacción. Son ideales para informes impresos, documentos de referencia y presentaciones donde la información no requiere actualización dinámica. Su principal ventaja es la simplicidad y la consistencia visual.
          div(titulo="Tablas dinámicas")
            p.ms-5 Permiten la reorganización y el análisis interactivo de datos. Los usuarios pueden modificar la estructura, aplicar filtros y generar diferentes vistas sin alterar los datos originales. Son fundamentales en el análisis exploratorio de datos y el <em>reporting</em> ejecutivo.
          div(titulo="Tablas relacionales")
            p.ms-5 Estructuras que mantienen relaciones definidas entre diferentes conjuntos de datos. Utilizan claves primarias y foráneas para establecer conexiones lógicas, permitiendo consultas complejas y el mantenimiento de la integridad referencial.
          div(titulo="Tablas de contingencia")
            p.ms-5 Especializadas en mostrar la distribución de frecuencias entre dos o más variables categóricas. Son esenciales para análisis estadísticos y estudios de correlación entre variables discretas.
          div(titulo="Tablas <em>Pivot</em>")
            p.ms-5 Herramientas avanzadas que permiten resumir, analizar y presentar grandes conjuntos de datos mediante la reorganización dinámica de filas, columnas y valores. Facilitan el análisis multidimensional y la generación rápida de <em>insights</em>.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Estructuras de datos tabulares en Excel
    
    p.mb-5 En Excel, se interactúa principalmente con dos tipos de estructuras tabulares:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-0 El rango de datos
      .col-lg-3
        .bg-color-6.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-0 La tabla en Excel
    
    .bg-color-7.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Un dato tabular en Excel se refiere a información organizada en formato de tabla, es decir, dispuesta en filas y columnas, donde cada celda contiene un valor específico. Este formato es esencial para el análisis, la visualización y la manipulación de datos dentro del programa.
    
    p.mb-5 Entre las características de los datos tabulares se destacan:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estructura clara
              p Las filas representan registros individuales (por ejemplo, cada fila puede ser un estudiante, una venta o un producto), y las columnas representan atributos o variables (como nombre, apellido, fecha, cantidad o precio).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Encabezados definidos
              p La primera fila suele contener los nombres de las columnas, lo que permite identificar fácilmente el tipo de información en cada campo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consistencia de los datos
              p Cada columna debe contener un tipo de dato homogéneo (números, texto, fechas, etc.), lo que facilita el filtrado, ordenamiento y análisis mediante el uso de filtros, tablas dinámicas, segmentaciones, gráficos y fórmulas personalizadas.
    
    p.mb-5 A continuación, se presenta un ejemplo sencillo de datos organizados en formato tabular, donde cada fila representa un registro individual y cada columna corresponde a un atributo específico:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Ejemplo de datos tabulares
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-8 Producto
                th.bg-color-8 Fecha de venta
                th.bg-color-8 Cantidad
                th.bg-color-8 Precio unitario
            tbody.bg-color-white
              tr
                td Lápiz
                td 1/08/2025
                td 100
                td $0.50
              tr.bg-color-9
                td Cuaderno
                td 2/08/2025
                td 50
                td $1.20
              tr
                td Borrador
                td 3/08/2025
                td 75
                td $0.30

    p.mb-5 Este tipo de estructura permite calcular el total de ventas, filtrar por fechas específicas o generar gráficos comparativos. Además, facilita la aplicación de modelos de análisis como segmentación, agrupación o cálculos derivados. También es compatible con herramientas como Power Query, Power BI y tablas dinámicas, y favorece la automatización mediante fórmulas o macros.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de estructuras de datos tabulares en Excel
    
    p.mb-5 A continuación, se describen las dos estructuras principales:

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Rango de datos

    p.mt-5 Un rango es simplemente un conjunto de celdas con datos. Es la forma más básica de organizar la información.
    p.mb-5 A continuación, se detallan sus principales características:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-9.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/11.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-right.bg-color-10
                    p.mb-0 <b>Estructura libre</b>: no tiene un nombre definido ni una estructura formal.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-right.bg-color-10
                    p.mb-0 <b>Referencias estáticas</b>: al crear fórmulas, se deben referenciar rangos de celdas (ej. A2:F10). Si se añaden nuevos datos, se deben actualizar las fórmulas manualmente.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-right.bg-color-10
                    p.mb-0 <b>Formato manual</b>: se debe aplicar formato (colores, bordes) de forma manual.

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Tabla de Excel

    p.mb-5.mt-5 Una Tabla de Excel es un objeto estructurado que el programa reconoce como una entidad única. A continuación, se detallan sus principales características:
        
    .row.justify-content-center
      .col-lg-10
        .bg-color-3.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/12.png', alt='')
            .col-lg.order-lg-1
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-right.bg-color-10
                    p.mb-0 <b>Nombre definido</b>: cada tabla tiene un nombre único, lo que facilita su referencia.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-right.bg-color-10
                    p.mb-0 <b>Referencias estructuradas</b>: se pueden usar los nombres de las columnas en las fórmulas (ej. TablaVentas[Ingresos]), haciéndolas más legibles y dinámicas.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-right.bg-color-10
                    p.mb-0 <b>Expansión automática</b>: las fórmulas, formatos y validaciones se expanden automáticamente al añadir nuevas filas o columnas.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-right.bg-color-10
                    p.mb-0 <b>Estilos y formato</b>: incluye galerías de estilos para aplicar formato profesional con un solo clic.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Creación 
    
    p.mb-5 El desarrollo de tablas eficaces implica una planificación estratégica y una consideración cuidadosa de los objetivos del análisis. En Excel, crear una tabla es un proceso sencillo y directo. Existen principalmente dos formas de hacerlo: a partir de un rango de datos existente o desde cero.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Desde un rango de datos existente")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 Seleccionar una celda dentro del rango de datos. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 Usar el atajo Ctrl + T o ir a <b>Insertar > Tabla</b>.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 Confirmar el rango detectado y marcar si hay encabezados.
          div(titulo="Desde cero")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 Insertar una tabla vacía desde <b>Insertar > Tabla</b>. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 Agregar manualmente encabezados y registros.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 Definir estructura y formato según las necesidades del análisis.

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta A partir de un rango de datos existente

    p.mb-5.mt-5 A continuación, se detalla el procedimiento específico para crear una tabla a partir de un rango de datos ya existente:

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-lg-2
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
        .col-lg.order-lg-1
          .p-4
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Seleccionar los datos</b>: se debe hacer clic en cualquier celda dentro del rango. Excel detectará automáticamente el bloque completo.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Usar el atajo de teclado</b>: presionar Ctrl + T.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Utilizar el menú</b>: acceder a la pestaña Insertar y hacer clic en Tabla.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Confirmar</b>: en el cuadro de diálogo Crear tabla, verificar que el rango sea correcto y marcar la casilla "La tabla tiene encabezados" si la primera fila contiene títulos de columnas.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Aceptar</b>: al hacer clic en aceptar, se generará la tabla con formato automático, encabezados visibles y funcionalidades de filtrado activadas.
    
    p.mb-5 En el siguiente video se explica el proceso para crear una tabla a partir de un rango de datos:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Creación de una tabla desde cero

    p.mb-5.mt-5 Además de generar una tabla a partir de datos existentes, también es posible crear una tabla desde cero. Esta opción es útil cuando se desea definir manualmente la estructura y los registros. Pasos para crear una tabla desde cero:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Creación de una tabla desde cero
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in", alt="Captura de Excel que muestra el menú de inserción de tabla y la interfaz para definir manualmente la estructura de una nueva tabla. ")
      .col-lg-5.order-lg-1
        .bg-color-3.p-5(data-aos="fade-left")
           ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Seleccionar un rango de celdas vacías</b> donde se ubicará la tabla.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Aplicar el comando de creación</b>: utilizar el atajo Ctrl + T o acceder a Insertar > Tabla desde la cinta de opciones.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-right.bg-color-10
                p.mb-0 <b>Encabezados automáticos</b>: si no se activa la opción “La tabla tiene encabezados”, Excel asignará nombres por defecto como Columna1, Columna2, etc., los cuales podrán modificarse posteriormente.
    
    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Creación de una tabla importando datos

    p.mb-5.mt-5 Otra forma de generar una tabla en Excel consiste en importar datos desde fuentes externas. En el siguiente video se explica cómo crear una tabla a partir de un archivo en formato .csv:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Consideraciones para la definición de tablas

    p.mb-5.mt-5 Independientemente del método utilizado para crear la tabla, es recomendable tener en cuenta ciertos aspectos clave relacionados con la definición de estructura y diseño lógico. A continuación, se presentan las principales etapas del proceso:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Definición de estructura
              p Identificar las entidades principales y sus atributos. Establecer qué información debe capturarse, cómo se relacionan los elementos y qué nivel de granularidad se necesita.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Establecimiento de esquemas
              p Determinar los tipos de datos apropiados para cada columna, definir restricciones de integridad y relaciones entre tablas. Un buen esquema previene inconsistencias y mejora el rendimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Normalización
              p Aplicar principios de normalización para eliminar redundancias y garantizar la integridad de los datos. Esto incluye identificar dependencias funcionales y descomponer tablas complejas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Implementación técnica
              p Seleccionar la plataforma adecuada (<em>spreadsheets</em>, bases de datos relacionales, sistemas NoSQL) según el volumen de datos, complejidad de consultas y requerimientos de rendimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Validación inicial
              p Incorporar controles de calidad de datos desde el inicio: validación de formatos, rangos de valores y consistencia referencial.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Configuración 
    
    p.mb-5 Una vez creada la tabla, al seleccionar cualquier celda dentro de ella, aparece una nueva pestaña en la cinta de opciones llamada "Diseño de tabla" (en versiones en español de Excel también puede aparecer como "Herramientas de tabla > Diseño"). Desde esta pestaña es posible personalizar la tabla tanto en su estructura como en su apariencia. A continuación, se describen las principales opciones disponibles:

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Nombre de la tabla

    p.mb-5.mt-5 En el extremo izquierdo de la pestaña Diseño de tabla, se encuentra un campo denominado "Nombre de la tabla". Es una buena práctica asignar un nombre descriptivo y significativo a cada tabla (por ejemplo: Ventas2025, InventarioProductos). Esto facilita la identificación y uso posterior en fórmulas, gráficos o conexiones con otros datos. A continuación, se presenta la ubicación del campo “Nombre de la tabla” en la pestaña Diseño de tabla.
    
    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0.order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Campo “Nombre de la tabla”
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in", alt="Captura del panel de herramientas de Excel donde se muestra el campo para asignar nombre a una tabla. ")
    
    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Estilos de tabla

    p.mb-5.mt-5 En el grupo "Estilos de tabla", se puede acceder a una galería de diseños predefinidos. Estos estilos permiten aplicar de forma rápida un formato profesional, mejorando la presentación visual y la legibilidad de la tabla. La siguiente figura presenta la galería de estilos de tabla disponibles en Excel.
    
    .bg-full-width.bg-color-11.mb-5
      .p-4.p-md-5
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              span Campo “Nombre de la tabla”
            figure
              img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in", alt="Imagen de la galería de estilos de tabla en Excel con diferentes formatos visuales aplicables a una tabla. ")

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Opciones de estilo de tabla

    p.mb-5.mt-5 El grupo "Opciones de estilo de tabla" contiene varias casillas de verificación que permiten modificar el aspecto visual y funcional de la tabla. A continuación,  se detallan las opciones de estilo de tabla que permiten modificar su apariencia y funcionalidad.
    
    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0.order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Opciones de estilo de tabla
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in", alt="Captura del grupo de opciones de estilo de tabla en Excel, con casillas para activar filas con bandas, encabezados, totales, entre otros.")
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Fila de encabezado")
            p.ms-5 Muestra u oculta la fila superior que contiene los títulos de las columnas.
          div(titulo="Fila de totales")
            p.ms-5 Agrega una fila al final de la tabla que permite realizar cálculos automáticos (suma, promedio, recuento, etc.).
          div(titulo="Filas con bandas")
            p.ms-5 Aplica un color de fondo alternado entre filas para mejorar la legibilidad.
          div(titulo="Columnas con bandas")
            p.ms-5 Aplica un color alternado entre columnas.
          
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Primera columna")
            p.ms-5 Resalta la primera columna de la tabla con un formato especial.
          div(titulo="Última columna")
            p.ms-5 Aplica un formato diferenciado a la última columna.
          div(titulo="Botón de filtro")
            p.ms-5 Muestra u oculta las flechas desplegables que permiten filtrar y ordenar datos desde la fila de encabezado.
    
    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Herramientas adicionales

    p.mb-5.mt-5 Excel también proporciona herramientas útiles para la gestión avanzada de la tabla. A continuación se describen dos de las más relevantes:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-5
        .bg-color-5.h-100
          .bg-color-2.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Quitar duplicados
          p.mb-0.p-4 Permite eliminar filas que contienen datos idénticos en una o varias columnas seleccionadas. Es ideal para limpiar datos y evitar repeticiones.

      .col-lg-5
        .bg-color-6.h-100
          .bg-color-12.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Convertir en rango
          p.mb-0.p-4 Transforma la tabla nuevamente en un rango de datos normal, aunque mantiene el formato visual aplicado. Se pierde la funcionalidad estructurada.

    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
