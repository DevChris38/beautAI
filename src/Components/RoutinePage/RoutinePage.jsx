import OpenAI from "openai";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import styles from "./RoutinePage.module.css";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import basket from "../../assets/basket.png";
import { Player } from "@remotion/player";
import { MyComposition } from "../../remotion/Composition";

export default function RoutinePage() {
  const [reponseDemaquillant, setReponseDemaquillant] = useState();
  const [reponseNettoyant, setReponseNettoyant] = useState();
  const [reponseLotion, setReponseLotion] = useState();
  const [reponseSerum, setReponseSerum] = useState();
  const [reponseContour, setReponseContour] = useState();
  const [reponseCreme, setReponseCreme] = useState();
  const [reponseLevres, setReponseLevres] = useState();
  let { state } = useLocation();
  const [panier, setPanier] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [prenom, setPrenom] = useState(state.prenom.prenom);
  const [genre, setGenre] = useState(state.genre.genre);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let budget;

  switch (state.infos.infos[0]) {
    case 1:
      budget = "peu élevé";
      break;
    case 2:
      budget = "moyen";
      break;
    case 3:
      budget = "élevé";
      break;
  }

  let typePeau;
  // console.log(state.infos.infos[2]);

  switch (state.infos.infos[2]) {
    case 1:
      typePeau = "grasse";
      break;
    case 2:
      typePeau = "mixte";
      break;
    case 3:
      typePeau = "sèche";
      break;
    case 4:
      typePeau = "normale";
      break;
    case 5:
      typePeau = "sensible";
      break;
    case 6:
      typePeau = "mature";
      break;
  }

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    let ai = async () => {
      openai.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content: "Tu est un assistant créé pour produire un fichier json",
            },
            {
              role: "user",
              content: `Propose une crème pour ${genre} parmi les marques suivante : 
              Lancôme, Giorgio Armani Beauty, Yves Saint Laurent Beauté, Kiehl's, Biotherm, Urban Decay, Ralph Lauren Fragrances, Shu Uemura, Viktor&Rolf, Maison Margiela Fragrances, Diesel Fragrances, Clarisonic, Atelier Cologne, Valentino Beauty, Mugler, Azzaro, Proenza Schouler, Cacharel, Paloma Picasso, Helena Rubinstein, YUE SAI, My Blend by Dr. Olivier Courtin, Diesel Parfums, Guy Laroche, L'oreal paris, Garnier, maybelline, nyx, essie, dark and lovely, mixa, niely, la roche posay, vichy, cerave, skinCeuticals, skinbetter science, le plus adapté à une personne qui a un budget ${budget} et une peau ${state.infos.infos[1]} et ${typePeau}, explique la raison de ton choix et donne le prix (sous la forme (X euros)). Si tu ne trouve pas, invente un produit crédible. Les éléments du json doivent être 'nom', 'raison', 'prix'`,
            },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        })
        .then((completion) => {
          return JSON.parse(completion.choices[0].message.content);
        })
        .then((go) => {
          // console.log(go);
          setReponseCreme(go);
          setPanier((prevPanier) => [...prevPanier, go]);
        });

      openai.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content: "Tu est un assistant créé pour produire un fichier json",
            },
            {
              role: "user",
              content: `Propose un nettoyant pour ${genre} parmi les marques suivante : 
              Lancôme, Giorgio Armani Beauty, Yves Saint Laurent Beauté, Kiehl's, Biotherm, Urban Decay, Ralph Lauren Fragrances, Shu Uemura, Viktor&Rolf, Maison Margiela Fragrances, Diesel Fragrances, Clarisonic, Atelier Cologne, Valentino Beauty, Mugler, Azzaro, Proenza Schouler, Cacharel, Paloma Picasso, Helena Rubinstein, YUE SAI, My Blend by Dr. Olivier Courtin, Diesel Parfums, Guy Laroche, L'oreal paris, maybelline, nyx, essie, dark and lovely, mixa, niely, la roche posay, vichy, cerave, skinCeuticals, skinbetter science, le plus adapté à une personne qui a un budget ${budget} et une peau ${state.infos.infos[1]} et ${typePeau}, explique la raison de ton choix et donne le prix (sous la forme (X euros)). Si tu ne trouve pas, invente un produit crédible. Les éléments du json doivent être 'nom', 'raison', 'prix'`,
            },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        })
        .then((completion) => {
          return JSON.parse(completion.choices[0].message.content);
        })
        .then((go) => {
          // console.log(go);
          setReponseNettoyant(go);
          setPanier((prevPanier) => [...prevPanier, go]);
        });

      openai.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content: "Tu est un assistant créé pour produire un fichier json",
            },
            {
              role: "user",
              content: `Propose une lotion pour ${genre} parmi les marques suivante : 
              Lancôme, Giorgio Armani Beauty, Yves Saint Laurent Beauté, Kiehl's, Biotherm, Urban Decay, Ralph Lauren Fragrances, Shu Uemura, Viktor&Rolf, Maison Margiela Fragrances, Diesel Fragrances, Clarisonic, Atelier Cologne, Valentino Beauty, Mugler, Azzaro, Proenza Schouler, Cacharel, Paloma Picasso, Helena Rubinstein, YUE SAI, My Blend by Dr. Olivier Courtin, Diesel Parfums, Guy Laroche, L'oreal paris, Garnier, maybelline, nyx, essie, dark and lovely, mixa, niely, la roche posay, vichy, cerave, skinCeuticals, skinbetter science, le plus adapté à une personne qui a un budget ${budget} et une peau ${state.infos.infos[1]} et ${typePeau}, explique la raison de ton choix et donne le prix (sous la forme (X euros)). Si tu ne trouve pas, invente un produit crédible. Les éléments du json doivent être 'nom', 'raison', 'prix'`,
            },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        })
        .then((completion) => {
          return JSON.parse(completion.choices[0].message.content);
        })
        .then((go) => {
          // console.log(go);
          setReponseLotion(go);
          setPanier((prevPanier) => [...prevPanier, go]);
        });

      openai.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content: "Tu est un assistant créé pour produire un fichier json",
            },
            {
              role: "user",
              content: `Propose un sérum pour ${genre} parmi les marques suivante : 
              Lancôme, Giorgio Armani Beauty, Yves Saint Laurent Beauté, Kiehl's, Biotherm, Urban Decay, Ralph Lauren Fragrances, Shu Uemura, Viktor&Rolf, Maison Margiela Fragrances, Diesel Fragrances, Clarisonic, Atelier Cologne, Valentino Beauty, Mugler, Azzaro, Proenza Schouler, Cacharel, Paloma Picasso, Helena Rubinstein, YUE SAI, My Blend by Dr. Olivier Courtin, Diesel Parfums, Guy Laroche, L'oreal paris, maybelline, nyx, essie, dark and lovely, mixa, niely, la roche posay, vichy, cerave, skinCeuticals, skinbetter science, le plus adapté à une personne qui a un budget ${budget} et une peau ${state.infos.infos[1]} et ${typePeau}, explique la raison de ton choix et donne le prix (sous la forme (X euros)). Si tu ne trouve pas, invente un produit crédible. Les éléments du json doivent être 'nom', 'raison', 'prix'`,
            },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        })
        .then((completion) => {
          return JSON.parse(completion.choices[0].message.content);
        })
        .then((go) => {
          // console.log(go);
          setReponseSerum(go);
          setPanier((prevPanier) => [...prevPanier, go]);
        });

      openai.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content: "Tu est un assistant créé pour produire un fichier json",
            },
            {
              role: "user",
              content: `Propose un soin pour ${genre} parmi les marques suivante : 
              Lancôme, Giorgio Armani Beauty, Yves Saint Laurent Beauté, Kiehl's, Biotherm, Urban Decay, Ralph Lauren Fragrances, Shu Uemura, Viktor&Rolf, Maison Margiela Fragrances, Diesel Fragrances, Clarisonic, Atelier Cologne, Valentino Beauty, Mugler, Azzaro, Proenza Schouler, Cacharel, Paloma Picasso, Helena Rubinstein, YUE SAI, My Blend by Dr. Olivier Courtin, Diesel Parfums, Guy Laroche, L'oreal paris, Garnier, maybelline, nyx, essie, dark and lovely, mixa, niely, la roche posay, vichy, cerave, skinCeuticals, skinbetter science, le plus adapté à une personne qui a un budget ${budget} et une peau ${state.infos.infos[1]} et ${typePeau}, explique la raison de ton choix et donne le prix (sous la forme (X euros)). Si tu ne trouve pas, invente un produit crédible. Les éléments du json doivent être 'nom', 'raison', 'prix'`,
            },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        })
        .then((completion) => {
          return JSON.parse(completion.choices[0].message.content);
        })
        .then((go) => {
          // console.log(go);
          setReponseContour(go);
          setPanier((prevPanier) => [...prevPanier, go]);
        });

      openai.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content: "Tu est un assistant créé pour produire un fichier json",
            },
            {
              role: "user",
              content: `Propose un démaquillant pour ${genre} parmi les marques suivante : 
              Lancôme, Giorgio Armani Beauty, Yves Saint Laurent Beauté, Kiehl's, Biotherm, Urban Decay, Ralph Lauren Fragrances, Shu Uemura, Viktor&Rolf, Maison Margiela Fragrances, Diesel Fragrances, Clarisonic, Atelier Cologne, Valentino Beauty, Mugler, Azzaro, Proenza Schouler, Cacharel, Paloma Picasso, Helena Rubinstein, YUE SAI, My Blend by Dr. Olivier Courtin, Diesel Parfums, Guy Laroche, L'oreal paris, maybelline, nyx, essie, dark and lovely, mixa, niely, la roche posay, vichy, cerave, skinCeuticals, skinbetter science, le plus adapté à une personne qui a un budget ${budget} et une peau ${state.infos.infos[1]} et ${typePeau}, explique la raison de ton choix et donne le prix (sous la forme (X euros)). Si tu ne trouve pas, invente un produit crédible. Les éléments du json doivent être 'nom', 'raison', 'prix'`,
            },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        })
        .then((completion) => {
          return JSON.parse(completion.choices[0].message.content);
        })
        .then((go) => {
          // console.log(go);
          setReponseDemaquillant(go);
          setPanier((prevPanier) => [...prevPanier, go]);
        });

      openai.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content: "Tu est un assistant créé pour produire un fichier json",
            },
            {
              role: "user",
              content: `Propose un baume à lèvres pour ${genre} parmi les marques suivante : 
              Lancôme, Giorgio Armani Beauty, Yves Saint Laurent Beauté, Kiehl's, Biotherm, Urban Decay, Ralph Lauren Fragrances, Shu Uemura, Viktor&Rolf, Maison Margiela Fragrances, Diesel Fragrances, Clarisonic, Atelier Cologne, Valentino Beauty, Mugler, Azzaro, Proenza Schouler, Cacharel, Paloma Picasso, Helena Rubinstein, YUE SAI, My Blend by Dr. Olivier Courtin, Diesel Parfums, Guy Laroche, L'oreal paris, Garnier, maybelline, nyx, essie, dark and lovely, mixa, niely, la roche posay, vichy, cerave, skinCeuticals, skinbetter science, le plus adapté à une personne qui a un budget ${budget} et une peau ${state.infos.infos[1]} et ${typePeau}, explique la raison de ton choix et donne le prix (sous la forme (X euros)). Si tu ne trouve pas, invente un produit crédible. Les éléments du json doivent être 'nom', 'raison', 'prix'`,
            },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        })
        .then((completion) => {
          return JSON.parse(completion.choices[0].message.content);
        })
        .then((go) => {
          // console.log(go);
          setReponseLevres(go);
          setPanier((prevPanier) => [...prevPanier, go]);
        });
    };

    ai();
  }, []);
  const removeFromCart = (index) => {
    setPanier((prevPanier) => {
      const newPanier = [...prevPanier];
      newPanier.splice(index, 1);
      return newPanier;
    });
  };

  const toggleCartItem = (product) => {
    const isProductInCart = panier.some((item) => item.nom === product.nom);

    if (isProductInCart) {
      removeFromCart(product.nom);
    } else {
      setPanier((prevPanier) => [...prevPanier, product]);
    }
  };
  console.log(panier);
  return (
    <section className={styles.GlobalPage}>
      <div className={styles.topPage}>
        <h1>Voici votre routine personnalisée</h1>
      </div>
      <div>
        <div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography className={styles.panierContainer}>
              <h2>Votre panier</h2>
            </Typography>
            <Typography sx={{ p: 2 }} className={styles.productPanier}>
              {panier.map((product, index) => (
                <div className={styles.cartProduct} key={index}>
                  <ProductCard
                    nom={product.nom && product.nom}
                    prix={product.prix && product.prix}
                  />
                  <button
                    className={styles.addCart}
                    onClick={() => removeFromCart(index)}
                  >
                    Retirer du panier
                  </button>
                </div>
              ))}
            </Typography>
          </Popover>
        </div>
      </div>
      {reponseDemaquillant &&
      reponseNettoyant &&
      reponseLotion &&
      reponseSerum &&
      reponseContour &&
      reponseCreme &&
      reponseLevres ? (
        <section className={styles.routinePageContainer}>
          {" "}
          <div className={styles.topPageButton}>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              className={styles.basketContainer}
            >
              <img src={basket} className={styles.basketImage} alt="" />
            </Button>
          </div>
          <div className={styles.routinePageContainer}>
            <div className={styles.divContainer}>
              <h4 className={styles.titleContainer}>Etape 1 : Démaquillage</h4>
              <p className={styles.descriptionContainer}>
                Maquillée ou non, il faut toujours procéder à un nettoyage du
                visage. Le démaquillage est donc une étape non négociable! Il
                permet de désincruster non seulement le maquillage, mais aussi
                tous les polluants et autres saletés que l’on accumule la
                journée dans les transports, la rue, etc.
              </p>
              <div className={styles.cardPosition}>
                <ProductCard
                  nom={reponseDemaquillant.nom && reponseDemaquillant.nom}
                  conseils_utilisation={
                    reponseDemaquillant.raison && reponseDemaquillant.raison
                  }
                  prix={reponseDemaquillant.prix && reponseDemaquillant.prix}
                />
                <button
                  className={styles.addCart}
                  onClick={() => toggleCartItem(reponseDemaquillant)}
                >
                  {panier.some((item) => item.nom === reponseDemaquillant.nom)
                    ? "Retirer du panier"
                    : "Ajouter au panier"}
                </button>
              </div>
            </div>

            <div className={styles.divContainer}>
              <h4 className={styles.titleContainer}>
                Etape 2 : Nettoyer sa peau
              </h4>
              <p className={styles.descriptionContainer}>
                Cette étape est essentielle pour obtenir une belle peau. Il faut
                obligatoirement retirer les résidus d’huile, de maquillage ou
                encore des cosmétiques laisser poser la nuit à l’aide d’un
                nettoyant visage sous peine de boucher vos pores et créer des
                imperfections.
              </p>

              <div className={styles.cardPosition}>
                <ProductCard
                  nom={reponseNettoyant.nom && reponseNettoyant.nom}
                  conseils_utilisation={
                    reponseNettoyant.raison && reponseNettoyant.raison
                  }
                  prix={reponseNettoyant.prix && reponseNettoyant.prix}
                />
                <button
                  className={styles.addCart}
                  onClick={() => toggleCartItem(reponseNettoyant)}
                >
                  {panier.some((item) => item.nom === reponseNettoyant.nom)
                    ? "Retirer du panier"
                    : "Ajouter au panier"}
                </button>
              </div>

              <div className={styles.divContainer}>
                <h4 className={styles.titleContainer}>
                  Etape 3 : Appliquer une lotion
                </h4>
                <p className={styles.descriptionContainer}>
                  Lorsque l’on rince sa peau à l’eau, une fine couche de
                  calcaire vient se coller à l’épiderme. Résultat ? Beaucoup de
                  personnes ressentent des tiraillements, sensation de
                  sécheresse et inconfort après avoir nettoyer leur visage. Pour
                  contrer cet effet négatif, il faut rééquilibrer la peau et la
                  rincer du calcaire en appliquant une lotion tonique.
                </p>
                <div className={styles.cardPosition}>
                  <ProductCard
                    nom={reponseLotion.nom && reponseLotion.nom}
                    conseils_utilisation={
                      reponseLotion.raison && reponseLotion.raison
                    }
                    prix={reponseLotion.prix && reponseLotion.prix}
                  />
                  <button
                    className={styles.addCart}
                    onClick={() => toggleCartItem(reponseLotion)}
                  >
                    {panier.some((item) => item.nom === reponseLotion.nom)
                      ? "Retirer du panier"
                      : "Ajouter au panier"}
                  </button>
                </div>
              </div>

              <div className={styles.divContainer}>
                <h4 className={styles.titleContainer}>
                  Etape 4 : Traiter sa peau avec un sérum
                </h4>
                <p className={styles.descriptionContainer}>
                  Le sérum est un soin traitant concentré, riche en actif. Il va
                  traiter en profondeur la problématique que vous avez et
                  compléter l’action de la crème hydratante. Il est léger et
                  pénètre rapidement la peau, aucun risque de finir luisante
                  avec lui 😉 Il s’applique avant la crème hydratante.
                </p>
                <div className={styles.cardPosition}>
                  <ProductCard
                    nom={reponseSerum.nom && reponseSerum.nom}
                    conseils_utilisation={
                      reponseSerum.raison && reponseSerum.raison
                    }
                    prix={reponseSerum.prix && reponseSerum.prix}
                  />
                  <button
                    className={styles.addCart}
                    onClick={() => toggleCartItem(reponseSerum)}
                  >
                    {panier.some((item) => item.nom === reponseSerum.nom)
                      ? "Retirer du panier"
                      : "Ajouter au panier"}
                  </button>
                </div>
              </div>

              <div className={styles.divContainer}>
                <h4 className={styles.titleContainer}>
                  Etape 5 : Contour des yeux
                </h4>
                <p className={styles.descriptionContainer}>
                  Non, il ne faut pas attendre les premières rides ou ridules de
                  déshydratation pour prendre soin de son contour de l’oeil.
                  Souvent mise à rude épreuve avec les correcteurs et le
                  maquillage qu’on lui impose, il est important de le traiter
                  pour éviter de l’abîmer.
                </p>
                <div className={styles.cardPosition}>
                  <ProductCard
                    nom={reponseContour.nom && reponseContour.nom}
                    conseils_utilisation={
                      reponseContour.raison && reponseContour.raison
                    }
                    prix={reponseContour.prix && reponseContour.prix}
                  />
                  <button
                    className={styles.addCart}
                    onClick={() => toggleCartItem(reponseContour)}
                  >
                    {panier.some((item) => item.nom === reponseContour.nom)
                      ? "Retirer du panier"
                      : "Ajouter au panier"}
                  </button>
                </div>
              </div>

              <div className={styles.divContainer}>
                <h4 className={styles.titleContainer}>
                  Etape 6 : Hydrater la peau avec une crème hydratante
                </h4>
                <p className={styles.descriptionContainer}>
                  La crème hydratante va compléter l’action du sérum et apporter
                  la douceur et le confort à la peau. Vous pouvez également
                  opter pour un baume, une huile végétale simple ou une huile
                  visage naturelle en substitution. Seul votre ressenti et vos
                  envies comptent 😉 Cette étape est indispensable le matin et
                  le soir.
                </p>
                <div className={styles.cardPosition}>
                  <ProductCard
                    nom={reponseCreme.nom && reponseCreme.nom}
                    conseils_utilisation={
                      reponseCreme.raison && reponseCreme.raison
                    }
                    prix={reponseCreme.prix && reponseCreme.prix}
                  />
                  <button
                    className={styles.addCart}
                    onClick={() => toggleCartItem(reponseCreme)}
                  >
                    {panier.some((item) => item.nom === reponseCreme.nom)
                      ? "Retirer du panier"
                      : "Ajouter au panier"}
                  </button>
                </div>
              </div>

              <div className={styles.divContainer}>
                <h4 className={styles.titleContainer}>
                  Etape 7 : Hydratation des lèvres
                </h4>
                <p className={styles.descriptionContainer}>
                  Les lèvres ne sont pas à négliger. Vous n’appliquerez pas un
                  rouge à lèvres sur des lèvres sèches et abîmées ! Il faut donc
                  les hydrater et les nourrir pour qu’elles restent douces et
                  lisses.
                </p>
                <div className={styles.cardPosition}>
                  <ProductCard
                    nom={reponseLevres.nom && reponseLevres.nom}
                    conseils_utilisation={
                      reponseLevres.raison && reponseLevres.raison
                    }
                    prix={reponseLevres.prix && reponseLevres.prix}
                  />
                  <button
                    className={styles.addCart}
                    onClick={() => toggleCartItem(reponseLevres)}
                  >
                    {panier.some((item) => item.nom === reponseLevres.nom)
                      ? "Retirer du panier"
                      : "Ajouter au panier"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Player
            className={styles.player}
            component={MyComposition}
            inputProps={{
              prenom,
              reponseDemaquillant,
              reponseNettoyant,
              reponseLotion,
              reponseSerum,
              reponseContour,
              reponseCreme,
              reponseLevres,
            }}
            durationInFrames={2000}
            compositionWidth={1280}
            compositionHeight={720}
            fps={60}
            style={{
              width: 1280,
              height: 720,
            }}
            controls
          ></Player>
        </section>
      ) : (
        <p>En cours de chargement...</p>
      )}
    </section>
  );
}
