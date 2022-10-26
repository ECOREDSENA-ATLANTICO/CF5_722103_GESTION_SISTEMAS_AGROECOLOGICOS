<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Propagación vegetal
    
    .bg_color6
      .row.mb-5.justify-content-center.p-4.p-lg-0
        .col-12.col-lg-7.d-flex.align-items-center.positio-relative
          p.mt-5 Consiste en la multiplicación de las plantas y así conservar un cultivo con características específicas, siendo un proceso clave en el desarrollo ambiental, social y económico, y se reconoce como la producción de una planta a partir de dos alternativas: sexualmente a través de semillas o asexualmente a partir de tejidos, involucrando procesos sencillos hasta biotecnológicos.
          img.pst.d-none.d-lg-flex(src='@/assets/curso/tema5/img2.svg', alt='') 
          img.pst_1.d-none.d-lg-flex(src='@/assets/curso/tema5/img3.svg', alt='') 
        .col-12.col-lg-3
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema5/img1.png', alt='')
    
    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 5.1. Sexual
    
    p.mb-5 La propagación sexual se realiza por la semilla, que es el órgano a través del cual el nuevo individuo se dispersa. El éxito de este tipo de propagación está determinado por las características fisiológicas y bioquímicas de la semilla: sin embargo, hay factores externos que lo influyen, tales como el suelo, el clima, la potencia y la depredación de otros. 

    .row.mb-5
      .col-12.col-lg-4
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema5/img4.png', alt='')
      .col-12.col-lg-8
        p Comprende el desarrollo de las estructuras masculinas (polen) y femeninas (saco embrionario) de la flor. Los gametos tanto femeninos como masculinos están contenidos en el saco embrionario y el polen respectivamente. Durante la floración, el polen se transfiere de la antera al estigma (polinización), en donde germina. Un tubo polínico crece hasta llegar al saco embrionario dentro del óvulo. En el saco embrionario son descargados dos gametos masculinos, uno que se une al gameto femenino (fecundación) para producir el embrión (cigoto), el cual cuenta con las mismas características genéticas de la planta y otro que se unirá a los dos núcleos polares para producir el tejido nutricional de reserva, conocido como endospermo.
        .cajon.br_31.p-4
          p.mb-0 La selección de la semilla ha permitido al hombre propagar plantas de importancia alimentaria, medicinal e industrial. Dos tipos de plantas producen semillas, las gimnospermas (semillas desnudas) y angiospermas (óvulo y semilla se desarrollan dentro de un ovario). La vida de una semilla única comienza con la fecundación y el desarrollo de la planta madre hasta su germinación. Ver tabla.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4. 
          span <em>Propagación en gimnospermas y angiospermas</em>
            
        table(data-aos="fade-down-right")
          caption Nota. Adaptada del Manual de propagación de plantas superiores (2016). 
          thead
            tr
              td.h4.bg_color1.text-center Gimnospermas
              td.h4.bg_color2.text-center Angiospermas
          tbody
            tr
              td Semillas desnudas
              td Óvulo y semilla dentro de un ovario.
            tr
              td Se producen estróbilos
              td Órganos reproductores ubicados en la flor.
            tr
              td Formadas por embrión y tejido de reserva (gametofito femenino)
              td Pueden ser hermafroditas o flor estaminada.
            tr
              td Polinización por viento
              td Puede darse por esporogénesis masculina, esporogénesis femenina, polinización, fertilización, embriología y semilla.
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 5.2. Asexual
    
    p.mb-5 Casi siempre la nueva planta es genéticamente igual a su progenitor. Es la reproducción empleando partes de la planta original, hojas, ramas o tallos. Ver tabla.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5. 
          span <em>Diferencias entre propagación sexual y asexual</em>
            
        table(data-aos="fade-down-right")
          caption    Nota. Tomado de SENA (2022).
          thead
            tr
              td.h4.bg_color1.text-center Reproducción sexual
              td.h4.bg_color2.text-center Reproducción asexual
          tbody
            tr
              td Semillas propiamente dichas
              td Material vegetativo
            tr
              td La semilla proviene del fruto (flor)
              td Puede provenir de cualquier parte de la planta
            tr
              td Intervienen gametos
              td No intervienen gametos
            tr
              td Tienen características diferentes al progenitor 
              td Características iguales al progenitor
            tr
              td Reproducción por gametos masculinos y femeninos
              td La reproducción se da por un solo individuo de diferentes formas
            tr
              td Dos progenitores de dos sexos
              td Un progenitor
            tr
              td Implica unión de células
              td No implica unión de células

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 5.3. Material vegetal de propagación
    
    p.mb-5 Dentro de los materiales de propagación vegetal se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 28. 
          span <em>Material vegetal de propagación</em>
        figure
          img.img-t.mx-auto.mb-3(src='@/assets/curso/tema5/img5.svg', alt='')
          figcaption Nota. Tomado de SENA (s.f.).
    
    p En el proceso de reproducción de los vegetales existen dos tipos de reproducción vegetativa: reproducción sexual y reproducción asexual.
    p.mb-5 Se expone este proceso a continuación.
 
    .bg_23.p-4.mb-5
      .row.mb-5.justify-content-around
        .col-6.col-lg-4
          p.text-bold POR MEDIO DE PROPAGACIÓN ASEXUAL
        .col-6.col-lg-4
          p.text-bold POR MEDIO DE PROPAGACIÓN SEXUAL
      .row.justify-content-center
        .col-lg-9
          ImagenInfografica.color-secundario.br_34.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema5/img6.svg', alt='Texto que describa la imagen')
              .tarjeta.bg_24.p-4(x="19%" y="3.5%" numero="")
                p.m-0 <b>Semillas:</b> consta de activación (hidratación), digestión y translocación (reserva de grasas, proteínas y carbohidratos), crecimiento de la plántula (división celular). 
              .tarjeta.bg_25.p-4(x="3%" y="31.5%" numero="")
                p.m-0 <b>Por injerto:</b> unir entre sí dos porciones de tejido vegetal viviente, de tal manera que se unan y posteriormente crezcan y se desarrollen como una planta. Se componen del patrón y la púa.
              .tarjeta.bg_35.p-4(x="3%" y="59.5%" numero="")
                p.m-0 <b>Por estaca:</b> se corta una porción de tallo, raíz u hoja, luego se coloca bajo condiciones ambientales específicas y se induce a la formación  de raíces, tallos, para obtenerse una planta independiente e igual a la madre.
              .tarjeta.bg_27.p-4(x="18%" y="87.5%" numero="")
                p.m-0 <b>Por acuerdo:</b> se provoca la formación de raíces en una porción del tallo, que está todavía adherida a la planta madre, mientras dura el enraizamiento.
              .tarjeta.bg_24.p-4(x="66.7%" y="3.5%" numero="")
                p.m-0 <b>Plantas anuales</b>, son aquellas que completan su ciclo de vida semilla-planta-semilla.
              .tarjeta.bg_38.p-4(x="82.7%" y="31.5%" numero="")
                p.m-0 <b>Plantas bianuales,</b> plantas que requieren de dos años para completar su ciclo de vida. Ellas crecen y almacenan los productos elaborados  durante un periodo determinado y al año producen semillas.
                ul.lista-ul.mb-3
                  li 
                    i.fas.fa-caret-right.fa-lg.colr
                    span <b>El patrón</b> es la parte inferior del injerto de donde se forma el sistema radicular de la planta, puede proceder de la semilla, la estaca o el acodo.
                  li 
                    i.fas.fa-caret-right.fa-lg.colr
                    span <b>La púa</b> o injerto es un pequeño trozo  de rama separado de la planta madre que tiene yemas en reposo y forma la parte superior del injerto.

              .tarjeta.bg_35.p-4(x="82.7%" y="59.5%" numero="")
                p.m-0 <b>Plantas perennes,</b> plantas de vida larga, las cuales viven más de dos años

    separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 5.4.  Instalaciones, diseños, equipos y bioseguridad
    
    .bg_color6
      .row.mb-5.justify-content-center.p-4.p-lg-0 
        .col-12.col-lg-3
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema5/img8.png', alt='')
        .col-12.col-lg-7.d-flex.align-items-end.positio-relative
          div
            .row.mb-4
              .col-auto
                img(src='@/assets/curso/tema5/img9.svg', alt='')
              .col-lg-3.col-md-6.col-6
                p.mt-2.text-bold Viveros y semilleros
            p Los diseños dependen del tipo de lugar y de sus condiciones climáticas, por lo cual se debe pensar 	en la funcionalidad, la resistencia y la luminosidad,  estos pueden ser semicirculares, elípticas, de una o dos aguas; puede o no tener diseño y equipos especiales, y estar construidos en bambú, hierro galvanizado, madera y aluminio; el techo puede ser en plástico o vidrio, depende de las condiciones del lugar y del presupuesto.
          img.pst.d-none.d-lg-flex(src='@/assets/curso/tema5/img2.svg', alt='') 
          img.pst_1.d-none.d-lg-flex(src='@/assets/curso/tema5/img3.svg', alt='')
    
    .row.mb-5.justify-content-center
      .col-12.col-lg-5.mb-3.mb-lg-0
        .bg_36.p-5
          figure
            img.img-t.mb-5(src='@/assets/curso/tema5/img10.svg', alt='')
          h4 Almácigos
          p Método para sembrar semillas en recipientes de menor tamaño y manejable, hasta que la plántula tenga un tamaño adecuado para trasplantar a la huerta, es decir, cuando tiene 3 o 4 hojas verdaderas. Permite adelantar cosechas, facilita labores de riego y protección. 
      .col-12.col-lg-5
        .bg_37.p-5
          figure
            img.img-t.mb-5(src='@/assets/curso/tema5/img10.svg', alt='')
          h4 Laboratorios
          p implementación de herramientas tecnológicas para los procesos de propagación in situ (clonación) bajo condiciones estériles, libres de virus y bacterias, permite generar genotipos deseados y obtención de altos volúmenes de plantas.

    p A la hora de realizar el proceso de propagación vegetal es importante tener en cuenta el tipo y los métodos de propagación, los medios de germinación (sustratos), la desinfección de los medios, las condiciones ambientales, el tipo de cultivo, el proceso de fertilización, el riego y la rastreabilidad del proceso, los materiales de propagación, los fertilizantes, la gestión de residuos, la salud y seguridad en el trabajo, es decir, tener en cuenta las normas vigentes que garanticen el éxito del proceso de propagación.






</template>

<script>
export default {
  name: 'Tema5',
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
