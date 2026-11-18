interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

interface ProjectLink {
  github?: string;
  live?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: ProjectLink;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readingTime: number;
  image?: string;
  tags: string[];
}

export const siteConfig = {
  // Información personal
  personalInfo: {
    name: 'Kikalequa',
    title: 'Desarrolladora Full Stack',
    location: 'Valencia, España',
    email: 'qepdevsafor@gmail.com',
    shortBio: 'Soy un apasionada desarrolladora Full Stack con experiencia en la creación de aplicaciones web modernas y escalables.',
    about: 'Soy una apasionada desarrolladora Full Stack con experiencia en la creación de aplicaciones web modernas y escalables. Me encanta aprender nuevas tecnologías y compartir mis conocimientos con la comunidad.',
    avatar: '/sites/mujerafricana.png',
    role: 'Desarrolladora Full Stack',
  },

  // Enlaces a redes sociales
  socialLinks: {
    github: 'https://github.com/qepwebsafor',
    twitter: 'https://twitter.com/coloresen',
    linkedin: 'https://linkedin.com/in/quica-espi-puig-8b78b154/',
    instagram: 'https://instagram.com/esomaparking',
  
  },
  
  // Habilidades técnicas
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Redux', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Styled Components', level: 85 },
      ] as SkillItem[]
    } as SkillCategory,
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'NestJS', level: 75 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'GraphQL', level: 75 },
      ] as SkillItem[]
    } as SkillCategory,
    {
      category: 'Base de Datos',
      items: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Firebase', level: 75 },
      ] as SkillItem[]
    } as SkillCategory,
    {
      category: 'DevOps',
      items: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 70 },
        { name: 'Git & GitHub', level: 90 },
      ] as SkillItem[]
    } as SkillCategory
  
  ],

  // Experiencia laboral
  experience: [
    {
      id: 1,
      role: 'Desarrollador Full Stack',
      company: 'Nombre de la Empresa',
      period: 'Enero 2022 - Presente',
      description: [
        'Desarrollo y mantenimiento de aplicaciones web utilizando React, Next.js, Node.js y bases de datos SQL/NoSQL.',
        'Implementación de interfaces de usuario responsivas y accesibles siguiendo las mejores prácticas de desarrollo web.',
        'Colaboración con equipos multidisciplinarios en metodologías ágiles.',
        'Optimización del rendimiento de aplicaciones existentes.'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      id: 2,
      role: 'Desarrollador Frontend',
      company: 'Otra Empresa',
      period: 'Marzo 2020 - Diciembre 2021',
      description: [
        'Desarrollo de interfaces de usuario con React y TypeScript.',
        'Implementación de diseños responsivos y accesibles.',
        'Trabajo en equipo siguiendo metodologías ágiles (Scrum).',
        'Mantenimiento y mejora de código existente.'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'SASS', 'Jest']
    },
    {
      id: 3,
      role: 'Practicante de Desarrollo',
      company: 'Startup Tecnológica',
      period: 'Enero 2019 - Febrero 2020',
      description: [
        'Apoyo en el desarrollo de aplicaciones web y móviles.',
        'Participación en el ciclo completo de desarrollo de software.',
        'Aprendizaje y aplicación de buenas prácticas de programación.'
      ],
      technologies: ['JavaScript', 'React Native', 'Firebase', 'Git']
    }
  ],

  // Educación
  education: [
    {
      id: 1,
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad politecnica de Valencia',
      period: '1982 - 1989',
      description: 'Especialización en desarrollo de software y arquitectura de sistemas.'
    },
    {
      id: 2,
      degree: 'Bootcamp de Desarrollo Web Full Stack',
      institution: 'Institución de Educación',
      period: '2019',
      description: 'Programa intensivo enfocado en tecnologías modernas de desarrollo web.'
    },
    {
      id: 3,
      degree: 'Curso Avanzado de JavaScript',
      institution: 'Plataforma en Línea',
      period: '2018',
      description: 'Conceptos avanzados de JavaScript, patrones de diseño y programación funcional.'
    }
  ],

  // Proyectos destacados
  featuredProjects: [
    {
      id: 1,
      title: 'Plataforma de recetas en línea',
      description: 'Una plataforma completa de recetas de cocina de todo el mundo, con autenticación de usuarios, búsqueda avanzada y sistema de valoraciones.',
      technologies: ['Next.js', 'Node.js', 'MongoDB',  'Tailwind CSS'],
      image: '/sites/kikalequa-com-es.png',
      links: {
        live: 'https://kikalequa.com.es',
        github: 'https://github.com/QepwebSafor/qep-meals-app'
      } as ProjectLink
    } as Project,
    {
      id: 2,
      title: 'Plataforma e-comerce de venta de fotos y arte digital ',
      description: 'Aplicación para gestión de tareas con autenticación, arrastrar y soltar, y sincronización en tiempo real. Con pasarela de pago integrada',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      image: '/sites/kikalequa-eu.png',
      links: {
        live: 'https://kikalequa.eu',
        github: 'https://github.com/QepwebSafor/graff-store'
      } as ProjectLink
    } as Project,
    {
      id: 3,
      title: 'Sistema de reservas de plazas de parking',
      description: 'Plataforma de información y reservas de un parking con atenticación de usuarios y una galeria del cosmo con datos de la nasa',
      technologies: ['Next.js',  'MongoDB', 'Tailwind CSS'],
      image: '/sites/parkingesoma.com.png',
      links: {
        live: 'https://parkingesoma.com',
        github: 'https://github.com/QepwebSafor/Galaxias-Nasa-App'
      } as ProjectLink
    } as Project,
     {
      id: 4,
      title: 'Marketplace de Productos',
      description: 'Plataforma de comercio electrónico con carrito de compras, búsqueda y filtros avanzados.',
      technologies: ['React', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      image: '/sites/qepbits-com-es.png',
      links: {
        live: 'https://qepbits.com.es',
        github: 'https://drawings-store.vercel.app'
      } as ProjectLink
    } as Project,
     {
      id: 5,
      title: 'Plataforma de dibujos y arte digital ',
      description: 'Plataforma para hacer dibujos on-line y compartirlos con la comunidad. Y un chat y gestión de tareas para usuarios',
      technologies: ['React',  'MongoDB', 'Tailwind CSS'],
      image: '/sites/qepbits-es.png',
      links: {
        live: 'https://qepbits.es',
        github: 'https://github.com/tuusuario/marketplace'
      } as ProjectLink
    } as Project,
     {
      id: 6,
      title: 'Mi portfoliomio profesional',
      description: 'Un portfolio profesional para mostrar mis proyectos, habilidades y experiencia laboral. ',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      image: '/sites/qepdev-com-es.png',
      links: {
        live: 'https://qepdev.com.es',
        github: 'https://github.com/tuusuario/marketplace'
      } as ProjectLink
    } as Project,
    {
      id: 7,
      title: 'Plataforma de muestra de razas de perros',
      description: 'Plataforma de muestra de razas de perros  con información detallada y galería de imágenes.',
      technologies: ['Next.js',  'MongoDB', 'Tailwind CSS'],
      image: '/sites/qepdev-es.png',
      links: {
        live: 'https://qepdev.es',
        github: 'hhttps://github.com/QepwebSafor/qep-dogs-app'
      } as ProjectLink
    } as Project,
    {
      id: 8,
      title: 'Galeria de películas en cartelera',
      description: 'Plataforma de muestra de peliculas en cartelera,  con información detallada y galería de imágenes.',
      technologies: ['Next.js',  'MongoDB', 'Tailwind CSS'],
      image: '/sites/qepweb-eu.png',
      links: {
        live: 'https://qepdev.eu',
        github: 'https://github.com/QepwebSafor/qep-movies-app'
      } as ProjectLink
    } as Project,
    {
      id: 9,
      title: 'Galeria de graffitys urbanos y Criptos',
      description: 'Plataforma de muestra de graffitys con el autor y su localñización. Tabla cotización criptos en tiempo real.',
      technologies: ['Next.js',  'MongoDB', 'Tailwind CSS'],
      image: '/sites/qepdev-eu.png',
      links: {
        live: 'https://qep-murals-app.vercel.app/',
        github: 'https://github.com/QepwebSafor/qep-murals-app'
      } as ProjectLink
    } as Project
  ],


  // Configuración del sitio
  site: {
    name: 'Tu Portafolio',
    title: 'Quica Espi| Desarrollador Full Stack',
    description: 'Portafolio personal de Quica, desarrollador Full Stack especializado en React, Node.js y tecnologías modernas.',
    url: 'https://qepdev.com.es',
    locale: 'es',
    theme: 'dark', // o 'dark' o 'system'
    googleAnalyticsId: 'G-XXXXXXXXXX' // Tu ID de Google Analytics (opcional)
  },
  
  // Configuración de contacto
  contact: {
    email: 'qepdevsafor@gmail.com',
    ctaText: 'Estoy disponible para trabajos de desarrollo web. Contáctame y hablemos sobre cómo puedo ayudarte a hacer realidad tu idea.'
  },
  
  // Configuración del blog
  blog: {
    title: 'Blog',
    description: 'Artículos sobre desarrollo web, tecnologías modernas y mejores prácticas.',
    postsPerPage: 6,
    categories: [
      'Todos',
      'Desarrollo Web',
      'React',
      'JavaScript',
      'TypeScript',
      'CSS',
      'Node.js',
      'Bases de Datos',
      'DevOps',
      'Buenas Prácticas'
    ] as const,
    posts: [
      {
        id: 1,
        title: 'Introducción a Next.js 15',
        slug: 'introduccion-nextjs-15',
        excerpt: 'Aprende las nuevas características de Next.js 13 y cómo aprovecharlas en tus proyectos.',
        content: 'Contenido completo del artículo...',
        category: 'Next.js',
        date: '2023-05-15T00:00:00.000Z',
        readingTime: 8,
        image: '/images/blog/nextjs-15.jpg',
        tags: ['Next.js', 'React', 'Frontend']
      },
      {
        id: 2,
        title: 'Patrones de Diseño en JavaScript',
        slug: 'patrones-diseno-javascript',
        excerpt: 'Exploramos los patrones de diseño más útiles en JavaScript moderno.',
        content: 'Contenido completo del artículo...',
        category: 'JavaScript',
        date: '2023-04-20T00:00:00.000Z',
        readingTime: 10,
        image: '/images/blog/javascript-patterns.jpg',
        tags: ['JavaScript', 'Patrones', 'Programación']
      },
      {
        id: 3,
        title: 'Guía de Autenticación con NextAuth.js',
        slug: 'autenticacion-nextauth-js',
        excerpt: 'Aprende a implementar autenticación segura en tus aplicaciones Next.js con NextAuth.js.',
        content: 'Contenido completo del artículo...',
        category: 'Next.js',
        date: '2023-03-10T00:00:00.000Z',
        readingTime: 12,
        image: '/images/blog/nextauth.jpg',
        tags: ['Next.js', 'Autenticación', 'Seguridad']
      }
    ] as BlogPost[]
  }
} as const;
