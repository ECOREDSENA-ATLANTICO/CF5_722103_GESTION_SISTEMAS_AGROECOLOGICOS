export default {
  global: {
    componenteFormativo: 'Botánica',
    descripcionCurso:
      'En este componente formativo se abordan temas que le permitirán identificar y diferenciar especies vegetales, conocer el proceso de propagación vegetal según principios agroecológicos y comprender la importancia de su interacción con otros seres vivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Botánica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos básicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemática vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Subreino Thallobionta (talofitas)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subreino Embryobionta',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Morfología vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Citología',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Histología',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Anatomía y morfología de las plantas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'La semilla',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fisiología vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fotosíntesis y respiración vegetal',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Hormonas vegetales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Nutrición y manejo nutricional vegetal',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Propagación vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Sexual',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Asexual',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Material vegetal de propagación',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Instalaciones, diseños, equipos y bioseguridad',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fisiología vegetal',
      referencia:
        'Universidad Nacional de la Amazonia. (2016). <em>Texto básico para profesionales en ingeniería forestal en el área de fisiología vegetal.</em> UNAP.',
      tipo: 'Libro',
      link:
        'https://www.unapiquitos.edu.pe/pregrado/facultades/forestales/descargas/publicaciones/FISIO-TEX.pdf',
    },
    {
      tema: 'Nutrición y manejo nutricional',
      referencia:
        'Instituto internacional de la potasa, Basilea, Suiza. (2000). <em>Principios de nutrición vegetal.</em> Aulavirtual.agro.',
      tipo: 'Libro',
      link:
        'https://aulavirtual.agro.unlp.edu.ar/pluginfile.php/66737/mod_resource/content/2/PRINCIPIOS%20DE%20NUTRICI%C3%93N%20VEGETAL.pdf',
    },
    {
      tema: 'Propagación vegetal',
      referencia:
        'Universidad Nacional Autónoma de México (2016). <em>Manual de propagación de plantas superiores.</em> Casa de Libros Abiertos.',
      tipo: 'Libro',
      link:
        'https://www.casadelibrosabiertos.uam.mx/contenido/contenido/Libroelectronico/manual_plantas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Botánica',
      significado:
        'Parte de la biología que se encarga de estudiar de manera general las plantas.',
    },
    {
      termino: 'Fisiología vegetal',
      significado: 'Estudia la anatomía de las plantas.',
    },
    {
      termino: 'Fotosíntesis',
      significado:
        'Proceso mediante el cual los organismos autótrofos fabrican su propio alimento.',
    },
    {
      termino: 'Morfología vegetal',
      significado: 'Estudio de la estructura y forma de las plantas.',
    },
    {
      termino: 'Propagación vegetal',
      significado: 'Multiplicación de las plantas.',
    },
    {
      termino: 'Semilla',
      significado: 'Conforma el fruto y da origen a la planta.',
    },
    {
      termino: 'Sistemática vegetal',
      significado:
        'Ciencia encargada de identificar, nombrar y clasificar las plantas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alegría, W. (2016). <em>Texto básico para profesionales en ingeniería forestal en el área de fisiología vegetal.</em> Universidad Nacional de la Amazonia.',
      link:
        'https://www.unapiquitos.edu.pe/pregrado/facultades/forestales/descargas/publicaciones/FISIO-TEX.pdf',
    },
    {
      referencia:
        'Chuncho, G., Chuncho, C. y Aguirre, Z. (2019). <em>Anatomía y morfología vegetal. Estudios de biodiversidad.</em> Universidad Nacional de Loja.',
      link:
        'https://unl.edu.ec/sites/default/files/archivo/2019-12/ANATOMI%CC%81A%20Y%20MORFOLOGI%CC%81A%20VEGETAL.pdf',
    },
    {
      referencia:
        'Osuna, H., Osuna, A. y Fierro, A. (2016). <em>Manual de propagación de plantas superiores.</em> Universidad Nacional Autónoma de México y Universidad Autónoma Metropolitana.',
      link:
        'https://www.casadelibrosabiertos.uam.mx/contenido/contenido/Libroelectronico/manual_plantas.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ingrid Natalia Lozano Muñoz',
          cargo: 'Experto Temático',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios -  Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología -Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Yuli Marcela Rey',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseño web',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gustavo Adolfo Marún Suárez',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Yuli Marcela Gómez Tarazona',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yenny Patricia Ulloa Villamizar',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },

        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],

  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
