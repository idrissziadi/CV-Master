// data/templates.js
const templates = [
    {
      id: 1,
      name: "Template A",
      description: "Un modèle simple et élégant, idéal pour les candidatures traditionnelles.",
      imageUrl: "https://example.com/template-a.png", // URL de l'image du modèle
      fields: [
        { label: "Nom", type: "text", required: true },
        { label: "Image de Profil", type: "url", required: false }, // URL pour la photo de profil
        { label: "Adresse", type: "text", required: false },
        { label: "Email", type: "email", required: true },
        { label: "Téléphone", type: "tel", required: false },
        { label: "Profil LinkedIn", type: "url", required: false },
        { label: "Expériences Professionnelles", type: "array", required: true },
        { label: "Formation", type: "array", required: true },
        { label: "Compétences", type: "array", required: true },
        { label: "Langues", type: "array", required: false },
        { label: "Projets", type: "array", required: false },
      ],
      styles: {
        font: "Arial, sans-serif",
        color: "#333",
        backgroundColor: "#fff",
      },
    },
    {
      id: 2,
      name: "Template B",
      description: "Un modèle moderne avec des sections colorées et un design dynamique.",
      imageUrl: "https://example.com/template-b.png",
      fields: [
        { label: "Nom", type: "text", required: true },
        { label: "Image de Profil", type: "url", required: false },
        { label: "Email", type: "email", required: true },
        { label: "Téléphone", type: "tel", required: false },
        { label: "Profil LinkedIn", type: "url", required: false },
        { label: "Compétences Techniques", type: "array", required: true },
        { label: "Expérience Professionnelle", type: "array", required: true },
        { label: "Éducation", type: "array", required: true },
        { label: "Certifications", type: "array", required: false },
        { label: "Langues", type: "array", required: false },
      ],
      styles: {
        font: "Roboto, sans-serif",
        color: "#ffffff",
        backgroundColor: "#007acc",
      },
    },
    {
      id: 3,
      name: "Template C",
      description: "Un modèle créatif pour les professionnels du design et des arts.",
      imageUrl: "https://example.com/template-c.png",
      fields: [
        { label: "Nom", type: "text", required: true },
        { label: "Image de Profil", type: "url", required: false },
        { label: "Adresse", type: "text", required: false },
        { label: "Email", type: "email", required: true },
        { label: "Portfolio", type: "url", required: true },
        { label: "Compétences Créatives", type: "array", required: true },
        { label: "Expériences Professionnelles", type: "array", required: true },
        { label: "Éducation", type: "array", required: true },
        { label: "Projets Notables", type: "array", required: false },
      ],
      styles: {
        font: "Georgia, serif",
        color: "#2c3e50",
        backgroundColor: "#ecf0f1",
      },
    },
  ];
  
  export default templates;
  