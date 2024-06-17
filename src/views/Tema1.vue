<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Botánica

    .bg_1.pt-2.mb-4
      .row.justify-content-end
        .col-lg-6.align-self-center.mb-4.mb-lg-0(data-aos="fade-right")
          p.m-0.mt-4.mx-3.mx-lg-0 Proviene de la palabra griega “planta o vegetal”, hace parte de la biología y se encarga de estudiar de manera general las plantas, además de investigar otros organismos fotosintéticos (algas y bacterias), permitiendo de esta forma entender la evolución de los vegetales. Para su estudio resulta importante analizar la morfología, la sistemática y la fisiología vegetal. 
        .col-lg-5.mb-0.mb-lg-4(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img02.png', alt='') 

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.1 Conceptos básicos

    p Para  el estudio de la botánica es indispensable tener claridad de los siguientes conceptos y en lo indicado en la figura 1.

    .bg_2.p-4.py-5
      .row.justify-content-center.mb-5
        .col-lg-8
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img03.png', alt='Texto que describa la imagen')

              .tarjeta.bg_4.p-4(x="1.6%" y="16.2%" numero="1")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Clasificación de los seres vivos
                    p.m-0 Mediante la clasificación biológica se pueden agrupar y categorizar los organismos y sus taxones, permitiendo establecer un orden entre los diversos organismos (móneras, protistas, hongos, plantas y animales).

              .tarjeta.bg_5.p-4(x="35.6%" y="12.6%" numero="2")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Categorización del reino vegetal
                    p.m-0 Dentro del reino vegetal se encuentran organismos como: <b>musgos (briofitos), helechos (pteridófitos o criptógamas), plantas con flor (espermatófitos / fanerógamas).</b>

              .tarjeta.bg_6.p-4(x="66.2%" y="9.6%" numero="3")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Caracterización bioclimática
                    p.m-0 La distribución de las plantas en los ecosistemas dependen de la temperatura (termoclimas) y las precipitaciones (ombroclimas).

              .tarjeta.bg_7.p-4(x="81.5%" y="3.5%" numero="4")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Cronología
                    p.m-0 Ciencia encargada del estudio de las áreas de distribución de los seres vivos, siendo el conjunto de localidades donde crece un ser vivo (reino, región, superprovincia, provincia, subprovincia, sector, subsector).
              
              .tarjeta.bg_8.p-4(x="12.9%" y="70.3%" numero="5")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Tipos biológicos
                    p.m-0 En el proceso de adaptación y convergencia a diversos ambientes y climas las plantas desarrollan caracteres externos a nivel estructural y morfológico (biotipos), entre los que se encuentran fanerófitos, caméfitos, hemicriptófitos, criptófitos.

              .tarjeta.bg_9.p-4(x="37.4%" y="87.2%" numero="6")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Regiones Florísticas 
                    p.m-0 Se genera endemismo a nivel de familia y género (región ártica, eurosiberiana, región mediterránea, región centroasiática).
                    
              .tarjeta.bg_10.p-4(x="81.5%" y="90.5%" numero="7")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Reinos Florísticos
                    p.m-0 Territorios amplios en donde se dan endemismos a nivel de orden y familia (reino holártico, reino paleotropical, reino neotropical, reino capense, reino australiano, reino antártico).
                        
      .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
        h5 Figura 1.
        span <em>Formas biológicas</em>
      
      .bg_3.px-4
        .row
          .col-lg-6
            .row.justify-content-center
              .col-lg-5.col-md-5.col-xl-6.col-xxl-5.bg_11.py-2
                h3.text-center.m-0 Época favorable
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img04.svg', alt='')
          .col-lg-6
            .row.justify-content-center.mb-4
              .col-lg-5.col-md-5.bg_11-0.py-2
                h3.text-center.m-0 Época desfavorable
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img05.svg', alt='')
                    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.2 Importancia 

    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        img.img-t.m-auto(src='@/assets/curso/tema1/img06.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p La botánica cumple funciones primordiales que contribuyen al desarrollo ambiental, social y económico, pues su estudio permite comprender la evolución de la vida en la Tierra.
        p A continuación los diversos factores que facilitaron su desarrollo y progreso. 

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/BPZm9jZ-rAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
