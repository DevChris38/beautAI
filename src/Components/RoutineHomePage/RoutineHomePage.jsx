import { Link } from "react-router-dom";
import routineHome from "../../assets/RoutineHome.png";
import style from "./RoutineHomePage.module.css";
import nettoyageHuile from "../../assets/nettoyageHuile.jpg";
import nettoyageEau from "../../assets/nettoyageEau.jpg";
import exfoliant from "../../assets/exfoliant.jpg";
import tonic from "../../assets/tonic.jpg";
import essence from "../../assets/essence.jpg";
import serum from "../../assets/serum.jpg";
import mask from "../../assets/mask.jpg";
import creme from "../../assets/creme.jpg";
import solaire from "../../assets/solaire.jpeg";
import skincare from "../../assets/skincare.jpg";

export default function RoutineHomePage() {
  return (
    <section className={style.pageContainer}>
      <div className={style.imageContainer}>
        <div className={style.buttonContainer}>
          <h3>Routine Visage: les étapes du Layering</h3>
          <Link to={"/BeautAI"}>
            <button className={style.bottomButton}>
              Découvrir votre routine
            </button>
          </Link>
        </div>
        <img className={style.imagePosition} src={routineHome}></img>
      </div>
      <div className={style.BottomPageContainer}>
        <h2 className={style.titleContainer}>
          Une Approche Stratégique pour une Peau Rayonnante
        </h2>
        <article className={style.ArticleContainer}>
        <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={skincare}></img>
          </div>
          Dans le monde de la beauté et des soins de la peau, la routine du
          layering s&apos;est imposée comme une approche méticuleuse et stratégique
          pour atteindre une peau saine, éclatante et bien hydratée. Inspirée
          par les rituels de beauté asiatiques, cette méthode consiste à
          appliquer les produits de soins en plusieurs couches successives,
          chacune ayant un rôle spécifique. Bien plus qu&apos;une simple séquence
          d&apos;application, le layering vise à maximiser les bienfaits de chaque
          produit tout en respectant les besoins uniques de la peau.
          Décortiquons cette routine en strates, pour comprendre comment elle
          peut transformer votre routine de soins de la peau en une expérience
          holistique, offrant à votre épiderme l&apos;attention qu&apos;il mérite.
        </article>
        <h3 className={style.titleContainer}>
          1. Démaquillage / Nettoyage à l&apos;huile :
        </h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Huile démaquillante, nettoyant à l&apos;huile.
          Conseils : Choisissez une huile démaquillante adaptée à votre type de
          peau. Massez délicatement pendant au moins 1 à 2 minutes pour
          permettre à l&apos;huile de dissoudre efficacement le maquillage et les
          impuretés.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={nettoyageHuile}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>2. Nettoyage à l&apos;eau :</h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Nettoyant doux à base d&apos;eau. Conseils : Optez
          pour un nettoyant sans sulfates pour éviter de dessécher la peau.
          Massez doucement en mouvements circulaires, en accordant une attention
          particulière à la zone T.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={nettoyageEau}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>
          3. Exfoliation (optionnelle, une à deux fois par semaine) :
        </h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Exfoliant enzymatique ou à base d&apos;acides
          (AHA/BHA). Conseils : N&apos;appliquez pas trop de pression pendant
          l&apos;exfoliation. Choisissez une fréquence adaptée à votre peau (une à
          deux fois par semaine) pour éviter tout risque d&apos;irritation.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={exfoliant}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>4. Tonification :</h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Tonique sans alcool, tonique hydratant.
          Conseils : Évitez les toniques astringents, car ils peuvent assécher
          la peau. Recherchez des ingrédients apaisants tels que l&apos;aloe vera ou
          la camomille.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={tonic}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>5. Essence :</h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Essence hydratante. Conseils : Appliquez
          l&apos;essence sur une peau légèrement humide pour une absorption maximale.
          Les essences aident à préparer la peau à absorber les couches
          suivantes de produits.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={essence}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>
          6. Sérums et traitements ciblés :
        </h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Sérum anti-âge, sérum anti-acné, sérum
          éclaircissant. Conseils : Choisissez des sérums avec des ingrédients
          actifs adaptés à vos préoccupations spécifiques. Appliquez du plus
          léger au plus épais, en favorisant la pénétration en tapotant
          doucement.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={serum}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>
          7. Masques (optionnel, une à deux fois par semaine) :
        </h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Masques hydratants, masques en feuille.
          Conseils : Les masques offrent une dose intensive d&apos;ingrédients
          bénéfiques. Choisissez en fonction de vos besoins, que ce soit pour
          l&apos;hydratation, la purification ou l&apos;éclat.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={mask}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>8. Hydratation :</h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Crème hydratante adaptée à votre type de peau.
          Conseils : Optez pour une crème qui scelle l&apos;hydratation sans obstruer
          les pores. Massez doucement pour stimuler la circulation sanguine.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={creme}></img>
          </div>
        </article>

        <h3 className={style.titleContainer}>9. Protection solaire :</h3>
        <article className={style.ArticleContainer}>
          Produits recommandés : Écran solaire avec un SPF d&apos;au moins 30.
          Conseils : L&apos;application quotidienne d&apos;un écran solaire protège la
          peau des dommages UV, prévenant le vieillissement prématuré et
          réduisant le risque de cancers de la peau. Réappliquez toutes les deux
          heures si vous êtes exposé au soleil.
          <div className={style.articleImage}>
          <img className={style.articleImagePosition} src={solaire}></img>
          </div>
        </article>

        <article className={style.ArticleContainer}>
          En adaptant ces recommandations à votre type de peau et en choisissant
          des produits de qualité, vous pourrez créer une routine de layering
          adaptée à vos besoins spécifiques, favorisant une peau éclatante et en
          santé.
        </article>
        <div className={style.bottomButtonContainer}>
          <Link to={"/BeautAI"}>
            <button className={style.bottomButton}>
              Découvrir votre routine
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
