import PropTypes from "prop-types";
import style from "./ProductCard.module.css";

export default function ProductCard({ nom, conseils_utilisation, prix }) {
  return (
    <section className={style.globalCard}>
      <div className={style.CardContainer}>
        <div className={style.CardInformation}>
          <div className={style.descirptionContainer}>
            {nom ? <p className={style.title}>{nom}</p> : null}
            {conseils_utilisation ? (
              <p className={style.utilisation}>{conseils_utilisation}</p>
            ) : null}
            {prix ? <p>{prix}</p> : null}
          </div>
        </div>
        {/* <button className={style.addCard}>Ajouter au panier</button> */}
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  nom: PropTypes.string,
  conseils_utilisation: PropTypes.string,
  prix: PropTypes.string,
};
