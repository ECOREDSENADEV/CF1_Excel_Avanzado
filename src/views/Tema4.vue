<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gráficos avanzados
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La visualización de datos es tanto un arte como una técnica analítica. Consiste en representar datos de manera gráfica para facilitar su comprensión, análisis e interpretación. Un gráfico bien diseñado permite revelar patrones, tendencias y anomalías que serían difíciles de identificar únicamente con datos tabulares. Excel ofrece una amplia gama de herramientas para crear visualizaciones que van desde gráficos simples hasta representaciones complejas e interactivas. 
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Tipos
    
    p.mb-5 Elegir el tipo de gráfico adecuado es fundamental para representar los datos de forma clara, efectiva y orientada al propósito del análisis. A continuación, se describen los principales tipos de gráficos que ofrece Excel, clasificados según su función analítica.

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Gráficos de comparación

    p.mb-5.mt-5 Los gráficos de comparación permiten contrastar valores entre diferentes categorías, facilitando la identificación de variaciones significativas en los datos.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Columnas")
        .row.p-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Columnas
            p Este tipo de gráfico es ideal para comparar valores entre distintas categorías, ubicando las categorías en el eje horizontal.
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema4/2.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Barras")
        .row.p-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Barras
            p El gráfico de barras cumple la misma función que el de columnas, pero presenta las categorías en el eje vertical, lo que lo hace útil cuando los nombres de las categorías son extensos.
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema4/3.png', alt='Texto que describa la imagen')
    
    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Gráficos de tendencia

    p.mb-5.mt-5 Los gráficos de tendencia permiten visualizar la evolución de una o más variables a lo largo del tiempo, facilitando el análisis de patrones temporales.

     .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Líneas
              p Este gráfico es el más adecuado para mostrar cómo cambia una variable a lo largo del tiempo, como por ejemplo, las ventas mensuales o la temperatura diaria.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Áreas
              p Similar al gráfico de líneas, este tipo rellena el área bajo la curva, lo que ayuda a visualizar con mayor claridad la magnitud del cambio temporal.

    h3.text-white.bg-color-4.d-md-inline.p-3.tarjeta Gráficos de composición (parte de un todo)

    p.mb-5.mt-5 Estos gráficos muestran cómo se distribuyen las partes dentro de un total, siendo útiles para representar proporciones o porcentajes.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Circular (Pastel)")
        .row.p-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Circular (Pastel)
            p Este gráfico permite visualizar la proporción de cada categoría respecto a un total del 100 %, pero su uso se recomienda solo cuando hay pocas categorías (idealmente menos de seis).
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema4/6.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Anillos")
        .row.p-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Anillos
            p El gráfico de anillos es una variante del diagrama circular que incorpora un espacio central, útil para incluir información adicional o mejorar la estética visual.
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema4/7.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Barras apiladas")
        .row.p-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Barras apiladas
            p Este gráfico permite comparar valores totales entre categorías y, al mismo tiempo, visualizar la composición interna de cada una mediante secciones apiladas.
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')
    
    h3.text-white.bg-color-4.d-md-inline.p-3.tarjeta Gráficos de distribución y relación

    p.mb-5.mt-5 Estos gráficos permiten analizar la dispersión de los datos o la relación entre dos variables, proporcionando información útil para identificar patrones, correlaciones o estructuras de frecuencia.es.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Histograma
              p El histograma agrupa los datos en intervalos o <em>bins</em> y muestra la frecuencia de cada grupo, siendo útil para analizar la distribución de una variable continua, como la edad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Dispersión (XY)
              p Este gráfico representa la relación entre dos variables numéricas mediante puntos ubicados según sus coordenadas X e Y, siendo esencial para el análisis de correlaciones.
    
    p.mb-5 En el siguiente video se presentan algunos tipos de gráficos que pueden aplicarse a los datos.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Personalización 
    
    p.mb-5 Un gráfico predeterminado rara vez comunica la información de forma óptima. Por ello, la personalización es fundamental para lograr una representación clara, precisa y visualmente efectiva. Al seleccionar un gráfico en Excel, se activan dos pestañas contextuales: “Diseño de gráfico” y “Formato”, desde donde se accede a todas las opciones de edición.

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Elementos del gráfico

    p.mb-5.mt-5 El botón “+” que aparece junto al gráfico permite añadir o quitar elementos clave para mejorar su comprensión y presentación. A continuación, se expone los principales elementos que se pueden añadir o quitar en un gráfico de Excel.

    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0.order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Elementos de un gráfico en Excel
        figure
          img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in", alt="Ilustración de gráfico de Excel con etiquetas que identifican componentes como título, leyenda, etiquetas de datos y líneas de cuadrícula.  ")
    
    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Títulos")
            p.ms-5 Los títulos del gráfico y de los ejes son elementos fundamentales; deben ser siempre claros, descriptivos y alineados con el propósito del análisis.
          div(titulo="Leyenda")
            p.ms-5 La leyenda identifica a qué serie de datos corresponde cada color; su posición puede modificarse para mejorar la visibilidad.
          div(titulo="Etiquetas de datos")
            p.ms-5 Estas etiquetas muestran el valor exacto de cada punto dentro del gráfico, facilitando una lectura precisa sin necesidad de estimación visual.
    
    .row
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Tabla de datos")
            p.ms-5 Es posible mostrar la tabla de datos subyacente justo debajo del gráfico, lo cual aporta contexto adicional sin necesidad de cambiar de vista.
          div(titulo="Líneas de cuadrícula")
            p.ms-5 Las líneas de cuadrícula facilitan la lectura de los valores en los ejes; se pueden activar o desactivar líneas primarias y secundarias..
          div(titulo="Línea de tendencia")
            p.ms-5 Esta línea permite visualizar la tendencia general de los datos, pudiendo adoptar distintos modelos (lineal, exponencial, logarítmico, etc.).
    
    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Estilos y colores

    .bg-full-width-2.bg-fondo-3.mb-5
      .p-4.p-md-5
        p.mb-5.mt-5 La pestaña Diseño de gráfico permite modificar rápidamente la apariencia del gráfico a través de estilos y paletas de colores predefinidas. A continuación, se presentan los estilos y colores que pueden aplicarse a un gráfico.
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Figura 7.
              span Estilos y colores de gráficos
            figure
              img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in", alt="Vista de opciones en Excel para aplicar estilos visuales y cambiar paletas de colores en gráficos. ")
        
    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Cambiar colores")
            p.ms-5 Desde esta opción se puede seleccionar una paleta de colores que se ajuste a la presentación o al estilo corporativo deseado.
          div(titulo="Estilo de diseño")
            p.ms-5 Esta función aplica un diseño preestablecido que modifica simultáneamente colores, formas y efectos visuales del gráfico con un solo clic.
    
    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Formato detallado

    p.mb-5.mt-5 Para un control más preciso sobre el diseño visual del gráfico, se puede hacer doble clic en cualquiera de sus elementos (barras, ejes, títulos, etc.) para acceder al panel lateral de formato detallado. A continuación, se presentan  las opciones de formato detallado para personalizar un gráfico en Excel.

    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0.order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Formato detallado de gráficos
        figure
          img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in", alt="Panel lateral de Excel con opciones de formato para personalizar colores, bordes, escala de ejes y disposición del gráfico. ")

    .row
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Color y borde")
            p.ms-5 Es posible modificar el color de relleno, el borde y aplicar sombras o degradados según el nivel de detalle requerido.
          div(titulo="Alineación y disposición")
            p.ms-5 Se puede ajustar la alineación del texto, la posición de etiquetas, o la orientación de elementos del gráfico.
          div(titulo="Escala de los ejes")
            p.ms-5 El usuario puede definir valores mínimos y máximos en los ejes para adaptar el gráfico al rango de datos relevante.
          div(titulo="Formato numérico")
            p.ms-5 Se permite configurar el tipo de número (porcentaje, moneda, decimales, etc.) para reflejar con precisión los valores representados.
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Interactividad
    
    p.mb-5 La verdadera potencia de Excel se manifiesta cuando los gráficos y visualizaciones adquieren un componente interactivo, permitiendo a los usuarios manipular los datos y explorar la información desde distintos ángulos sin perder claridad. La interactividad no solo hace que los datos sean más llamativos, sino que también potencia el análisis exploratorio, especialmente en contextos como presentaciones ejecutivas, reportes automatizados y dashboards de análisis dinámico.

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta Gráficos dinámicos

    p.mb-5.mt-5  Un gráfico dinámico está vinculado directamente a una tabla dinámica, lo que significa que cualquier cambio realizado en la tabla, como filtros, ordenaciones o reestructuraciones, se reflejará de manera inmediata en el gráfico. En el siguiente video se explica cómo generar este tipo de gráficos.
  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    h3.text-white.bg-color-4.d-inline.p-3.tarjeta <em>Dashboards</em> interactivos

    p.mb-5.mt-5  Un <em>dashboard</em> en Excel es una hoja de cálculo que reúne información clave de manera visual y compacta. Su funcionalidad se potencia al conectar múltiples gráficos y tablas dinámicas a controles de filtro compartidos, lo que permite generar reportes altamente explorables e intuitivos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Segmentaciones de datos (<em>Slicers</em>)
              p Las segmentaciones permiten filtrar los datos con un solo clic. Un <em>Slicer</em> puede vincularse a varias Tablas Dinámicas y Gráficos Dinámicos, sincronizando su comportamiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Escalas de tiempo (<em>Timelines</em>)
              p Las <em>Timelines</em> son filtros especializados en campos de fecha. Permiten seleccionar rangos temporales (años, trimestres, meses, días) de forma visual y sencilla.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conexión entre elementos
              p Al conectar varios elementos (gráficos, tablas, filtros), se crea una experiencia de análisis integrada, donde cada acción del usuario actualiza todos los componentes relacionados.

</template>

<script>
export default {
  name: 'Tema4',
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
