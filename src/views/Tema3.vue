<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Morfología vegetal

    .bg_16.p-5
      .row.justify-content-eleven.align-items-center
        .col-lg-4.mb-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img01.svg', alt='') 
        .col-lg-7.col-xl-8.col-xxl-7.mt-4
          p.m-0 Rama de la Botánica que se encarga de estudiar la organización interna y la forma externa de la planta. Dentro de la morfología interna se encuentra la anatomía, la citología e histología y dentro de la morfología externa se trata la forma.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.1. Fuentes de información de sistemas agroecológicos

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-7.mb-3
        p Encargada de estudiar la célula vegetal (forma, tamaño, estructura y función), por lo cual resulta importante mencionar que los organismos, las plantas y los animales están conformados por células (unidad básica de los organismos vivos).   
        .bg_17.p-4
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              img.img-t.mx-auto(src='@/assets/curso/tema3/img03.svg', alt='')
            .col-lg-9.col-md-8.col-xl-8.col-xxl-9
              p.m-0 La célula vegetal está compuesta por los siguientes componentes celulares, los cuales cumplen fun ciones específicas dentro de la misma:
      .col-lg-5
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img03.png', alt='')

    
    .row.justify-content-center.mb-5
      .col-lg-12
        figure
          img.img-t.m-auto.d-none.d-lg-block(src='@/assets/curso/tema3/img04.png', alt='')
        figure
          img.img-t.m-auto.d-lg-none.d-md-block(src='@/assets/curso/tema3/img05.png', alt='')  

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1. 
          span <em>Organelos celulares</em>
            
        table(data-aos="fade-down-right")
          thead
            tr
              td.h4.bg_color1.text-center(colspan="3") ORGANELO
              td.h4.bg_color2.text-center(colspan="7") FUNCIÓN
          tbody
            tr
              td(colspan="3") Protoplasto
              td(colspan="7") Componentes que se encuentran dentro de la pared celular.
              
            tr
              td(colspan="3") Protoplasma
              td(colspan="7") Parte viva de la célula compuesta por el núcleo y el citoplasma.
              
            tr
              td(colspan="3") Citoplasma
              td(colspan="7") Contenido celular ubicado entre el núcleo y la pared celular (aguas, sustancias orgánicas, proteínas, lípidos, sales, organelos y otros compuestos).
              
            tr
              td(colspan="3") Membrana citoplasmática
              td(colspan="7") Formada por sustancias ergásticas y es la encargada de permitir la entrada y salida de sustancias.
              
            tr
              td(colspan="3") Plástidios
              td(colspan="7") Se forman por los plastidios a partir de protoplastos que se encuentran en los tejidos meristemáticos.
              
            tr
              td(colspan="3") Leucoplastos
              td(colspan="7") Indecorosas, no están expuestas a la luz (por ejemplo, órganos subterráneos) y almacenan almidón y aceites.
              
            tr
              td(colspan="3") Cloroplastos
              td(colspan="7") Estructuras celulares de forma discoidal.

            tr
              td(colspan="3") Cromoplasto
              td(colspan="7") Estructuras celulares de forma triangular, elíptica, esferoidal, que se desarrollan a partir de los leucoplastos.
              
            tr
              td(colspan="3") Mitocondria	
              td(colspan="7") Se encarga del proceso de respiración aeróbica.
              
            tr
              td(colspan="3") Retículo endoplasmático
              td(colspan="7") Se encarga de transportar las sustancias por toda la célula y posibilitar las reacciones químicas.
              
            tr
              td(colspan="3") Dictiosoma
              td(colspan="7") Sintetiza polisacáridos, hemicelulosa y pectina.
              
            tr
              td(colspan="3") Ribosoma
              td(colspan="7") Síntesis de proteínas.
              
            tr
              td(colspan="3") Núcleo
              td(colspan="7") Regula el metabolismo celular.
              
            tr
              td(colspan="3") Envoltura nuclear
              td(colspan="7") Permite la comunicación entre el interior del núcleo y el citoplasma.
            
            tr
              td(colspan="3") Cromatina
              td(colspan="7") Complejo ADN y proteínico.
              
            tr
              td(colspan="3") Nucléolo
              td(colspan="7") En él se fabrica el ARN ribosomal.
              
            tr
              td(colspan="3") Pared celular
              td(colspan="7") Le brinda resistencia y forma a la célula.
                              
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 8. 
          span <em>Estructura de una célula vegetal eucariota</em>    
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img06.svg', alt='')

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.2. Histología 

    p.mb-5 Los vegetales multicelulares tienen tejidos y órganos, pero estos difieren según el nivel de organización, cada órgano de la planta (tallos, hojas, raíces, flores) está formado por diferentes tejidos que provienen de la proliferación y diferenciación celular, entre los cuales se encuentran:
    
    .bg_22.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 TEJIDO MERISTEMO
            p Meristemo, son considerados tejidos embrionarios, persisten en la planta durante toda su vida  y se encarga del crecimiento permanente de la planta y se dividen en ápices, brotes, raíces y meristemos laterales. Se encuentran en las partes apicales (yemas y ápices de las raíces.               
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema3/img07.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 TEJIDO PAREQUIMÁTICO
            p Tejido parenquimático, es abundante y en él tienen lugar actividades como la fotosíntesis,  la respiración, el almacenamiento de reservas, la secreción y la excreción. Se agrupa en parénquima clorofílico (fotosintético) y parénquima de reserva. Se encuentra en la médula, el córtex de tallos y raíces, pulpa de frutos, endospermo o albumen de las semillas, en el mesófilo de las hojas y se asocian al xilema y el floema.             
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema3/img08.png', alt='Texto que describa la imagen')
        
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 TEJIDO COLENQUIMÁTICO
            p Tejido colenquimático, proviene del procambium o meristema fundamental, se encuentra en la periferia del tallo o bien en forma de heces colenquimáticas, en peciolos y tallos. Sirve como sostén de los órganos que están en crecimiento.              
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema3/img09.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 TEJIDO ESCLERINQUIMÁTICO
            p Tejido esclerenquimático, aparece cuando se lignifican las paredes celulares de los tejidos parenquimatoso y colenquimático. Se encuentran fibras (tallos, hojas y frutos) y esclereidas (cubiertas de semillas, endocarpio del coco y del ciruelo, pulpa de algunos frutos o en ápices de ciertas hojas). Sirven como sostén de la planta.             
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 TEJIDO EPIDÉRMICO 
            p Tejido epidérmico, se encuentra en la parte externa de las raíces, hojas y tallos jóvenes. Sirven como protección, limitación de la transpiración, intercambio de gases a través de los estomas, almacenamiento de sustancias y secreción.              
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema3/img11.png', alt='Texto que describa la imagen')
        
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 PERIDERMIS
            p Peridermis, reemplaza la epidermis en tallos y raíces, está constituido por felógeno, corcho o felema y felodermis.               
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema3/img12.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            h4.mb-4 TEJIDO VASCULAR
            p Tejido vascular, se origina del procambium y cambium vascular y está constituido por el xilema (transporta savia bruta) y el floema (transporta savia elaborada).
          .col-11.col-lg-5.mt-0.mt-md-4
            figure
              img(src='@/assets/curso/tema3/img13.png', alt='Texto que describa la imagen')

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.3. Anatomía y morfología de las plantas

    p.mb-5 El cuerpo de una planta está estructurado por dos sistemas: el caulinar y el radical. Ver figura.

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 9. 
          span <em>Estructura del cuerpo de las plantas Dicotiledónea y Monocotiledónea</em>    
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img14.png', alt='')
        figcaption.ms-2 Nota. Tomado de Anatomía y morfología vegetal (2019).

    .bg_23.p-5
      .row.justify-content-center.mb-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 10. 
            span <em>La raíz</em>    
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img15.svg', alt='')
          .row.justify-content-center.mt-4
            .col-lg-11
              figcaption.mx-3 Nota. Tomado de Anatomía y morfología vegetal (2019).

    p.mb-5 Las raíces se clasifican según su origen en: raíz principal, raíz secundaría y raíz adventista. Ver figura.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 11. 
          span <em>Raíces según el origen: principales, secundarias y raíces adventicias</em>    
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img16.png', alt='')
            .bg_color1.p-3
              p.text-center.text-bold Raiz principal 
          .col-lg-4
            figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img17.png', alt='')
            .bg_color1.p-3
              p.text-center.text-bold Raiz secundaria 
          .col-lg-4
            figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img18.png', alt='')
            .bg_color1.p-3
              p.text-center.text-bold Raiz adventicia 

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 12. 
          span <em>Tipos de raíces según la morfología: A. pivotante (dicotiledónea) y B. fibrosa (monocotiledónea)</em>    
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img19.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption Nota. Tomado de Anatomía y morfología vegetal (2019).

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 13. 
          span <em>Raíces carnosas</em>    
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img20.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption Nota. Tomado de Anatomía y morfología vegetal (2019).

    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 14. 
          span <em>Raíces modificadas</em>    
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img21.png', alt='')
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img22.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption Nota. Tomado de Anatomía y morfología vegetal (2019).

    .bg_16.p-5
      .row.justify-content-eleven.align-items-center
        .col-lg-4.mb-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img23.png', alt='') 
        .col-lg-7.col-xl-8.col-xxl-7.mt-4
          p.m-0 Las raíces sirven como sostén de la planta, permiten la absorción de nutrientes, la conducción de sustancias, ayudan a la reproducción vegetativa y además contribuyen al almacenamiento de sustancias de reserva. También pueden ser utilizadas como alimento, en la industria y en la medicina. Vea a continuación cómo está compuesto <b>el sistema caulinar</b> y cómo se clasifican los diferentes tallos:

    p.mb-5 <b>El sistema caulinar</b>, este comprende el tallo, las ramas y las hojas de la planta. 

    .bg_23.p-4
      .row
        .col-lg-9
          ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/img24.png', alt='Texto que describa la imagen')

              .tarjeta.bg_4.p-4(x="4.6%" y="53%" numero="1")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Clasificación de los seres vivos
                    p.m-0 Mediante la clasificación biológica se pueden agrupar y categorizar los organismos y sus taxones, permitiendo establecer un orden entre los diversos organismos (móneras, protistas, hongos, plantas y animales).

              .tarjeta.bg_5.p-4(x="72.5%" y="30.7%" numero="2")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Categorización del reino vegetal
                    p.m-0 Dentro del reino vegetal se encuentran organismos como: <b>musgos (briofitos), helechos (pteridófitos o criptógamas), plantas con flor (espermatófitos / fanerógamas).</b>

              .tarjeta.bg_6.p-4(x="10%" y="29.8%" numero="3")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Caracterización bioclimática
                    p.m-0 La distribución de las plantas en los ecosistemas dependen de la temperatura (termoclimas) y las precipitaciones (ombroclimas).

              .tarjeta.bg_7.p-4(x="63.7%" y="71.5%" numero="4")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Corología
                    p.m-0 Ciencia encargada del estudio de las áreas de distribución de los seres vivos, siendo el conjunto de localidades donde crece un ser vivo (reino, región, superprovincia, provincia, subprovincia, sector, subsector).
              
              .tarjeta.bg_8.p-4(x="52.7%" y="23.3%" numero="5")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Tipos biológicos
                    p.m-0  En el proceso de adaptación y convergencia a diversos ambientes y climas las plantas desarrollan caracteres externos a nivel estructural y morfológico (biotipos), entre los que se encuentran fanerófitos, caméfitos, hemicriptófitos, criptófitos.

              .tarjeta.bg_9.p-4(x="27.3%" y="23.3%" numero="6")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Regiones Florísticas                        

              .tarjeta.bg_10.p-4(x="25.4%" y="51%" numero="7")
                .row                    
                  .col-lg-12
                    p.m-0.text-bold Reinos Florísticos                        




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
