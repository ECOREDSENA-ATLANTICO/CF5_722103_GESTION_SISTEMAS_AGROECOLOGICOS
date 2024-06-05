<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Es importante tener cuenta que existen diversas formas de propagación vegetal de las plantas, por lo cual es necesario conocer la especie y las condiciones propias que permitan que se desarrolle el proceso a cabalidad y de manera exitosa, identificando las variables técnicas, ambientales, sociales y económicas que involucre, con miras a obtener los resultados esperados.
    p Es indispensable conocer la sistemática, la morfología y la fisiología de la planta, de tal modo que permita identificar las condiciones óptimas para desarrollar el proceso de propagación del material vegetal, teniendo en cuenta los tipos, las características, las instalaciones, las técnicas, los métodos, los cuidados, entre otros, ampliando de esta manera los conocimientos en el área y mejorando las capacidades para planear el sistema agroecológico.
    p Dentro de la planificación del proceso de propagación vegetal se debe tener en cuenta la normatividad vigente que garantice el cumplimiento responsable de las obligaciones técnicas, ambientales y sociales.
    p.mb-5 Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
