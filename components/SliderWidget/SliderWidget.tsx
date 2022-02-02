import React, { useCallback, useEffect, useMemo, useState } from "react";
import Slider, { Range, createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./SliderWidget.module.scss";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useMediaQuery } from "react-responsive";

const SliderWithTooltip = createSliderWithTooltip(Slider);

const marks = {
  18000: "18000",
  250000: "250000",
  500000: "500000",
  750000: "750000",
  1000000: "1000000",
};

const mobMmarks = {
        18000: "18000",
        500000: "500000",
        1000000: "1000000",
};

export default function SliderWidget() {
  const [sliderValue, setSliderValue] = useState<number>(18000);
  const [profitValue, setProfitValue] = useState<number>();
  const [isMob, setIsMob] = useState(false);

  const getIsMob = useMediaQuery({ maxWidth: 560 });

  const showedValue = (event: number) => {
    const percentValue = (Number(event) * 32) / 100;
    const finalValue = percentValue + Number(event);
    setProfitValue(finalValue);
  };

  useEffect(() => {
    setIsMob(getIsMob);
  },[getIsMob])

  return (
    <div className={styles.sliderWrap}>
      <h2>Сколько я заработаю?</h2>
      <p>Ваша инвестиция</p>
      <div className={styles.slider}>
        <SliderWithTooltip
          min={18000}
          max={1000000}
          step={18000}
          marks={isMob ? mobMmarks : marks}
          value={sliderValue}
          tipFormatter={(value) => value}
          onChange={(event: number) => {
            setSliderValue(event);
            showedValue(event);
          }}
        />
      </div>
      <p>Ваша прибыль</p>
      <h3>{profitValue ? profitValue : showedValue(sliderValue)} руб.</h3>
      <SubmitButton text={"Подать заявку"} link url={"#form"} />
    </div>
  );
}
