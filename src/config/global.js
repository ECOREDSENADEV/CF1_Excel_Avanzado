export default {
  global: {
    Name: 'Datos con tablas dinámicas y gráficos avanzados',
    Description:
      'Este componente formativo aborda la creación, organización y visualización de tablas de datos, resaltando su importancia en la gestión de información para la toma de decisiones. Se destacan las tablas como base estructural del almacenamiento, junto con técnicas y herramientas que permiten transformar datos en bruto en información útil. Además, se presentan metodologías y prácticas avanzadas que optimizan el trabajo con datos en distintos contextos profesionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tablas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Creación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Configuración',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de datos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Funcionalidades de agrupación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cálculos personalizados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Filtros',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Segmentación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manipulación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concatenar',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Texto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Filtrar',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ordenación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Eliminación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gráficos avanzados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Personalización',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Interactividad',
            hash: 't_4_3',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Gestión de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Recursos y herramientas para el análisis efectivo de datos: introducción [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BP8OeszBSCc ',
    },
    {
      tema: 'Gestión de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Proceso de normalización de datos. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hKwuc-JJisI&t=63s ',
    },
    {
      tema: 'Manipulación de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Manipular los datos. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nIHKG1B9hQY ',
    },
  ],
  glosario: [
    {
      termino: 'Campos calculado',
      significado:
        'fórmula personalizada creada dentro de una tabla dinámica para generar nuevas métricas a partir de los campos existentes, sin alterar los datos de origen.',
    },
    {
      termino: '<em>Dashboard</em> (Panel de Control)',
      significado:
        'interfaz visual e interactiva que centraliza gráficos e indicadores clave (KPI) para monitorear información de un solo vistazo y facilitar la toma de decisiones.',
    },
    {
      termino: 'Formato condicional',
      significado:
        'herramienta que aplica formatos automáticos (colores, íconos) a las celdas que cumplen una regla, permitiendo resaltar visualmente datos, tendencias o valores atípicos.',
    },
    {
      termino: '<em>Power Query</em>',
      significado:
        'motor de preparación de datos para conectar, limpiar y transformar información de múltiples fuentes antes de su análisis, automatizando el proceso de importación.',
    },
    {
      termino: 'Segmentación de Datos (<em>Slicers</em>)',
      significado:
        'componente de filtrado visual que utiliza botones interactivos para filtrar tablas y gráficos, facilitando la exploración de datos en informes y <em>dashboards</em>.',
    },
    {
      termino: 'Tabla dinámica',
      significado:
        'herramienta interactiva para resumir, agrupar y analizar grandes volúmenes de datos, permitiendo reorganizarlos fácilmente para identificar patrones y crear reportes flexibles.',
    },
    {
      termino: 'Validación de datos',
      significado:
        'herramienta que restringe el tipo de datos o los valores que los usuarios pueden introducir en una celda se garantiza así la exactitud y coherencia de la información, previniendo errores mediante la creación de reglas como listas desplegables, rangos numéricos o longitudes de texto específicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander, M., Kusleika, R., y Walkenbach, J. (2018). Excel 2019 bible. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Alexander, M., y Kusleika, D. (2019). Excel 2019 power programming with VBA. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Bernal-García, J., Dolores, S., y  Bernal-Soto, P. (2011). Representación automática de funciones en Excel y su aplicación docente. Revista Electrónica de Comunicaciones y Trabajos de ASEPUMA, 12(1), 141-157.',
      link: '',
    },
    {
      referencia:
        'González, F., y Llamas, M. (2017). Análisis y representación gráfica de funciones matemáticas con Excel. Anales de ASEPUMA, (25), 1.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2016). Microsoft Excel data analysis and business modeling. Microsoft press.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2021). Microsoft Excel data analysis and business modeling (Office 2021 and Microsoft 365). Microsoft Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
