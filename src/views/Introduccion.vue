<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb- La sociedad actual atraviesa una era marcada por una fuerza invisible pero omnipresente: los datos. Las decisiones basadas en datos son decisiones más sólidas, así de claro. El uso de grandes volúmenes de información permite a los directivos fundamentar sus elecciones en evidencias y no en simples corazonadas. Por ello, los datos poseen el potencial de transformar la gestión.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El acceso a grandes volúmenes de información permite a los directivos y profesionales fundamentar sus elecciones en evidencias concretas, reduciendo la incertidumbre y aumentando la precisión de sus estrategias. Esta capacidad de transformar datos en conocimiento útil abre la puerta a mejoras sustanciales en la gestión de procesos, recursos y resultados.
    
    .bg-color-1.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En consecuencia, los datos no solo representan un recurso disponible, sino un activo estratégico que, bien administrado, puede impulsar la innovación, optimizar el rendimiento organizacional y redefinir la manera en que se toman decisiones.

</template>

<script>
export default {
  name: 'Introduccion',
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
