import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BeautAI.module.css";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const marks = [
  {
    value: 1,
    label: "€",
  },
  {
    value: 2,
    label: "€€",
  },
  {
    value: 3,
    label: "€€€",
  },
];

const Types = [
  {
    value: 1,
    label: "Grasse",
  },
  {
    value: 2,
    label: "Mixte",
  },
  {
    value: 3,
    label: "Sèche",
  },
  {
    value: 4,
    label: "Normale",
  },
  {
    value: 5,
    label: "Sensible",
  },
  {
    value: 6,
    label: "Mature",
  },
];

function valueLabelTypes(value) {
  if (value === 1) {
    return "Peau brillante, produit souvent des points noirs";
  } else if (value === 2) {
    return "Peau grasse sur la zone T, et sèche sur le reste du visage";
  } else if (value === 3) {
    return "Peau qui tire, qui pèle parfois";
  } else if (value === 4) {
    return "Pas de défauts apparents à traiter";
  } else if (value === 5) {
    return "Peau qui réagit excessivement aux agressions exterieures";
  } else if (value === 6) {
    return "Peau qui présente des signes de vieillissement";
  }
}

function BeautAI() {
  const [count, setCount] = useState(0);
  const [infos, setInfos] = useState([]);
  const [prenom, setPrenom] = useState("");
  const [genre, setGenre] = useState("");

  let budget = 1;
  let pigmentation = "pale";
  let type = 1;
  let firstname = "";
  let gender = "";

  const handleClick = (number, info) => {
    if (count === number - 1) {
      setCount(number);
      setInfos([...infos, info]);
    }
  };

  const selectFirstName = (e) => {
    firstname = e.target.value;
  };

  const selectGenre = (e) => {
    gender = e.target.value;
  };

  const handleClickPrenom = () => {
    if (count === 0) {
      setCount(1);
      setPrenom(firstname);
    }
  };

  const handleClickGenre = () => {
    if (count === 1) {
      setCount(2);
      setGenre(gender);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const budgetChange = (e) => {
    budget = e.target.value;
  };

  const pigmentationChange = (e) => {
    pigmentation = e.target.value;
  };

  const typeChange = (e) => {
    type = e.target.value;
  };

  return (
    <div>
      <div id={styles.BeautAI}>
        <nav>
          <h1>BeautAI</h1>
        </nav>
        <div id={styles.BeautAI__section}>
          {count >= 0 ? (
            <div className={styles.BeautAI__section__questionCenter__Container}>
              <div className={styles.BeautAI__section__questionCenter}>
                <h2>Quel est votre prénom ?</h2>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) => selectFirstName(e)}
                />
                <button
                  className={styles.BeautAI__button}
                  type="submit"
                  onClick={() => {
                    handleClickPrenom();
                  }}
                >
                  Valider
                </button>
              </div>
            </div>
          ) : null}

          {count >= 1 ? (
            <div className={styles.BeautAI__section__questionLeft__Container}>
              <div className={styles.BeautAI__section__questionLeft}>
                <h2>Quel est votre genre ?</h2>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Veuillez choisir un :
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => selectGenre(e)}
                  >
                    <FormControlLabel
                      value="femme"
                      control={<Radio />}
                      label="femme"
                    />
                    <FormControlLabel
                      value="homme"
                      control={<Radio />}
                      label="homme"
                    />
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="Ne se prononce pas"
                    />
                  </RadioGroup>
                </FormControl>
                <button
                  className={styles.BeautAI__button}
                  type="submit"
                  onClick={() => {
                    handleClickGenre();
                  }}
                >
                  Valider
                </button>
              </div>
            </div>
          ) : null}
          {count >= 2 ? (
            <div className={styles.BeautAI__section__questionRight__Container}>
              <div className={styles.BeautAI__section__questionRight}>
                <h2>Budget</h2>
                <p>
                  Pour adapter finement notre proposition à votre budget,
                  veuillez déplacer le curseur suivant
                </p>
                <Slider
                  aria-label="Restricted values"
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valuetext}
                  step={null}
                  valueLabelDisplay="off"
                  min={1}
                  max={4}
                  marks={marks}
                  onChange={budgetChange}
                />
                <button
                  className={styles.BeautAI__button}
                  type="submit"
                  onClick={() => {
                    handleClick(3, budget);
                  }}
                >
                  Valider
                </button>
              </div>
            </div>
          ) : null}
          {count >= 3 ? (
            <div className={styles.BeautAI__section__questionLeft__Container}>
              <div className={styles.BeautAI__section__questionLeft}>
                <h2>Pigmentation de votre peau</h2>
                <p>Quelle est la pigmentation de votre peau ?</p>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Pigmentation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    defaultValue={"pâle"}
                    onChange={pigmentationChange}
                  >
                    <MenuItem value="">
                      <em>Choisissez :</em>
                    </MenuItem>
                    <MenuItem id={styles["pale"]} value={"pâle"}>
                      pâle
                    </MenuItem>
                    <MenuItem id={styles["claire"]} value={"Claire"}>
                      claire
                    </MenuItem>
                    <MenuItem id={styles["mate"]} value={"Mate"}>
                      mate
                    </MenuItem>
                    <MenuItem id={styles["foncee"]} value={"Foncée"}>
                      foncée
                    </MenuItem>
                    <MenuItem id={styles["noire"]} value={"Très foncée"}>
                      très foncée / noire
                    </MenuItem>
                  </Select>
                </FormControl>
                <button
                  className={styles.BeautAI__button}
                  type="submit"
                  onClick={() => handleClick(4, pigmentation)}
                >
                  Valider
                </button>
              </div>
            </div>
          ) : null}
          {count >= 4 ? (
            <div className={styles.BeautAI__section__questionRight}>
              <h2>Type de peau ?</h2>
              <p>Quel est votre type de peau ?</p>
              <Slider
                aria-label="Restricted values"
                valueLabelFormat={valueLabelTypes}
                getAriaValueText={valuetext}
                step={null}
                valueLabelDisplay="on"
                marks={Types}
                className={styles.slider}
                onChange={typeChange}
                min={1}
                max={6}
                defaultValue={1}
              />
              <button
                className={styles.BeautAI__button}
                type="submit"
                onClick={() => handleClick(5, type)}
              >
                Valider
              </button>
            </div>
          ) : null}

          {count >= 5 ? (
            <div className={styles.BeautAI__response}>
              <Link
                to={"/routine"}
                state={{
                  infos: { infos },
                  prenom: { prenom },
                  genre: { genre },
                }}
              >
                <button
                  className={styles.BeautAI__button}
                  type="submit"
                  onClick={() => handleClick(8)}
                >
                  Obtenir la réponse
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BeautAI;
