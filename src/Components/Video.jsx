import { Player } from "@remotion/player";
import { MyComposition } from "../remotion/Composition";

function Video({
  Demaquillant,
  Nettoyant,
  Lotion,
  Serum,
  Contour,
  Creme,
  Levres,
}) {
  console.warn("Demaquillant");
  return (
    <>
      <Player
        component={MyComposition}
        inputProps={{
          Demaquillant,
          Nettoyant,
          Lotion,
          Serum,
          Contour,
          Creme,
          Levres,
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
    </>
  );
}

export default Video;
