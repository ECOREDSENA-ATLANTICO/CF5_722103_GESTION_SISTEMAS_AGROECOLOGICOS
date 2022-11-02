<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Fisiología vegetal
    
    .bg_color7
      .row.mb-5.justify-content-center.p-4.p-lg-0
        .col-12.col-lg-6.d-flex.align-items-center(data-aos="fade-right")
          p.mt-3 Es la ciencia que permite estudiar el funcionamiento de la planta, comprender los fenómenos que ocurren en su interior, entre ellos, cómo se transporta el agua y los nutrientes a través de la raíz, tallo, hojas y el intercambio con la atmósfera, además de las distintas reacciones químicas que permiten transformar los nutrientes y el agua para el aprovechamiento de la planta. En sí la fisiología vegetal brinda herramientas para comprender el metabolismo de las plantas.
        .col-12.col-lg-4(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema4/img1.png', alt='')
    
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.1 Fotosíntesis y respiración vegetal
      
    p Dentro del proceso de fotosíntesis la energía solar juega un papel fundamental, ya que mediante su transformación a energía química los organismos autótrofos obtienen la energía y los nutrientes necesarios para su desarrollo. 
    p.mb-5 La <b>fotosíntesis</b> la <b>respiración</b> son procesos complementarios a continuación se muestra el proceso: 

    .row.justify-content-center.mb-5
      .col-12.col-lg-8(data-aos="fade-down-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema4/img4.png', alt='')
    
    .row.mb-4
      .col-auto
        img(src='@/assets/curso/tema4/img5.svg', alt='')
      .col-lg-3.col-md-6.col-6
        h3.mt-2(data-aos="fade-right") Proceso de óxido reducción
    
    p.mb-5 Se genera la producción de una sustancia orgánica (glúcido) a partir de moléculas inorgánicas (dióxido de carbono como sustrato y el agua como dador de electrones que se oxida), mediante el aprovechamiento de la energía lumínica (la cual queda almacenada como energía química dentro de la molécula sintetizada), generando desprendimiento de oxígeno.

    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema4/img6.png', alt='')
      .col-12.col-lg-8(data-aos="fade-left")
        .row.mb-4
          .col-auto
            img(src='@/assets/curso/tema4/img5.svg', alt='')
          .col-lg-6.col-md-8.col-9
            h3.mt-2(data-aos="fade-right") El dióxido de carbono 
        
        p se encuentra en la atmósfera, de donde se traslada por difusión a través del ostiolo hasta las paredes del mesófilo y desde allí se traslada a los cloroplastos, en donde finalmente se lleva a cabo el proceso de fotosíntesis.
        p Las moléculas de clorofila están ubicadas en las membranas tilacoides, siendo así que la clorofila (pigmento verde en las hojas) captura la luz solar, además las venas de la planta son las encargadas de transportar el agua desde la raíz hasta las hojas y el dióxido de carbono necesario, en el proceso entra a las hojas por el aire a través de los estomas, para finalmente modificar la savia bruta en savia elaborada, para alimentar la planta.
        .cajon.br_31.p-4
          p.mb-0 Para que ocurra la  fotosíntesis es indispensable la luz solar, por ende se considera un proceso endotérmico (precisa de energía), además es importante regular el agua en la planta, pues cuando la planta está deshidratada cierra los estomas para evitar agotar las reservas, obstaculizando el proceso de fotosíntesis.
    
    p Por otro lado, en el proceso de la respiración el oxígeno y la glucosa se transforman en dióxido de carbono y agua, la planta no necesita de luz solar de manera constante, por lo que es un proceso continuo y exotérmico.
    p Cuando no hay presencia de energía solar, esta se obtiene de reservas energéticas de la planta, las cuales se componen en su mayoría por almidón, para el aprovechamiento de dicha energía se dividen las moléculas compuestas de glucosa, luego se trasladan al interior de las células en donde se convierten en moléculas orgánicas. las cuales penetran en las mitocondrias, en donde se desarrolla el proceso de respiración.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.2 Hormonas vegetales
    
    .bg_16.p-5.mb-4.mb-lg-0.mt_2
      .row.justify-content-eleven.align-items-center
        .col-lg-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema4/img7.png', alt='') 
        .col-lg-7.col-xl-8.col-xxl-7.mt-3(data-aos="fade-right")
          p.m-0 Las fitohormonas son compuestos naturales producidos en las plantas y se encargan de estimular, inhibir o modificar el desarrollo, regulando eventos fisiológicos. Se encuentran en todas las partes de la planta, aunque se concentran donde se requiere mayor demanda. A continuación vea su clasificación:
    
    .bg_22.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            div
              p.text-bold.mb-0 Función
              p Auxinas.
              p.text-bold.mb-0 Fitohormona
              p Meristemos apicales y hojas.
              p.text-bold.mb-0 Lugar de formación
              p Crecimiento y diferenciación celular, desarrollo de raíces, crecimiento y maduración de frutos.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema4/img8.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            div
              p.text-bold.mb-0 Función
              p Giberelinas.
              p.text-bold.mb-0 Fitohormona
              p Meristemos, semillas en germinación.
              p.text-bold.mb-0 Lugar de formación
              p Germinación, crecimiento y elongación de los tallos, floración.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema4/img9.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            div
              p.text-bold.mb-0 Función
              p Citoquininas.
              p.text-bold.mb-0 Fitohormona
              p Meristemos (raíces, tallos y hojas).
              p.text-bold.mb-0 Lugar de formación
              p División celular.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema4/img10.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            div
              p.text-bold.mb-0 Función
              p Ácido abscísico.
              p.text-bold.mb-0 Fitohormona
              p Semillas, tallos, hojas y frutos.
              p.text-bold.mb-0 Lugar de formación
              p Maduración embrionaria, dormancia en semillas, senescencia, cierre estomático.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema4/img11.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            div
              p.text-bold.mb-0 Función
              p  Etileno.
              p.text-bold.mb-0 Fitohormona
              p Hojas durante la maduración del fruto.
              p.text-bold.mb-0 Lugar de formación
              p Maduración y abscisión de los frutos. Senescencia de las hojas y las flores.
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema4/img11.png', alt='Texto que describa la imagen')
    
    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.3 Nutrición y manejo nutricional vegetal
    
    p.mb-5 Los nutrientes requeridos por las plantas son de naturaleza inorgánica y son indispensables para cumplir con los procesos fisiológicos y bioquímicos. Dentro de los cuales se encuentran los  macronutrientes (N, H, O, S, P, K, Ca, Mg, Na y Si)  y los micronutrientes (Fe, Mn, Cu, Zn, Mo, B y Cl), que se clasifican de la siguiente manera:
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3. 
          span <em>Clasificación de los nutrientes vegetales</em>
        .tabla-a.color-acento-botones
          table(data-aos="fade-down-right")
            caption Nota. Principios de nutrición vegetal (2000). 
            thead
              tr
                td.h4.bg_color1.text-center Elemento nutritivo
                td.h4.bg_color2.text-center Absorción 
                td.h4.bg_color1.text-center Función bioquímica
            tbody
              tr
                td C, N, H, O, S
                td En forma de CO2, HCO3-, H2O, O2, NO3-, NH4 +, iones de suelo, gases de la atmósfera.
                td Implicados en procesos enzimáticos, asimilación por reacciones de óxido reducción.
              tr
                td P, K, Si 
                td En forma de fosfatos, ácido bórico, silicatos de la solución del suelo. 
                td Implicados en reacciones de transferencia energética. 
              tr
                td K, N, Mg, Ca, Mn, Cl
                td En forma de iones en la solución del suelo.
                td Controladores de la permeabilidad de la membrana y electropiales.
              tr
                td Fe, Cu, Zn y Mo
                td En forma de iones o quelatos de la solución del suelo.
                td Permiten el transporte de electrones  por cambio de valencia.
    
    p.mb-5 Factores que controlan el contenido mineral de las plantas:

    .row.p-4
      .col-12.col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        .br_32.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img.img-t.mx-auto.mt-3(src='@/assets/curso/tema4/img12.svg', alt='')
            .col-12.col-lg-9
              p.m-0.mt-4 Potencial de absorción de nutrientes y minerales propios de cada especie.
      .col-12.col-lg-6(data-aos="fade-left")
        .br_33.p-4.h-100
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0 
              figure
                img.img-t.mx-auto.mt-2(src='@/assets/curso/tema4/img13.svg', alt='')
            .col-12.col-lg-9
              p.m-0 Disponibilidad de los nutrientes en el medio, pues la planta necesita que cada nutriente esté en determinadas concentraciones en los tejidos, con el fin de que se dé el desarrollo adecuado y no se cause la muerte vegetal.
    
    p.mb-5 Es importante tener en cuenta que los macronutrientes se encuentran en mayor concentración que los micronutrientes, de ahí la importancia de cumplir con los requerimientos específicos de la especie vegetal. La edad del tejido también influye en la cantidad de minerales contenidos en las plantas.

    .bg_31.p-5
      .row.justify-content-eleven.align-items-center
        .col-lg-4.col-xl-3.col-xxl-4.mb-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema4/img14.svg', alt='') 
        .col-lg-7.col-xl-9.col-xxl-7.mt-4(data-aos="fade-right")
          p.m-0 El suelo se considera como reservorio de nutrientes y cada una de sus fases representa un papel primordial en el suministro de nutrientes, la fase sólida contiene nutrientes catiónicos (K, Na, Ca, Mg, Mn, Zn y Cu), mientras que las partículas orgánicas de esta fase proveen N, P, S. La fase líquida de la solución del suelo es la principal responsable del transporte de nutrientes en el suelo y la fase gaseosa del suelo participa en el intercambio gaseoso que ocurren entre los organismos vivos del suelo (bacterias, hongos, raíces de la planta, bacterias y animales) y la atmósfera.



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
