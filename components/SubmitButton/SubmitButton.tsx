import React from "react";
import { TSubmitButton } from "./@types";
import styles from "./SubmitButton.module.scss";

export default function SubmitButton(props: TSubmitButton) {
  const { text, link, url } = props;
  return (
    <>
      {link ? (
        <a href={url} className={styles.submitForm}>
          {text}
        </a>
      ) : (
        <button className={styles.submitForm} type="submit">
          {text}
        </button>
      )}
    </>
  );
}
