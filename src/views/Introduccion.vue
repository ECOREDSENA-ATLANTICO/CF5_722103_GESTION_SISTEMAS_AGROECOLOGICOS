<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 En este componente se desarrollan temáticas enfocadas al proceso de propagación de material vegetal, teniendo en cuenta la sistemática, la morfología y la fisiología de la planta, identificando de este modo las condiciones   óptimas para desarrollar el proceso.

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/QSlp7bHUzxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
