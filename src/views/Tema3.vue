<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Morfología vegetal

    .bg_16.p-4.p-lg-p-5
      .row.justify-content-eleven.align-items-center
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img01.svg', alt='') 
        .col-lg-7.col-xl-8.col-xxl-7(data-aos="fade-right")
          p.m-0 Rama de la Botánica que se encarga de estudiar la organización interna y la forma externa de la planta. Dentro de la morfología interna se encuentra la anatomía, la citología e histología y dentro de la morfología externa se trata la forma.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.1 Citología

    .row.justify-content-center.align-items-end.mb-5.mt_1
      .col-lg-7.mb-3(data-aos="fade-right")
        p Encargada de estudiar la célula vegetal (forma, tamaño, estructura y función), por lo cual resulta importante mencionar que los organismos, las plantas y los animales están conformados por células (unidad básica de los organismos vivos).   
        .bg_17.p-4
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              img.img-t.mx-auto(src='@/assets/curso/tema3/img03.svg', alt='')
            .col-lg-9.col-md-8.col-xl-8.col-xxl-9
              p.m-0 La célula vegetal está compuesta por los siguientes componentes celulares, los cuales cumplen fun ciones específicas dentro de la misma:
      .col-lg-5(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img03.png', alt='')

    
    .row.justify-content-center.mb-5(data-aos="fade-down-right")
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
              td(colspan="3") Plastidios
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
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img06.svg', alt='')

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.2 Histología 

    p.mb-5 Los vegetales multicelulares tienen tejidos y órganos, pero estos difieren según el nivel de organización, cada órgano de la planta (tallos, hojas, raíces, flores) está formado por diferentes tejidos que provienen de la proliferación y diferenciación celular, entre los cuales se encuentran:
    
    .bg_22.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-right")
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
        h2 3.3 Anatomía y morfología de las plantas

    p.mb-5 El cuerpo de una planta está estructurado por dos sistemas: el caulinar y el radical. Ver figura.

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 9. 
          span <em>Estructura del cuerpo de las plantas Dicotiledónea y Monocotiledónea</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img14.png', alt='')
        figcaption.ms-2 Nota. Tomado de Anatomía y morfología vegetal (2019).

    .bg_23.p-5.mb-4
      p.mb-4 <b>El sistema radical</b> comprende la raíz y sus ramificaciones. Ver figura.
      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 10. 
            span <em>La raíz</em>    
          figure.mb-4(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema3/img15.svg', alt='')
          figcaption.mx-lg-5 Nota. Tomado de Anatomía y morfología vegetal (2019).

    p.mb-5 Las raíces se clasifican según su origen en: raíz principal, raíz secundaría y raíz adventista. Ver figura.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 11. 
          span <em>Raíces según el origen: principales, secundarias y raíces adventicias</em>    
        .row.justify-content-center.mb-5
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img16.png', alt='')
            .bg_color3.p-3
              p.m-0.text-center.text-bold Raiz principal 
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img17.png', alt='')
            .bg_color3.p-3
              p.m-0.text-center.text-bold Raiz secundaria 
          .col-lg-4(data-aos="fade-left")
            figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img18.png', alt='')
            .bg_color3.p-3
              p.m-0.text-center.text-bold Raiz adventicia 

    p.mb-5 Morfológicamente se encuentran: raíces pivotantes, fibrosas, modificadas, neumatóforos, zancos, adherentes, columnares, tabulares, chupadores. Ver figuras.

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 12. 
          span <em>Tipos de raíces según la morfología: A. pivotante (dicotiledónea) y B. fibrosa (monocotiledónea)</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img19.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption Nota. Tomado de Anatomía y morfología vegetal (2019).

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 13. 
          span <em>Raíces carnosas</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img20.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption Nota. Tomado de Anatomía y morfología vegetal (2019).

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 14. 
          span <em>Raíces modificadas</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img21.png', alt='')
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img22.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption.mx-2 Nota. Tomado de Anatomía y morfología vegetal (2019).

    .bg_16.p-4.p-lg-5.mb-4.mb-lg-0
      .row.justify-content-eleven.align-items-center
        .col-lg-4.mb-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img23.png', alt='') 
        .col-lg-7.col-xl-8.col-xxl-7.mt-4(data-aos="fade-right")
          p.m-0 Las raíces sirven como sostén de la planta, permiten la absorción de nutrientes, la conducción de sustancias, ayudan a la reproducción vegetativa y además contribuyen al almacenamiento de sustancias de reserva. También pueden ser utilizadas como alimento, en la industria y en la medicina. Vea a continuación cómo está compuesto <b>el sistema caulinar</b> y cómo se clasifican los diferentes tallos:

    p.mb-5 <b>El sistema caulinar</b>, este comprende el tallo, las ramas y las hojas de la planta. 

    .bg_23.p-4.mb-5
      .row
        .col-lg-9
          ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/img24.png', alt='Texto que describa la imagen')

              .tarjeta.bg_24.p-4(x="66.7%" y="3.5%" numero="1")
                .row.align-items-center                    
                  .col-lg-5.col-md-5.col-5
                    img.img-t.m-auto(src='@/assets/curso/tema3/img25.png', alt='')
                  .col-lg-6.col-md-6.col-6
                    p.m-0 <b>Nudos</b>, donde se desarrollan las hojas.

              .tarjeta.bg_25.p-4(x="64.5%" y="25.5%" numero="2")
                .row.align-items-center                    
                  .col-lg-5.col-md-5.col-5
                    img.img-t.m-auto(src='@/assets/curso/tema3/img26.png', alt='')
                  .col-lg-6.col-md-6.col-6
                    p.m-0 <b>Entrenudos</b>, es la sección entre dos nudos.

              .tarjeta.bg_26.p-4(x="69%" y="32.8%" numero="3")
                .row.align-items-center                    
                  .col-lg-5.col-md-5.col-5
                    img.img-t.m-auto(src='@/assets/curso/tema3/img27.png', alt='')
                  .col-lg-6.col-md-6.col-6
                    p.m-0 <b>Estípulas</b>, son hojas modificadas que generalmente se disponen en pares y protegen la yema axilar, solo se presentan en algunas plantas como el café y el fríjol.

              .tarjeta.bg_27.p-4(x="60.4%" y="39.3%" numero="4")
                .row.align-items-center                    
                  .col-lg-5.col-md-5.col-5
                    img.img-t.m-auto(src='@/assets/curso/tema3/img28.png', alt='')
                  .col-lg-6.col-md-6.col-6
                    p.m-0 <b>Cicatriz</b>, es una huella que queda en el tallo cuando cae una hoja, una yema o se produce una lesión.
              
              .tarjeta.bg_28.p-4(x="73.7%" y="40.6%" numero="5")
                .row.align-items-center                    
                  .col-lg-5.col-md-5.col-5
                    img.img-t.m-auto(src='@/assets/curso/tema3/img29.png', alt='')
                  .col-lg-6.col-md-6.col-6
                    p.m-0 <b>Yemas</b>, están constituidas por tejido meristemático. Se encuentran en las partes terminales del tallo, axilas de las hojas y a veces, en otros sitios del tallo. 

              .tarjeta.bg_29.p-4(x="67%" y="51%" numero="6")
                .row.align-items-center                    
                  .col-lg-5.col-md-5.col-5
                    img.img-t.m-auto(src='@/assets/curso/tema3/img30.png', alt='')
                  .col-lg-6.col-md-6.col-6
                    p.m-0 <b>Lenticelas</b>, en algunos tallos, dependiendo su estado de desarrollo, aparecen en la corteza unos poros, ligeramente conspicuos, denominados lenticelas, a través de los cuales se intercambian gases entre el tallo y el medio.
         
    .row.mb-5
      .col-auto
        img(src='@/assets/curso/tema3/img31.png', alt='')
      .col-lg-2.col-md-6.col-6
        h3.mt-2(data-aos="fade-right") Clases de tallos

    p.mb-5 Según el hábitat, los tallos pueden ser aéreos, subterráneos y acuáticos.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img32.png', alt='')
        .bg_color4.p-3
          p.m-0.text-center.text-bold Tallos subterraneos
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img33.png', alt='')
        .bg_color4.p-3
          p.m-0.text-center.text-bold Tallos acuáticos
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img34.png', alt='')
        .bg_color4.p-3
          p.m-0.text-center.text-bold Tallos terrestres

    .row.mb-5
      .col-auto
        img(src='@/assets/curso/tema3/img31.png', alt='')
      .col-lg-2.col-md-6.col-6
        h3.mt-2(data-aos="fade-right") Tipos de tallos

    .row.justify-content-center.mt-5.mb-5(data-aos='zoom-in')
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        .tarjeta-up(:style="{'background-image': `url(${require('@/assets/curso/tema3/img35.png')})`}")
          .tarjeta-up__content.color-primario.p-2
            h3.m-0.mt-1.text-center Según consistencia
            p.text-center Son leñosos (árbol, arborescentes, arbustos), herbáceos, caña, carnosos.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        .tarjeta-up(:style="{'background-image': `url(${require('@/assets/curso/tema3/img36.png')})`}")
          .tarjeta-up__content.color-primario.p-2
            h3.m-0.mt-1.text-center Según su forma
            p.text-center Cilíndricos, cuadrangulares, triangulares, ovalados, y aplanados.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        .tarjeta-up(:style="{'background-image': `url(${require('@/assets/curso/tema3/img37.png')})`}")
          .tarjeta-up__content.color-primario.p-2
            h3.m-0.mt-1.text-center Según modificaciones
            p.text-center Estolón, rizoma, tubérculo, bulbo, crono, bulbillo, cladodio, espinas.

    .bg_color5.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-2(data-aos="fade-right")
            figure
              img.img-t.m-auto(src='@/assets/curso/tema3/img38.svg', alt='')  
        .col-lg-10(data-aos="fade-left")
          p.mb-0 La identificación de las hojas permite verificar la forma, el peciolo, la complejidad, las nervaduras, el ápice, la base, el borde y las posibles modificaciones, siendo así que se clasifican en:

    .row.justify-content-center.mb-5
      .col-lg-10 
        .tabla-a.color-acento-contenido          
          table(data-aos="fade-down-right")
            thead
              tr
                td.h4.bg_color2.text-center(colspan="10") CLASIFICACIÓN DE LAS HOJAS
            tbody
              tr
                td.border_table(colspan="2") Según la forma
                td.border_table(colspan="8") Acicular (pino), lineal (gramíneas: trigo), lanceolada (sauce), oblanceolada (Rumex paraguayensis), espatulada, oblonga, elíptica, oval u ovalada, ovada ovada, obovada, orbicular, peltada (Tropaeolum majus), obcordada, romboidal, reniforme, sagitada, deltoide, o'deltoide, astada, cuneiforme, perfoliada,pandurada, decurrente, falcada, ensiforme.
                
              tr
                td.border_table(colspan="2") Según el pecíolo
                td.border_table(colspan="8") Las hojas pueden ser: pecioladas, subpecioladas, sésiles o sentadas, envainadas y aladas. 
                
              tr
                td.border_table(colspan="2") Según la complejidad
                td.border_table(colspan="8") Las hojas pueden ser simples y compuestas, y poseen más de un limbo.
                
              tr
                td.border_table(colspan="2") Según las nervaduras
                td.border_table(colspan="8") Las hojas pueden ser: retinervadas (pinnatinervias, palmatinervias y curvinervadas) si tienen una nervadura central y a partir de estas se ramifican en nervaduras secundarias, luego en terciariasy paralelinervada.
                
              tr
                td.border_table(colspan="2") Según el ápice
                td.border_table(colspan="8") Por el ápice reciben diferentes nombres, así: redondeado, obtuso, agudo, atenuado, truncado, emarginado, retuso, cuspidado, mucronato, acuminado, espinoso, aristado, caudado. 
                
              tr
                td.border_table(colspan="2") Según la base 
                td.border_table(colspan="8") Toman el nombre de conformidad a la forma de la base, como: redondeada, asimétrica, obtusa, aguda, cordada,cuneada, atenuada, truncada, sagitada, auriculada, abrasadora y astada. 
                
              tr
                td.border_table(colspan="2") Según el borde
                td.border_table(colspan="8") Existe una variedad de bordes que permiten diferenciar las clases o tipos de hojas. El borde puede ser: entero y lobado (partidas, sectadas, dentadas, aserradas, crenado, ondulado sinuado, crespo, revoluto).

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 17. 
          span <em>Tipos de hoja según la forma</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img39.png', alt='')
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img40.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption.mx-2 Nota. Tomado de Anatomía y morfología vegetal (2019).
            
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 18. 
          span <em>Tipos de hoja según el peciolo</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img46.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption.mx-2 Nota. Tomado de Anatomía y morfología vegetal (2019).

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 19. 
          span <em>Tipos de hoja según la complejidad</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img41.png', alt='')
        .row.justify-content-center.mt-4
          .col-lg-12
            figcaption.mx-2 Nota. Tomado de Anatomía y morfología vegetal (2019).

    .bg_16.p-5.mb-4.mb-lg-0
      .row.justify-content-eleven.align-items-center
        .col-lg-4.mb-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img42.png', alt='') 
        .col-lg-7.col-xl-8.col-xxl-7.mt-4(data-aos="fade-right")
          p.m-0 Las hojas realizan funciones importantes en la planta, dentro de las cuales se encuentran: la transpiración, la gutación, la fotosíntesis, la respiración, el almacenamiento de sustancias, la reproducción vegetativa y la nutrición de la planta. Además, se utilizan en la industria alimenticia, la medicina y como decoración u ornamentación.

    .row.mb-4.mb-lg-0
      .col-auto
        img(src='@/assets/curso/tema3/img31.png', alt='')
      .col-lg-2.col-md-6.col-6
        h3.mt-2(data-aos="fade-right") La flor

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Conformada por un conjunto de antófilos que se desarrollan de una yema axilar floral. La cual está compuesta por el pedúnculo, el cáliz, la corola (conjunto de pétalos, androceo -estambres- y gineceo -pistilo-). 
        p Una flor completa es bisexual o hermafrodita, si le falta algún ciclo sexual es unisexual o incompleta, si en la misma planta existen flores estaminadas y pistiladas por separado se denominan monoicas (maíz), pero si las flores femeninas y masculinas están en diferentes plantas de la misma especie se llaman dioicas (sauce y mariguana), también existen casos donde las flores son unisexuales y bisexuales en la misma planta o en diferente (papayo) y son las polígamas. Ver figura.
      .col-lg-5(data-aos="fade-left")
        figure.mb-5
          img.img-t.m-auto(src='@/assets/curso/tema3/img43.png', alt='') 

    .bg_23.p-5.mb-4
      .row.justify-content-center.mb-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 20. 
            span <em>Estructura de una flor típica</em>    
          figure(data-aos="fade-down-right")
            img.img-t.m-auto(src='@/assets/curso/tema3/img44.png', alt='')

    .row.mb-4
      .col-auto
        img(src='@/assets/curso/tema3/img31.png', alt='')
      .col-lg-6.col-md-8.col-8
        h3.mt-2(data-aos="fade-right") Inflorescencias

    p.mb-5 Las flores se agrupan según la inflorescencia, cuando hay una sola flor y está separada por hojas se considera simple y cuando hay dos o más flores se considera compuesta. A su vez, las compuestas se dividen en racimosas o indefinidas y cimosas o definidas. Las inflorescencias racimosas pueden ser racimosos, picoides y amiloides, y, las inflorescencias racimoides son racimo, panoja o panícula y corimbo. Ver figura.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 21. 
          span <em>Inflorescencia racimoides</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img45.png', alt='')
        .row.justify-content-center
          .col-lg-12
            figcaption.mx-3 Nota. Tomado de Anatomía y morfología vegetal (2019).

    p.mb-5 Las inflorescencias picoides pueden ser: espiga, espiga compuesta, amento, espádice y estróbilo. Las inflorescencias umbeladas pueden ser: capítulo (si no tiene involucro se llama cabezuela), umbela simple y umbela compuesta.
    
    .row.mb-4.mb-lg-0
      .col-auto
        img(src='@/assets/curso/tema3/img31.png', alt='')
      .col-lg-2.col-md-6.col-6
        h3.mt-2(data-aos="fade-right") El fruto

    .bg_30.p-5
      .row.justify-content-around.align-items-center
        .col-lg-7.col-xl-8.col-xxl-7.mt-4.mb-4.mb-lg-0(data-aos="fade-right")
          p.ms-3 Es el ovario desarrollado, maduro y contiene las semillas. Compuesto por epicarpio, mesocarpio, endocarpio; se clasifica en simples (un solo ovario), los cuales son carnosos o secos y los compuestos (varios ovarios).
          p.m-0.ms-3 Los frutos simples secos se subdividen en dehiscentes (el fruto se abre solo, dejando libre las semillas pixidio y cápsulas), por ejemplo, legumbre, folículo, silicua, pixidio y cápsula e indehiscentes (cuando el pericarpio se descompone las semillas quedan libres), por ejemplo,aquenio, nuez, cariópside, cipsela, lomento y samará. Ver figura.
        .col-lg-5.col-xl-4.col-xxl-5.mb-4(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img47.svg', alt='') 

    .row.justify-content-center.mb-5.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 22. 
          span <em>Frutos simples carnosos: bayas</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img47.png', alt='')
        .row.justify-content-center
          .col-lg-12
            figcaption.mx-3 Nota. Tomado de Anatomía y morfología vegetal (2019).
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 23. 
          span <em>Frutos simples carnosos: hesperidios, pepónides, pomo</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img48.png', alt='')
        .row.justify-content-center
          .col-lg-12
            figcaption.mx-3 Nota. Tomado de Anatomía y morfología vegetal (2019). 
    
    p Los frutos compuestos se dividen en agregados (provienen de una sola flor con varios pistilos), por ejemplo, la fresa y múltiples (provienen de varios ovarios separados, cada uno perteneciente a una flor, por ejemplo, la piña).

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.4 La semilla 
    
    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img49.png', alt='')
      .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-left")
        div
          p Es un óvulo fecundado y maduro que reproduce sexualmente a la planta, en ella se encuentra un embrión a partir del cual se desarrolla una planta nueva. Cuenta con embrión, tejidos de almacenamiento y cubiertas o testas.
          p Existen varios tamaños, desde microscópicos (semilla de orquídeas) hasta de gran tamaño como el coco.
          p La semilla tiene diferentes estructuras según sus características desde dicotiledóneas hasta monocotiledóneas. 
          p Las semillas dicotiledóneas tienen envoltura externa que protege a la semilla (tegumento), la cual cuenta con dos capas conocidas como testa y tegmen, además cuenta con hilo, micrópilo, embrión, endospermo. Ver figura.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 24. 
          span <em>Estructura externa e interna de una semilla de frijol</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img50.png', alt='')
        .row.justify-content-center
          .col-lg-12
            figcaption.mx-3.mt-4 Nota. Tomado de Anatomía y morfología vegetal (2019).
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 25. 
          span <em>Semillas dicotiledóneas</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img51.png', alt='')
        .row.justify-content-center
          .col-lg-11
            figcaption.me-1 Nota. Tomado de Anatomía y morfología vegetal (2019).
    
    span.text-bold Semillas monocotiledóneas, 
    span las cuales tienen un solo cotiledón, cuentan con endospermo, coleoptilo, coleorriza, cotiledón. Ver figura.

    .row.justify-content-center.mb-5.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 26. 
          span <em>Estructura externa e interna del fruto-semilla del maíz</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img52.png', alt='')
        .row.justify-content-center
          .col-lg-12
            figcaption.mx-3 Nota. Tomado de Anatomía y morfología vegetal (2019).
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 27. 
          span <em>Semillas monocotiledóneas</em>    
        figure(data-aos="fade-down-right")
          img.img-t.m-auto(src='@/assets/curso/tema3/img53.png', alt='')
        .row.justify-content-center
          .col-lg-12
            figcaption.mx-4 Nota. Tomado de Anatomía y morfología vegetal (2019).

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
