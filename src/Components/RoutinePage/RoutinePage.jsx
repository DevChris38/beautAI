import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import styles from "./RoutinePage.module.css";

export default function RoutinePage() {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const stepsData = [
    {
      title: "Etape 1 - Le double nettoyage (matin et soir) : Le Démaquillage",
      description:
        "Le double nettoyage consiste à se démaquiller et se nettoyer la peau. Il correspond à deux soins distincts du visage, afin de bien purifier votre peau de toute pollution, poussière, maquillage et autres sécrétions cutanées. Ce double nettoyage quotidien est primordial pour laisser votre peau respirer et faciliter sa régénération cellulaire, conditions clés pour une peau saine et belle.",
      products: [
        {
          id: 1,
          nom: "L'Oréal Démaquillant Micellaire",
          type: "Liquide",
          ingredients: ["Eau micellaire", "Extrait de rose", "Glycérine"],
          conseils_utilisation:
            "Imbiber un coton et passer doucement sur le visage pour enlever le maquillage.",
          imageURL:
            "https://cdn.notinoimg.com/detail_main_mq/loreal-paris/3600523329847_01-o/loreal-paris-micellar-water-eau-micellaire-pour-peaux-normales-a-seches___15.jpg",
        },
        {
          id: 2,
          nom: "L'Oréal Huile Démaquillante",
          type: "Huile",
          ingredients: ["Huile d'argan", "Huile de jojoba", "Vitamine E"],
          conseils_utilisation:
            "Appliquer sur peau sèche, masser doucement et rincer à l'eau tiède.",
          imageURL:
            "https://cdn.notinoimg.com/detail_main_mq/loreal-paris/3600524030681_01-o/loreal-paris-hyaluron-specialist-demaquillant-waterproof-bi-phase-a-lacide-hyaluronique_.jpg",
        },
      ],
    },
    {
      title: "Etape 2 - Le double nettoyage (matin et soir) : Le nettoyage",
      description:
        "Le nettoyant est la seconde étape du double nettoyage. Il sert à enlever les résidus de gras et éliminer toutes les impuretés pour avoir un visage plus net et sain. Choisissez un nettoyant au pH légèrement acide (pH naturel de la peau situé entre 4.5 et 6, pH neutre est de 7) qui préserve le film hydrolipidique de la peau ou bien un nettoyant au pH légèrement alcalin qui convient à la peau grasse ou mixte.",
      products: [
        {
          id: 1,
          nom: "L'Oréal Démaquillant Micellaire",
          type: "Liquide",
          ingredients: ["Eau micellaire", "Extrait de rose", "Glycérine"],
          conseils_utilisation:
            "Imbiber un coton et passer doucement sur le visage pour enlever le maquillage.",
          imageURL:
            "https://cdn.notinoimg.com/detail_main_mq/loreal-paris/3600523329847_01-o/loreal-paris-micellar-water-eau-micellaire-pour-peaux-normales-a-seches___15.jpg",
        },
        {
          id: 2,
          nom: "L'Oréal Huile Démaquillante",
          type: "Huile",
          ingredients: ["Huile d'argan", "Huile de jojoba", "Vitamine E"],
          conseils_utilisation:
            "Appliquer sur peau sèche, masser doucement et rincer à l'eau tiède.",
          imageURL:
            "https://cdn.notinoimg.com/detail_main_mq/loreal-paris/3600524030681_01-o/loreal-paris-hyaluron-specialist-demaquillant-waterproof-bi-phase-a-lacide-hyaluronique_.jpg",
        },
      ],
    },
  ];

  useMemo(() => {
    if (stepsData[0].products.length > 0) {
      setDisplayedProducts(stepsData[0].products);
    }
  },[]);

  console.log(displayedProducts);

  return (
    <section className={styles.GlobalPage}>
      {stepsData.map((step, id) => (
        <div key={id} className={styles.step}>
          <h4 className={styles.titleContainer}>{step.title}</h4>
          <p className={styles.descriptionContainer}>{step.description}</p>
          <div className={styles.cardPosition}>
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                nom={product.nom}
                imageURL={product.imageURL}
                conseils_utilisation={product.conseils_utilisation}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}