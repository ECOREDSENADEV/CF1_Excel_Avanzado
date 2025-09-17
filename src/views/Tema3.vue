<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manipulación de datos
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La manipulación de datos es el proceso mediante el cual se transforman datos brutos en estructuras más organizadas, legibles y adecuadas para el análisis. Frecuentemente, los datos que se importan o reciben no se encuentran en el formato exacto requerido para su uso inmediato.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concatenar
    
    p.mb-0 La concatenación consiste en unir múltiples elementos de datos para formar un nuevo campo o una cadena de texto combinada. Esta técnica es especialmente útil cuando se desea construir identificadores, nombres compuestos, direcciones formateadas u otros datos derivados a partir de varias columnas existentes.
    p.mb-5 A continuación, se presentan los principales tipos de concatenación:

    .row
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Simple")
            p.ms-5 Une directamente dos o más campos de texto en una sola cadena. Se emplea comúnmente para combinar nombres y apellidos, o ensamblar identificadores básicos.
          div(titulo="Con separadores")
            p.ms-5 Inserta caracteres específicos (como espacios, comas o guiones) entre los elementos concatenados. Mejora la legibilidad y mantiene un formato estándar.
          div(titulo="Condicional")
            p.ms-5 Aplica lógica para incluir o excluir ciertos elementos según condiciones establecidas. Permite generar cadenas de texto dinámicas.
          div(titulo="De múltiples tipos")
            p.ms-5 Combina texto con números o fechas, cuidando el formato adecuado. Puede requerir conversión explícita para mantener coherencia en la presentación.
          div(titulo="Masiva")
            p.ms-5 Aplica concatenación de forma eficiente a grandes volúmenes de datos. Requiere optimización de rendimiento y control sobre el uso de recursos.
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Texto 
    
    p.mb-5 La manipulación de texto comprende diversas técnicas aplicadas al procesamiento de datos textuales, con el objetivo de asegurar consistencia, facilitar el análisis y mejorar la presentación.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Limpieza de texto
              p Elimina espacios innecesarios, caracteres no deseados y normaliza la capitalización. Es esencial para garantizar la uniformidad y evitar errores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Extracción de subcadenas
              p Permite obtener porciones específicas de un texto, utilizando posiciones, delimitadores o patrones. Es útil para <em>parsing</em> de datos no estructurados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Búsqueda y reemplazo
              p Localiza patrones específicos y los sustituye por nuevos valores. Puede incluir expresiones regulares para abordar patrones complejos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Transformaciones de formato
              p Modifica el formato del texto (mayúsculas, minúsculas, título, <em>camelCase</em>). Mejora la presentación y facilita la normalización de registros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Análisis de texto
              p Aplica técnicas de procesamiento de lenguaje natural (PLN) para extraer <em>insights</em> de texto libre, como análisis de sentimientos o entidades.
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Filtrado
    
    p.mb-5 El filtrado de datos permite focalizar el análisis en subconjuntos relevantes, excluyendo información irrelevante o no deseada. Existen diferentes tipos de filtros según el tipo de análisis requerido:

    .row
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Filtros de valor")
            p.ms-5 Seleccionan registros basados en valores específicos. Incluyen operaciones de igualdad exacta o aproximada.
          div(titulo="Filtros de rango")
            p.ms-5 Aplican criterios sobre intervalos numéricos o temporales. Son útiles para segmentar períodos o rangos de valores.
          div(titulo="Filtros de patrón")
            p.ms-5 Utilizan <em>wildcards</em>, expresiones regulares o coincidencias difusas (<em>fuzzy matching</em>) para encontrar datos que siguen patrones textuales.
          div(titulo="Filtros compuestos")
            p.ms-5 Combinan múltiples criterios usando lógica booleana (<em>AND, OR, NOT</em>). Permiten consultas complejas y detalladas.
          div(titulo="Filtros dinámicos")
            p.ms-5 Permiten modificar los criterios en tiempo real y visualizar resultados actualizados de inmediato. Favorecen la exploración iterativa de datos.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Ordenación
    
    p.mb-5 La ordenación organiza los datos según criterios específicos, facilitando su análisis, lectura y presentación. Dependiendo de la complejidad del conjunto de datos, se pueden aplicar diversos enfoques:

    SlyderF(columnas="col-12 col-lg-4").p-5.mb-5
      .bg-color-6.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
        h4.text-center.mb-4 Ordenación simple
        p.text-center Organiza los datos en función de un solo campo, en orden ascendente o descendente.
      .bg-color-6.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
        h4.text-center.mb-4 Ordenación múltiple
        p.text-center Utiliza varios campos con niveles de prioridad. Permite un ordenamiento más estructurado para análisis complejos.
      .bg-color-6.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
        h4.text-center.mb-4 Ordenación personalizada
        p.text-center Define un orden específico para valores categóricos que no siguen una secuencia alfabética o numérica natural.
      .bg-color-6.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
        h4.text-center.mb-4 Ordenación estable
        p.text-center Conserva el orden original de los registros cuando tienen valores idénticos en el campo ordenado.
      .bg-color-6.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
        h4.text-center.mb-4 Optimización de rendimiento
        p.text-center Aplica algoritmos eficientes para ordenar grandes volúmenes de datos. Considera la memoria y los tiempos de procesamiento.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Eliminación
    
    

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-5 La eliminación de datos es una operación crítica que debe realizarse con precaución para evitar la pérdida de información relevante o la alteración de relaciones entre datos. Existen varias estrategias según el tipo de limpieza o depuración que se requiera:
        SlyderF(columnas="col-12 col-lg-4").p-5.mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Eliminación de duplicados
            p.text-center Identifica y elimina registros repetidos con base en uno o más criterios. Es fundamental para evitar distorsiones en análisis agregados.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Eliminación condicional
            p.text-center Remueve datos que cumplen condiciones específicas. Útil para excluir registros obsoletos, inválidos o irrelevantes.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Eliminación de valores nulos
            p.text-center Gestiona campos vacíos mediante su eliminación, sustitución o retención, según el impacto en el análisis.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Eliminación temporal
            p.text-center Marca los datos como eliminados sin suprimirlos físicamente. Permite auditorías y recuperación futura, manteniendo el rendimiento.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Validación pre-eliminación
            p.text-center Evalúa dependencias y relaciones antes de eliminar. Previene errores de integridad referencial y pérdida de coherencia en los datos.

        


</template>

<script>
export default {
  name: 'Tema3',
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
