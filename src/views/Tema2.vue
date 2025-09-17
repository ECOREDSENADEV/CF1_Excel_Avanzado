<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de datos
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez que los datos han sido organizados en una tabla de Excel, el siguiente paso es llevar a cabo su gestión adecuada. Este proceso implica garantizar que la información sea correcta, coherente y esté presentada de una forma que facilite su análisis.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tipos de datos
    
    p.mb-5 Asignar el tipo de dato correcto a cada columna de una tabla es fundamental para evitar errores en cálculos, operaciones y análisis posteriores. Comprender los tipos de datos disponibles en Excel permite tomar decisiones más precisas y garantizar la integridad de los resultados obtenidos. A continuación, se presentan los tipos de datos más comunes utilizados en la gestión de tablas dentro de Excel:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        SlyderF(columnas="col-12 col-lg-4").p-5.mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/2.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 General
            p.text-center Formato por defecto. Excel intenta identificar automáticamente el tipo de dato, aunque puede no ser preciso.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Numéricos
            p.text-center Incluyen enteros, decimales y números complejos. Son aptos para operaciones matemáticas y análisis estadísticos. Requieren control de precisión y rangos válidos.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Textuales
            p.text-center Compuestos por cadenas de caracteres. Incluyen nombres, descripciones y texto libre. Es necesario considerar la codificación, longitud máxima y métodos de búsqueda.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Temporales
            p.text-center Fechas, horas y marcas de tiempo. Deben gestionarse con atención a zonas horarias, formatos regionales y cálculos de intervalos. Son claves para análisis cronológicos.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Categóricos
            p.text-center Representan clasificaciones o categorías. Pueden ser ordinales (con orden lógico) o nominales (sin orden). Requieren técnicas específicas de análisis y gráficos.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Booleanos
            p.text-center Valores binarios (verdadero/falso). Útiles para filtros lógicos, reglas condicionales y segmentaciones.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Estructurados
            p.text-center Datos con esquema definido (como tablas, listas o bases relacionales). Permiten análisis automatizado y validaciones más estrictas.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 No estructurados
            p.text-center Datos en formatos libres o complejos (como archivos JSON o XML). Requieren herramientas especializadas para su interpretación y análisis.
        
        p En el siguiente video aprenderán a asignar correctamente los formatos de datos a las columnas de una tabla en Excel, asegurando que cada celda tenga el tipo adecuado para facilitar análisis, informes y automatizaciones posteriores: 
       
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Funcionalidades de agrupación
    
    p.mb-5 Las técnicas de agrupación permiten organizar y resumir datos, facilitando un análisis más efectivo. Agrupar datos en Excel permite contraer y expandir secciones dentro de la hoja de cálculo, lo cual posibilita visualizar resúmenes rápidos sin perder el acceso al detalle. A continuación, se presentan los principales tipos de agrupación y sus características:

    .row
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Agrupación por categorías")
            p.ms-5 Organiza datos según valores compartidos en campos categóricos. Permite el análisis comparativo entre grupos e identifica patrones específicos por segmento.
          div(titulo="Agrupación temporal")
            p.ms-5 Consolida datos por períodos (diario, semanal, mensual, anual). Es esencial para el análisis de tendencias, estacionalidad y <em>forecasting</em>.
          div(titulo="Agrupación jerárquica")
            p.ms-5 Crea estructuras en forma de árbol que permiten <em>drill-down</em> desde niveles agregados hasta niveles granulares. Facilita la navegación en grandes volúmenes de datos.
          div(titulo="Agrupación dinámica")
            p.ms-5 Permite a los usuarios definir criterios de agrupación en tiempo real. Aumenta la flexibilidad y potencia la exploración analítica.
          div(titulo="Agrupación múltiple")
            p.ms-5 Combina varios criterios de agrupación simultáneamente para realizar análisis multidimensional. Ayuda a revelar interacciones complejas entre variables. Herramientas avanzadas que permiten resumir, analizar y presentar grandes conjuntos de datos mediante la reorganización dinámica de filas, columnas y valores. Facilitan el análisis multidimensional y la generación rápida de <em>insights</em>.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Cálculos personalizados
    
    p.mb-0 Una de las funcionalidades más potentes de las tablas en Excel es la posibilidad de crear columnas calculadas. Cuando se ingresa una fórmula en una celda de una columna dentro de una tabla, Excel la aplica automáticamente a todas las celdas de esa misma columna, actualizándola dinámicamente ante cambios.
    p.mb-5 Además, los cálculos personalizados amplían significativamente las capacidades analíticas de Excel, permitiendo la creación de métricas adaptadas a necesidades específicas.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Métricas derivadas
              p Creación de indicadores nuevos basados en la combinación de campos existentes, como ratios, porcentajes e índices compuestos. Proporcionan <em>insights</em> adicionales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Funciones agregadas avanzadas
              p Permiten calcular medidas más complejas sobre grupos de datos: medias ponderadas, medianas, percentiles, desviaciones estándar, entre otras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cálculos condicionales
              p Utilizan lógica <em>if-then-else</em> para generar métricas que cambian según condiciones definidas. Son útiles para análisis segmentado y escenarios dinámicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cálculos temporales
              p Facilitan comparaciones entre períodos, análisis de tendencias y cálculos de variación. Son esenciales en contextos de rendimiento y proyecciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fórmulas personalizadas
              p Desarrollo de expresiones adaptadas a necesidades específicas del negocio. Requiere equilibrio entre funcionalidad y facilidad de mantenimiento.
    
    p.mb-5 En el siguiente video se explica cómo crear columnas calculadas en Excel para automatizar operaciones, como el cálculo de ingresos a partir de las unidades vendidas y los precios unitarios, además de utilizar la opción de fila de totales para generar reportes claros y precisos.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Filtros
    
    p.mb-5 Los sistemas de filtrado permiten enfocar el análisis en subconjuntos relevantes de datos, lo cual facilita mostrar únicamente aquellos registros que cumplen con criterios específicos. En las tablas de Excel, los botones de filtro (representados por flechas desplegables) se añaden automáticamente en los encabezados de columna al momento de crear la tabla. Excel ofrece diferentes tipos de filtros que varían en complejidad y funcionalidad. A continuación, se presenta una tabla que resume sus características principales:

    .row
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Filtros básicos")
            p.ms-5 Operaciones simples como igualdad, comparación directa o búsqueda de texto. Son intuitivos y accesibles para usuarios sin experiencia técnica.
          div(titulo="Filtros avanzados")
            p.ms-5 Permiten combinaciones complejas utilizando operadores lógicos (AND, OR, NOT), rangos de valores y expresiones regulares.
          div(titulo="Filtros dinámicos")
            p.ms-5 Posibilitan la modificación en tiempo real de los criterios de filtrado, mostrando resultados actualizados al instante.
          div(titulo="Filtros guardados")
            p.ms-5 Permiten almacenar combinaciones de filtros complejas para su reutilización en análisis recurrentes, lo que mejora la eficiencia.
          div(titulo="Filtros contextuales")
            p.ms-5 Aplican automáticamente filtros relevantes según el contexto del usuario, el rol o la sección del sistema. Personalizan la experiencia.
    
    p.mb-5 A continuación, se muestra una figura donde se presenta una tabla llamada Ventas, con la opción de filtros habilitada en cada una de las columnas:

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Figura 5.
              span Tabla con filtros habilitados
            figure
              img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in", alt="Tabla de Excel con encabezados visibles y botones de filtro desplegables en cada columna.  ")
    
    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Segmentación
    
    p.mb-5 La segmentación consiste en dividir los datos en grupos homogéneos con el objetivo de facilitar un análisis más especializado, específico y relevante. Esta técnica permite aplicar filtros más significativos, adaptar estrategias según cada grupo y extraer conclusiones más precisas. En el contexto de análisis de datos, existen diversas formas de segmentar según las características de los registros. A continuación, se describen los tipos de segmentación más comunes:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        SlyderF(columnas="col-12 col-lg-4").p-5.mb-5
          .bg-color-6.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
            h4.text-center.mb-4 Demográfica
            p.text-center Divide los datos según características poblacionales como edad, género, ubicación geográfica o nivel socioeconómico. Es fundamental en análisis de mercado y estrategias de personalización.
          .bg-color-6.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/19.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
            h4.text-center.mb-4 Comportamental
            p.text-center Agrupa datos en función de patrones de comportamiento, preferencias o historial de interacción. Permite una personalización más precisa y predicción de acciones futuras.
          .bg-color-6.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
            h4.text-center.mb-4 Temporal
            p.text-center Crea grupos basados en el momento en que ocurrieron eventos o transacciones. Es útil para análisis de cohortes, ciclos de vida del cliente y estudios longitudinales.
          .bg-color-6.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
            h4.text-center.mb-4 Por valor
            p.text-center Clasifica elementos según su importancia o valor relativo. Comúnmente utilizada en análisis ABC, optimización de inventario y gestión de cartera de clientes.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
