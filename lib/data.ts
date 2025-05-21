import type { Category, ProgressStage } from "./types"

export const PROGRESS_STAGES: ProgressStage[] = [
  { id: "start", name: "Démarrage", threshold: 0 },
  { id: "in-progress", name: "En cours", threshold: 20 },
  { id: "advanced", name: "Avancé", threshold: 50 },
  { id: "finalization", name: "Finalisation", threshold: 80 },
  { id: "ready", name: "Prêt", threshold: 100 },
]

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: "originalite",
    name: "Originalité",
    icon: "circle",
    requirements: [
      {
        id: "orig-1",
        text: "Le modèle n'inclut pas de sections, composants ou éléments provenant de modèles ou sites web que vous ne possédez pas.",
        completed: false,
      },
      {
        id: "orig-2",
        text: "Le modèle ne reproduit pas des designs existants et n'apporte pas seulement des modifications subtiles au travail de quelqu'un d'autre.",
        completed: false,
      },
    ],
  },
  {
    id: "design.ux",
    name: "Design & UX",
    icon: "palette",
    requirements: [
      {
        id: "design-1",
        text: "Le modèle a un style cohérent sur toutes les pages.",
        completed: false,
      },
      {
        id: "design-2",
        text: "Le modèle utilise des visuels de haute qualité tels que des images ou des graphiques.",
        completed: false,
      },
      {
        id: "design-3",
        text: "Le modèle a une excellente hiérarchie visuelle et utilise les meilleures pratiques en matière de typographie, taille, couleur, contraste et répétition.",
        completed: false,
      },
      {
        id: "design-4",
        text: "Le modèle respecte les normes d'accessibilité, y compris les ratios de contraste de couleur appropriés pour le texte et les éléments interactifs.",
        completed: false,
      },
      {
        id: "design-5",
        text: "La hiérarchie typographique est soigneusement mise en œuvre et le nombre de styles et de tailles typographiques est réduit au minimum.",
        completed: false,
      },
      {
        id: "design-6",
        text: "Les effets et animations sont implémentés avec parcimonie et ajoutent à la conception ou à l'architecture de l'information.",
        completed: false,
      },
      {
        id: "design-7",
        text: "Le modèle ne doit pas inclure d'éléments non fonctionnels, comme des pages d'inscription ou de paiement, sans indication claire des exigences de licence tierce.",
        completed: false,
      },
      {
        id: "design-8",
        text: "Le modèle contient une page /404/ personnalisée.",
        completed: false,
      },
    ],
  },
  {
    id: "mise.en.page",
    name: "Mise en Page",
    icon: "layout",
    requirements: [
      {
        id: "layout-1",
        text: "Le modèle utilise un espacement, un rembourrage et un espace blanc appropriés. Le modèle ne semble pas encombré.",
        completed: false,
      },
      {
        id: "layout-2",
        text: "Les pages et sections utilisent des Stacks (Layout) pour permettre des mises en page fluides.",
        completed: false,
      },
      {
        id: "layout-3",
        text: "Les pages et sections utilisent une hauteur automatique pour qu'elles puissent s'agrandir lorsque du nouveau contenu est ajouté.",
        completed: false,
      },
      {
        id: "layout-4",
        text: "Le site web ne défile pas horizontalement en raison d'éléments débordants.",
        completed: false,
      },
      {
        id: "layout-5",
        text: "Les pages ont des mises en page uniques. (Évitez les conceptions de page redondantes avec peu ou pas de différences).",
        completed: false,
      },
    ],
  },
  {
    id: "reactivite",
    name: "Réactivité",
    icon: "zap",
    requirements: [
      {
        id: "resp-1",
        text: "Les mises en page sont fluides et réactives. Les mises en page sont testées en prévisualisant le modèle et en redimensionnant les pages.",
        completed: false,
      },
      {
        id: "resp-2",
        text: "Le nombre de points d'arrêt est maintenu au minimum (3) pour réduire la complexité du modèle et de la mise en page.",
        completed: false,
      },
      {
        id: "resp-3",
        text: "Les menus mobiles fonctionnent correctement et se développent correctement pour afficher tous les éléments de la navigation.",
        completed: false,
      },
      {
        id: "resp-4",
        text: "Les menus mobiles sont fixés en haut de la page et ne poussent pas toute la page vers le bas lors de l'expansion.",
        completed: false,
      },
      {
        id: "resp-5",
        text: "Les composants et les interactions fonctionnent sur mobile. (Ex: les curseurs deviennent glissables et le contenu ne dépend pas des états de survol).",
        completed: false,
      },
    ],
  },
  {
    id: "effets.animations",
    name: "Effets & Animations",
    icon: "sparkles",
    requirements: [
      {
        id: "effect-1",
        text: "Les transitions sont présentes sur certaines couches, pas sur chaque couche ou des sections entières. Utilisez-les avec parcimonie.",
        completed: false,
      },
      {
        id: "effect-2",
        text: "Il n'y a pas d'utilisation de préchargeurs à moins qu'ils n'améliorent considérablement l'expérience du site web.",
        completed: false,
      },
      {
        id: "effect-3",
        text: "Les effets d'interaction ne sont pas appliqués aux éléments qui n'améliorent pas l'expérience.",
        completed: false,
      },
      {
        id: "effect-4",
        text: "Les effets et animations sont utilisés de manière cohérente.",
        completed: false,
      },
    ],
  },
  {
    id: "liens",
    name: "Liens",
    icon: "link",
    requirements: [
      {
        id: "link-1",
        text: "Tous les liens externes dans le modèle fonctionnent et pointent vers des URL valides qui correspondent au contexte du texte lié.",
        completed: false,
      },
      {
        id: "link-2",
        text: "Tous les liens internes dans le modèle doivent pointer vers les pages correctes et existantes.",
        completed: false,
      },
      {
        id: "link-3",
        text: "Les éléments de texte contenant une adresse e-mail ou des numéros de téléphone doivent utiliser des liens mailto: et tel:.",
        completed: false,
      },
    ],
  },
  {
    id: "typographie",
    name: "Typographie",
    icon: "type",
    requirements: [
      {
        id: "typo-1",
        text: "Tout le texte a une orthographe et une grammaire correctes.",
        completed: false,
      },
      {
        id: "typo-2",
        text: "Le texte est unique et n'abuse pas du Lorem Ipsum.",
        completed: false,
      },
      {
        id: "typo-3",
        text: "Les polices personnalisées ne sont pas utilisées dans le modèle. (Utilisez uniquement les polices fournies avec Framer).",
        completed: false,
      },
    ],
  },
  {
    id: "ressources",
    name: "Ressources",
    icon: "folder",
    requirements: [
      {
        id: "asset-1",
        text: "Les modèles de mise en page sont utilisés pour les sections récurrentes comme la navigation et le pied de page.",
        completed: false,
      },
      {
        id: "asset-2",
        text: "Tous les actifs (composants, styles de texte et de couleur) dans le modèle sont regroupés dans des dossiers clairement étiquetés.",
        completed: false,
      },
      {
        id: "asset-3",
        text: "Les styles de texte et de couleur sont utilisés autant que possible pour faciliter l'édition pour l'utilisateur final.",
        completed: false,
      },
      {
        id: "asset-4",
        text: "Tous les composants externes du modèle sont à jour.",
        completed: false,
      },
      {
        id: "asset-5",
        text: "Les éléments de contenu répétitifs sont construits comme des composants réutilisables.",
        completed: false,
      },
      {
        id: "asset-6",
        text: "Les composants utilisent des noms descriptifs et significatifs qui reflètent leur fonctionnalité.",
        completed: false,
      },
    ],
  },
  {
    id: "cms",
    name: "CMS",
    icon: "database",
    requirements: [
      {
        id: "cms-1",
        text: "Il n'y a pas de collections CMS inutilisées dans le projet.",
        completed: false,
      },
      {
        id: "cms-2",
        text: "Les champs CMS sont nommés d'une manière qui correspond clairement à la couche à laquelle ils sont liés.",
        completed: false,
      },
      {
        id: "cms-3",
        text: "Les collections d'index CMS utilisent la pagination et évitent les restrictions de limite autant que possible.",
        completed: false,
      },
      {
        id: "cms-4",
        text: "Le CMS est utilisé là où le site web pourrait en bénéficier.",
        completed: false,
      },
      {
        id: "cms-5",
        text: "Les conditionnels de visibilité sont utilisés de manière appropriée pour masquer ou afficher du contenu en fonction de la disponibilité.",
        completed: false,
      },
    ],
  },
  {
    id: "balises",
    name: "Balises",
    icon: "package",
    requirements: [
      {
        id: "tag-1",
        text: "Les titres utilisent les balises H1-H6, appliquées de manière significative pour maintenir une hiérarchie de contenu appropriée.",
        completed: false,
      },
      {
        id: "tag-2",
        text: "Les paragraphes utilisent les balises P.",
        completed: false,
      },
      {
        id: "tag-3",
        text: "Les navigations utilisent la balise nav.",
        completed: false,
      },
      {
        id: "tag-4",
        text: "Le pied de page utilise la balise footer.",
        completed: false,
      },
      {
        id: "tag-5",
        text: "Tous les autres éléments utilisent la balise div ou une balise la mieux adaptée à cet élément.",
        completed: false,
      },
      {
        id: "tag-6",
        text: "Les images ont des balises alt lorsque c'est nécessaire.",
        completed: false,
      },
    ],
  },
  {
    id: "accessibilite",
    name: "Accessibilité",
    icon: "accessibility",
    requirements: [
      {
        id: "access-1",
        text: "Le modèle a un titre et une description personnalisés ajoutés dans les paramètres du site.",
        completed: false,
      },
      {
        id: "access-2",
        text: "Le modèle est publié sans erreurs d'optimisation.",
        completed: false,
      },
      {
        id: "access-3",
        text: "Le projet ne contient pas de composants, de code ou d'actifs inutilisés dans le panneau d'actifs.",
        completed: false,
      },
      {
        id: "access-4",
        text: "Les pages sont configurées de manière cohérente avec le même nombre de points d'arrêt et de largeurs de points d'arrêt.",
        completed: false,
      },
      {
        id: "access-5",
        text: "Il n'y a pas de pages inutilisées ou de pages de canevas.",
        completed: false,
      },
    ],
  },
  {
    id: "contenu.protege",
    name: "Contenu Protégé",
    icon: "shield",
    requirements: [
      {
        id: "copy-1",
        text: "Le modèle n'imite pas les modèles existants ou les sites web publiés.",
        completed: false,
      },
      {
        id: "copy-2",
        text: "Le modèle n'utilise pas de médias protégés par des droits d'auteur tels que des images, des vidéos et de la musique.",
        completed: false,
      },
      {
        id: "copy-3",
        text: "Assurez-vous que tous les logos utilisés dans le modèle vous appartiennent, sont sous licence d'utilisation ou ont été créés spécifiquement pour le modèle.",
        completed: false,
      },
    ],
  },
  {
    id: "code.personnalise",
    name: "Code Personnalisé",
    icon: "code",
    requirements: [
      {
        id: "code-1",
        text: "Le modèle n'affiche aucune erreur lors de la publication en raison d'un code personnalisé incorrect.",
        completed: false,
      },
      {
        id: "code-2",
        text: "Le modèle n'utilise pas de remplacements de composants de code ou de bibliothèques externes pour des fonctionnalités de base qui ne peuvent pas être facilement modifiées par des personnes sans connaissances en codage.",
        completed: false,
      },
      {
        id: "code-3",
        text: "Toute dépendance importante à des solutions tierces est clairement mentionnée dans la description du modèle Marketplace et sur la page de paiement.",
        completed: false,
      },
    ],
  },
  {
    id: "marketplace",
    name: "Marketplace",
    icon: "shopping-bag",
    requirements: [
      {
        id: "market-1",
        text: "Choisissez un seul mot pour nommer votre modèle.",
        completed: false,
      },
      {
        id: "market-2",
        text: "Le nom du modèle n'est pas le même ou n'inclut pas le même nom qu'une catégorie.",
        completed: false,
      },
      {
        id: "market-3",
        text: "Le nom du modèle n'est pas un doublon ou ne reflète pas étroitement les noms d'autres modèles existants.",
        completed: false,
      },
      {
        id: "market-4",
        text: "Le modèle a des images de marketplace de haute qualité et de haute résolution ajoutées dans le bon format.",
        completed: false,
      },
      {
        id: "market-5",
        text: "Le modèle est ajouté aux catégories correctes. Les catégories qui ne s'appliquent pas au modèle seront supprimées par l'équipe de révision.",
        completed: false,
      },
    ],
  },
]
