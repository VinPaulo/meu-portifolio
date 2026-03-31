export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Estudante de Sistemas de Informação na UFV. Em busca de minha primeira experiência no mercado de trabalho.",
      viewProjects: "VER PROJETOS",
      downloadCV: "DOWNLOAD CV",
    },
    about: {
      titlePart1: "Minha",
      titlePart2: "Jornada",
      paragraph1: "Atualmente no 5º semestre de Sistemas de Informação na <span class='text-white'>UFV</span>, participando da empresa júnior de Sistemas - <span class='text-blue-500'>InfoAlto</span> e desenvolvendo uma pesquisa sobre Sistemas Distribuídos, com foco em performance e escalabilidade.",
      paragraph2: "Com background técnico em eletrônica pelo <span className=\"text-white\">CEFET-MG</span>, aplico conceitos de hardware em arquiteturas de software distribuídas e robustas.",
    },
    projects: {
      titlePart1: "Projetos",
      titlePart2: "Destaque",
      viewRepository: "Ver Repositório",
      items: [
        {
          title: "Analytics para Restaurantes",
          description: "Dashboard BI Full-stack desenvolvido com React 18 e Node.js. Foco em gestão de dados em tempo real e persistência com PostgreSQL.",
          tech: ["React 18", "Node.js", "PostgreSQL", "BI"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "Autenticação Segura .NET",
          description: "Sistema robusto em C# .NET com Identity e JWT. Implementação de padrões MVC e segurança de dados para aplicações escaláveis.",
          tech: ["C#", ".NET Core", "JWT", "Identity"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "Estruturas de Dados Avançadas",
          description: "Implementação de Árvores AVL e algoritmos de alta performance (Heap/Merge Sort) em C, com foco em otimização de memória.",
          tech: ["C", "C++", "Algoritmos", "Memory Management"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "Case Intuitive Care",
          description: "Automação de extração e processamento de dados de saúde, envolvendo Web Scraping e transformação de dados em escala.",
          tech: ["Python", "SQL", "Data Ingestion", "Web Scraping"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "P.Wallet — Gestão Financeira",
          description: "Sistema Full-Stack de gerenciamento financeiro com API RESTful em Java 17 e Spring Boot 3, interface moderna em React 19 com TypeScript, PostgreSQL e containerização com Docker Compose.",
          tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker"],
          link: "https://github.com/VinPaulo/ProjetoLabdeProgramacao",
        },
        {
          title: "Simulador de Árvore AVL",
          description: "Simulador visual de Árvores AVL desenvolvido em C com a biblioteca gráfica Allegro. Foco na implementação prática de estruturas de dados e algoritmos.",
          tech: ["C", "Allegro", "Estruturas de Dados", "Algoritmos"],
          link: "https://github.com/PVLemos/AVLSimulator",
        }
      ]
    },
    techStack: {
      titlePart1: "Tech",
      titlePart2: "Stack",
      categories: [
        {
          title: "Core & Performance",
          skills: ["C/C++", "C#", "Sistemas Distribuídos", "Estruturas de Dados"],
          color: "text-blue-500",
          description: "Foco em algoritmos e escalabilidade."
        },
        {
          title: "Web & Full-stack",
          skills: ["React 18", "Node.js", "TypeScript", "Express", "Next.js"],
          color: "text-blue-400",
          description: "Desenvolvimento de interfaces e APIs modernas."
        },
        {
          title: "Data & Infra",
          skills: ["PostgreSQL", "SQL Server", "Docker", "Git", "REST APIs"],
          color: "text-slate-400",
          description: "Gestão de dados e ambientes de produção."
        }
      ]
    },
    contact: {
      titlePart1: "Vamos",
      titlePart2: "Criar algo?",
      subtitle: "Gostou do que viu? Vamos conversar.",
      form: {
        name: "SEU NOME",
        email: "SEU E-MAIL",
        subject: "ASSUNTO",
        message: "SUA MENSAGEM",
        send: "ENVIAR AGORA"
      }
    },
    footer: {
      text: "© 2026 P. Lemos • Desenvolvido com Next.js."
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I am",
      role: "Information Systems student at UFV. In search of my first job experience.",
      viewProjects: "VIEW PROJECTS",
      downloadCV: "DOWNLOAD CV",
    },
    about: {
      titlePart1: "My",
      titlePart2: "Journey",
      paragraph1: "Currently in my 5th semester of Information Systems at <span class='text-white'>UFV</span>, I am part of <span class='text-blue-500'>InfoAlto</span> (Junior Enterprise) and conducting research on Distributed Systems, focusing on performance and scalability.",
      paragraph2: "With a technical background in electronics from <span className=\"text-white\">CEFET-MG</span>, I apply hardware concepts to robust distributed software architectures.",
    },
    projects: {
      titlePart1: "Featured",
      titlePart2: "Projects",
      viewRepository: "View Repository",
      items: [
        {
          title: "Restaurant Analytics",
          description: "Full-stack BI Dashboard developed with React 18 and Node.js. Focus on real-time data management and persistence with PostgreSQL.",
          tech: ["React 18", "Node.js", "PostgreSQL", "BI"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "Secure .NET Authentication",
          description: "Robust C# .NET system with Identity and JWT. Implementation of MVC patterns and data security for scalable applications.",
          tech: ["C#", ".NET Core", "JWT", "Identity"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "Advanced Data Structures",
          description: "Implementation of AVL Trees and high-performance algorithms (Heap/Merge Sort) in C, focused on memory optimization.",
          tech: ["C", "C++", "Algorithms", "Memory Management"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "Intuitive Care Case",
          description: "Automation of health data extraction and processing, involving Web Scraping and data scaling transformation.",
          tech: ["Python", "SQL", "Data Ingestion", "Web Scraping"],
          link: "https://github.com/VinPaulo",
        },
        {
          title: "P.Wallet — Financial Manager",
          description: "Full-Stack financial management system with a RESTful API in Java 17 and Spring Boot 3, a modern React 19 interface with TypeScript, PostgreSQL and Docker Compose containerization.",
          tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker"],
          link: "https://github.com/VinPaulo/ProjetoLabdeProgramacao",
        },
        {
          title: "AVL Tree Simulator",
          description: "Visual simulator for AVL Trees developed in C using the Allegro graphics library. Focused on practical implementation of data structures and algorithms.",
          tech: ["C", "Allegro", "Data Structures", "Algorithms"],
          link: "https://github.com/PVLemos/AVLSimulator",
        }
      ]
    },
    techStack: {
      titlePart1: "Tech",
      titlePart2: "Stack",
      categories: [
        {
          title: "Core & Performance",
          skills: ["C/C++", "C#", "Distributed Systems", "Data Structures"],
          color: "text-blue-500",
          description: "Focus on algorithms and scalability."
        },
        {
          title: "Web & Full-stack",
          skills: ["React 18", "Node.js", "TypeScript", "Express", "Next.js"],
          color: "text-blue-400",
          description: "Development of modern interfaces and APIs."
        },
        {
          title: "Data & Infra",
          skills: ["PostgreSQL", "SQL Server", "Docker", "Git", "REST APIs"],
          color: "text-slate-400",
          description: "Data management and production environments."
        }
      ]
    },
    contact: {
      titlePart1: "Let's",
      titlePart2: "Create something?",
      subtitle: "Liked what you saw? Let's talk.",
      form: {
        name: "YOUR NAME",
        email: "YOUR EMAIL",
        subject: "SUBJECT",
        message: "YOUR MESSAGE",
        send: "SEND NOW"
      }
    },
    footer: {
      text: "© 2026 P. Lemos • Developed with Next.js."
    }
  }
};