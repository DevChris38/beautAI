import PropTypes from "prop-types";
import style from "./ProductCard.module.css";

export default function ProductCard({ nom, imageURL, conseils_utilisation }) {
  return (
    <section className={style.globalCard}>
      <div className={style.CardContainer}>
        <div className={style.CardInformation}>
          <div className={style.descirptionContainer}>
            <p className={style.title}>{nom}</p>
            <p>{conseils_utilisation}</p>
          </div>
          <img className={style.imageContainer} src={imageURL} alt={nom} />
        </div>
        <button className={style.addCard}>Ajouter au panier</button>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  conseils_utilisation: PropTypes.string.isRequired,
};
