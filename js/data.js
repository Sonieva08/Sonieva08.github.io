const PORTFOLIO = {

  profile: {
    name: "Sonieva Oliviera ALPHONSE",
    title: "Diplômée en Sciences Informatiques | Cybersécurité | Développement Web",
    intro: "Jeune professionnelle en informatique, orientée développement web et cybersécurité, je conçois des solutions informatiques et je m'intéresse particulièrement à la sécurité des systèmes, des réseaux et des applications.",
    availability: "Disponible pour un stage ou une première opportunité professionnelle",
    photo: "images/profile/photo.jpg",
    logo: "images/profile/logo.png",
    contactText: "Je cherche un stage ou une première opportunité professionnelle. N'hésitez pas à me contacter.",
    about: [
      { icon: "school", title: "Parcours", text: "Licence en Sciences Informatiques à l'UNITECH (2020–2024), puis DESS en cybersécurité à l'UNITECH/BRH, depuis mars 2025." },
      { icon: "code", title: "Ce qui m'intéresse", text: "Le développement web et la sécurité des systèmes, des réseaux et des applications." },
      { icon: "flag", title: "Objectif", text: "Trouver un stage ou une première opportunité pour développer mon expérience pratique." }
    ]
  },

  links: {
    email: "alphonseolivier07@gmail.com",
    linkedin: "https://www.linkedin.com/in/sonieva07/",
    github: "https://github.com/Sonieva08",
    cv: "documents/CV_Sonieva_Oliviera_Alphonse.pdf"
  },

  skills: [
    { category: "Développement", icon: "code", description: "", items: ["C#", "ASP.NET Web Forms", "Java", "Python", "HTML", "CSS", "JavaScript", "MVC/MVVM"] },
    { category: "Bases de données", icon: "database", description: "", items: ["MySQL", "Oracle", "SQL"] },
    { category: "Cybersécurité", icon: "shield", description: "", items: ["Cyberdéfense", "Sécurité réseau", "Analyse des risques", "Notions de forensique"] },
    { category: "Réseaux", icon: "hub", description: "", items: ["Cisco Packet Tracer", "Wireshark", "Routage", "Analyse de trafic", "Supervision"] },
    { category: "Systèmes", icon: "dns", description: "", items: ["Windows", "Linux Ubuntu/Debian", "macOS"] },
    { category: "Outils", icon: "terminal", description: "", items: ["Git", "GitHub", "GitLab", "Bash/PowerShell", "Microsoft Office", "LibreOffice", "Google Workspace"] }
  ],

  projects: [
    {
      name: "GestFloreChicGirlsStore",
      badge: "Application web",
      icon: "storefront",
      demoSoon: false,
      summary: "Application web de gestion des stocks et des ventes pour Flore Chic Girls Store, un magasin de vêtements avec plusieurs points de vente. Projet de fin d'études de Licence.",
      problem: "La gestion manuelle causait des pertes de produits, des ruptures de stock imprévues, des erreurs de facturation et aucun indicateur fiable pour décider.",
      role: "Projet réalisé en binôme avec Judlet Stanis, de l'analyse des besoins à la conception et au développement.",
      features: [
        "Authentification et gestion des utilisateurs par rôle",
        "Enregistrement des produits, réapprovisionnement et ajustement des stocks",
        "Point de vente : panier, choix du client, paiement, reçu imprimable",
        "Génération de proformas et de rapports de ventes",
        "Alertes de niveau de stock"
      ],
      tech: ["C#", "ASP.NET Web Forms", "MySQL", "Bootstrap 4", "jQuery / AJAX"],
      security: "Requêtes SQL paramétrées, protection contre XSS et CSRF, validation côté serveur, accès selon le rôle.",
      images: [
        "images/projects/00-gestflore-connexion.png",
        "images/projects/02-gestflore-enregistrer-produit.png",
        "images/projects/05-gestflore-liste-produits.png",
        "images/projects/08-gestflore-point-de-vente.png",
        "images/projects/16-gestflore-recu-de-vente.png"
      ],
      github: "",
      demo: ""
    }
  ],

  certifications: [
    {
      title: "Développement Mobile – Niveau débutant (formation de 60 h à distance)",
      category: "Mobile",
      icon: "smartphone",
      org: "Organisation internationale de la Francophonie (projet D-CLIC)",
      date: "14 juillet 2026",
      description: "",
      link: ""
    },
    {
      title: "Introduction to the Threat Landscape 3.0 (français)",
      category: "Cybersécurité",
      icon: "shield",
      org: "Fortinet Training Institute",
      date: "21 avril 2026",
      description: "",
      link: ""
    },
    {
      title: "Basics of Python",
      category: "Programmation",
      icon: "terminal",
      org: "UniAthena, en partenariat avec Cambridge International Qualifications",
      date: "30 janvier 2026",
      description: "",
      link: ""
    }
  ],

  education: [
    {
      title: "DESS en cybersécurité",
      org: "UNITECH / BRH",
      period: "Depuis mars 2025",
      description: "",
      tags: []
    },
    {
      title: "Licence en Sciences Informatiques",
      org: "UNITECH",
      period: "2020–2024",
      description: "",
      tags: []
    }
  ]

};