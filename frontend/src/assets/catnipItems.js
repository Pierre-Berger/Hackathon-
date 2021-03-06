import image1 from "./images/catnip-1.jpg";
import image2 from "./images/catnip-2.jpg";
import image3 from "./images/catnip-3.jpg";
import image4 from "./images/catnip-4.jpg";
import image5 from "./images/catnip-5.jpg";
import image6 from "./images/catnip-6.jpg";

const catnipItems = [
  {
    id: 0,
    title: "Catnip Claws",
    image: image1,
    descriptionStore: "Une herbe qui va chatouiller !",
    description: [
      "A peu près 10 doses de feuilles séchèes et de bourgeons (pas d'ajouts d'autres plantes, seulement une herbe à chat pure.",
      "Permet d'attirer votre chat vers son grattoir, remplir ses jouets, fabriquer vos propres jouets, en étaler dans sa boîte et laisser votre chat se rouler dedans. ",
      "A conserver dans un frigo pour préserver son potentiel et son parfum.",
      "Cultivée en France.",
    ],
    price: 15,
    starNumber: 3,
  },
  {
    id: 1,
    title: "Frisco Natural Catnip",
    image: image2,
    descriptionStore: "Chaperlipopette ! Une herbe qui fouette !",
    description: [
      "Parfum 100% naturel de haute qualité, feuilles aromatiques et bourgeons pour le plaisir de vos chats. Elevée pour un potentiel optimal, une couleur riche et un arôme irrésistible pour votre chat.",
      "Libère les tensions de votre chat, efface son ennui en lui permettant de planer pendant des heures.",
      " Cultivée dans le Sud de la France sans pesticides, produits chimiques ou engrais.",
    ],
    price: 6.59,
    starNumber: 4,
  },
  {
    id: 2,
    title: "Yeowww Catnip",
    image: image3,
    descriptionStore: "Ca donnerait envie d'être un chat !",
    description: [
      "Redonnez une nouvelle vie aux accessoires de votre chat grâce à cette herbe à chat séchée d’excellente qualité et issue de culture biologique.",
      "Nous vous conseillons de la saupoudrer ou de la frotter aux jouets, griffoirs et arbres à chat de votre animal afin de stimuler son instinct de jeu.",
      "Son parfum irrésistible attirera votre animal et augmentera son niveau d'activité.",
    ],
    price: 6.99,
    starNumber: 4,
  },
  {
    id: 3,
    title: "Punky Kat",
    image: image4,
    descriptionStore: "Soutenez les félins et choyez le vôtre !",
    description: [
      "Une herbe à chat si forte que vous jureriez qu'elle est illégale. Nous ajoutons de la racine de valériane, boostant l'attirance de votre chat d'environ 23% par rapport à une herbe à chat classique et permettant d'avoir un effet plus efficace et plus long sur la durée.",
      "Votre achat permettra d'aider un chat dans le besoin. Etant nous-mêmes des parents de petits chats, nous nous engageons à sauver les vies des chats et chatons abandonnés. Punky Kat donne un pourcentage de ses profits à des associations d'aides aux animaux.",
    ],
    price: 20,
    starNumber: 4,
  },
  {
    id: 4,
    title: "Meowijuana",
    image: image5,
    descriptionStore: "Ramenez la Jamaïque à la maison",
    description: [
      "Notre herbe à chat 100% bio est fabriquée à partir des bourgeons les plus purs et plus parfumés. C'est rééllement la plus pure des Meowijuanas que vous pouvez trouver sur le marché",
      "Toutes nos herbes à chats sont récoltées lors du pic de production d'huile de la plante. Cela permet de donner à votre chat l'expérience la plus psychédélique qu'il puisse vivre.",
      "A réserver aux chats de plus d'un an !",
    ],
    price: 25,
    starNumber: 5,
  },
  {
    id: 5,
    title: "Just Catnip",
    image: image6,
    descriptionStore: "Ceci n'est pas de l'herbe à chat !",
    description: [
      "Donnez à votre ami à poils la friandise parfaite pour qu'il soit relaxé et qu'il ronronne dans la paix la plus parfaite.",
      "Cultivée dans un souci d'éthique et de développement durable, notre herbe à chat est récoltée à la main par des familles de fermiers dans les vallées de l'Ariège",
      "100% naturelle, nous travaillons dur pour créer des friandises pour chats exclues de tout ajout de produits chimiques.",
    ],
    price: 8,
    starNumber: 4,
  },
];

export default catnipItems;
