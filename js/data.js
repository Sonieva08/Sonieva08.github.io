PORTFOLIO = {
  profile: {
    name: "Sonieva Oliviera ALPHONSE",
    title: "Développeur de solutions numériques | Cybersécurité",
    intro: "Je conçois et développe des solutions numériques en combinant développement informatique, réflexion fonctionnelle et sécurité. Je m'intéresse aux applications utiles, intuitives et fiables, capables de répondre à des besoins concrets.",
    availability: "Ouvert aux opportunités professionnelles et collaborations",
    photo: "images/profile/photo.jpg",
    logo: "images/profile/logo.png",
    contactText: "Vous avez un projet, une idée ou une opportunité de collaboration ? Échangeons.",
    about: [
      { icon: "school", title: "Parcours", text: "Diplômé en Sciences Informatiques à l'Université de Technologie d'Haïti (UNITECH) et poursuivant un DESS en cybersécurité dans le cadre du programme UNITECH/BRH." },
      { icon: "terminal", title: "Ce que je fais", text: "Développement d'applications, exploration des technologies, conception de solutions et analyse des enjeux de sécurité." },
      { icon: "lightbulb", title: "Ma démarche", text: "Comprendre le besoin, structurer une solution, concevoir, développer, tester et améliorer." }
    ]
  },
  links: {
    email: "alphonseolivier07@gmail.com",
    linkedin: "https://www.linkedin.com/in/sonieva07/",
    github: "https://github.com/Sonieva08",
    cv: "documents/CV_Sonieva_Oliviera_Alphonse.pdf"
  },
  skills: [
    { category: "Développement", icon: "code", description: "Conception et réalisation d'applications", items: ["C#", "ASP.NET Web Forms", "Java", "Python", "HTML", "CSS", "JavaScript", "MVC/MVVM"] },
    { category: "Bases de données", icon: "database", description: "Stockage, requêtes et gestion des données", items: ["MySQL", "Oracle", "SQL", "Firebase"] },
    { category: "Cybersécurité", icon: "shield", description: "Principes de protection et analyse", items: ["Cyberdéfense", "Sécurité réseau", "Analyse des risques", "Notions de forensique"] },
    { category: "Réseaux", icon: "hub", description: "Configuration et observation des réseaux", items: ["Cisco Packet Tracer", "Wireshark", "Routage", "Analyse de trafic", "Supervision"] },
    { category: "Systèmes", icon: "dns", description: "Environnements et administration", items: ["Windows", "Linux Ubuntu/Debian", "macOS"] },
    { category: "Outils", icon: "terminal", description: "Outils de développement et de productivité", items: ["Git", "GitHub", "GitLab", "Bash/PowerShell", "Microsoft Office", "LibreOffice", "Google Workspace"] }
  ],

  projects: [
    {
      name: "GestFloreChicGirlsStore",
      badge: "Application web",
      icon: "storefront",
      summary: "Application web de gestion des stocks et des ventes pour une boutique de vêtements, réalisée dans le cadre du projet de fin d'études de Licence.",
      problem: "Le suivi manuel des produits et des ventes pouvait entraîner des erreurs, des ruptures de stock et un manque de visibilité sur les opérations.",
      role: "Projet réalisé en binôme : analyse des besoins, conception et développement de fonctionnalités de gestion.",
      features: ["Authentification et gestion des utilisateurs par rôle", "Gestion des produits et des stocks", "Point de vente et panier", "Proformas, reçus et rapports", "Alertes de stock"],
      security: "Validation côté serveur, requêtes SQL paramétrées et gestion des accès selon les rôles.",
      challenges: "Structurer les opérations de stock et de vente pour qu'elles soient cohérentes avec les besoins d'une boutique.",
      tech: ["C#", "ASP.NET Web Forms", "MySQL", "Bootstrap", "jQuery / AJAX"],
      images: ["images/projects/00-gestflore-connexion.png", "images/projects/02-gestflore-enregistrer-produit.png", "images/projects/05-gestflore-liste-produits.png", "images/projects/08-gestflore-point-de-vente.png"], github: "", demo: ""
    },
    {
      name: "LajanAnsanm",
      badge: "Projet personnel",
      icon: "groups",
      summary: "Concept de plateforme numérique visant à faciliter le suivi et l'organisation des cotisations au sein de groupes de cotisation (sòl/tontine).",
      problem: "Le suivi des membres, des cotisations, des échéances et des opérations peut devenir difficile lorsque tout est géré manuellement.",
      role: "Initiateur du projet et travail sur le cadrage, les fonctionnalités et l'expérience d'utilisation.",
      features: ["Organisation des groupes et des membres", "Suivi des cotisations et des échéances", "Historique et visibilité des opérations", "Réflexion sur la confidentialité et les règles de service"],
      tech: ["Projet web", "Conception fonctionnelle", "Fintech locale"],
      images: [
        "images/projects/lajanansanm/logo.png",
        "images/projects/lajanansanm/screen-dashboard.jpg",
        "images/projects/lajanansanm/screen-peman.jpg",
        "images/projects/lajanansanm/screen-tontin.jpg"
      ],
      github: "", demo: "https://www.lajanansanm.com/"
    },
    {
      name: "LevelUpQuiz",
      badge: "Application mobile",
      icon: "quiz",
      summary: "Jeu de quiz interactif avec système d'XP et défi du jour, développé avec React Native + Expo + Firebase.",
      problem: "Il était difficile de mesurer et d'améliorer les connaissances de manière ludique et progressive.",
      role: "Développement de l'application mobile complète : interface, logique de jeu, système de progression et classements.",
      features: [
        "Test de positionnement (5 questions pour évaluer le niveau initial)",
        "Quizz avec timer (15 secondes par question, 10 questions par session)",
        "Système d'XP et débloquage de niveaux (Débutant, Intermédiaire, Avancé)",
        "Score et classements par catégorie",
        "Défis du jour et profil utilisateur",
        "Authentification Firebase et sauvegarde des résultats"
      ],
      security: "Authentification sécurisée par Firebase Auth, sauvegarde des données dans Firestore, gestion des accès par rôles.",
      challenges: "Synchroniser les données en temps réel, gérer les niveaux d'XP et les transitions entre les écrans.",
      tech: ["React Native", "Expo", "Firebase", "Firestore", "TypeScript"],
      images: [], github: "https://github.com/Sonieva07/LevelUpQuiz", demo: ""
    },
    {
      name: "Analyse des risques des systèmes de paiement",
      badge: "Projet académique",
      icon: "security",
      summary: "Étude des risques de cybersécurité associés aux systèmes de paiement en Haïti et réflexion sur des mesures de protection.",
      problem: "Les systèmes de paiement doivent protéger les données, assurer l'intégrité des transactions et contribuer à la continuité des services.",
      role: "Travail de recherche, identification des actifs, analyse des menaces et vulnérabilités, scénarios de risques et architecture de simulation.",
      features: ["Identification et classification des actifs", "Analyse des menaces et vulnérabilités", "Évaluation des risques", "Architecture de référence pour un environnement de simulation"],
      tech: ["Analyse de risques", "ISO/IEC 27001", "Architecture réseau"], images: [], github: "", demo: ""
    }
  ],

  certifications: [
    { title: "Développement Mobile – Niveau débutant (formation de 60 h à distance)", category: "Mobile", icon: "smartphone", org: "Organisation internationale de la Francophonie (projet D-CLIC)", date: "14 juillet 2026" },
    { title: "Développement mobile – Niveau Intermédiaire", category: "Mobile", icon: "smartphone", org: "Organisation internationale de la Francophonie (projet D-CLIC)", date: "4 octobre 2026" },
    { title: "Introduction to the Threat Landscape 3.0 (français)", category: "Cybersécurité", icon: "shield", org: "Fortinet Training Institute", date: "21 avril 2026" },
    { title: "Basics of Python", category: "Programmation", icon: "terminal", org: "UniAthena, en partenariat avec Cambridge International Qualifications", date: "30 janvier 2026" }
  ],
  education: [
    { title: "DESS en cybersécurité", org: "Université de Technologie d'Haïti (UNITECH) / BRH", period: "Mars 2025 – 2026", description: "Formation approfondie en cybersécurité.", tags: ["Cybersécurité"] },
    { title: "Licence en Sciences Informatiques", org: "Université de Technologie d'Haïti (UNITECH)", period: "2020–2024", description: "Formation universitaire en informatique.", tags: ["Informatique"] }
  ]
};


