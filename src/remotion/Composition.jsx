import {
  AbsoluteFill,
  useCurrentFrame,
  Img,
  staticFile,
  useVideoConfig,
  spring,
  Sequence,
} from "remotion";
import styles from "./Composition.module.css";

export const MyComposition = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - 10, // Soustraire le délai
    fps,
    durationInFrames: 60,
  });

  const frameToShowLoreal = 120;

  const fadeOutStartLoreal = frameToShowLoreal - 30;

  const opacityLoreal =
    frame < 60
      ? Math.min(1, frame / 60)
      : frame > fadeOutStartLoreal
      ? 1 - (frame - fadeOutStartLoreal) / 30 // fondu de 30 frames
      : 1;

  const opacityName = frame < 150 ? Math.min(1, (frame - 120) / 60) : 1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        backgroundColor: "white",
      }}
    >
      <Img src={staticFile("fond.jpg")} />
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          opacity: opacityLoreal,
        }}
      >
        <Sequence to={70}>
          {frame <= frameToShowLoreal && (
            <Img src={staticFile("LOreal-Logo.png")} />
          )}
        </Sequence>
      </AbsoluteFill>
      <Sequence from={120}>
        {frame <= 170 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.prenom}
          </AbsoluteFill>
        )}
      </Sequence>
      <Sequence from={180}>
        {frame <= 230 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Voici votre routine personalisée
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={240}>
        {frame <= 290 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Etape 1
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={300}>
        {frame <= 350 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Le démaquillant
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={360}>
        {frame <= 470 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.reponseDemaquillant.nom}
          </AbsoluteFill>
        )}
      </Sequence>
      <Sequence from={480}>
        {frame <= 530 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Etape 2
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={540}>
        {frame <= 590 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Le nettoyant
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={600}>
        {frame <= 710 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.reponseNettoyant.nom}
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={720}>
        {frame <= 750 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Etape 3
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={760}>
        {frame <= 810 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            La lotion
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={820}>
        {frame <= 930 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.reponseLotion.nom}
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={940}>
        {frame <= 1000 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Etape 4
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1010}>
        {frame <= 1060 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Le serum
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1070}>
        {frame <= 1180 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.reponseSerum.nom}
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1190}>
        {frame <= 1240 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Etape 5
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1250}>
        {frame <= 1300 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Le contour des yeux
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1310}>
        {frame <= 1420 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.reponseContour.nom}
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1430}>
        {frame <= 1480 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Etape 6
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1490}>
        {frame <= 1540 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            La creme hydratante
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1550}>
        {frame <= 1660 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.reponseCreme.nom}
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1670}>
        {frame <= 1720 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Etape 7
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1730}>
        {frame <= 1780 && (
          <AbsoluteFill
            className={styles.text}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Le soin des lèvres
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1790}>
        {frame <= 1900 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            {props.reponseLevres.nom}
          </AbsoluteFill>
        )}
      </Sequence>

      <Sequence from={1910}>
        {frame <= 2000 && (
          <AbsoluteFill
            className={styles.produit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 100,
              opacity: opacityName,
            }}
          >
            Merci pour votre confiance
          </AbsoluteFill>
        )}
      </Sequence>
    </AbsoluteFill>
  );
};
