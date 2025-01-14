"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/button";

// var isButtonEnabled that is changeable using a checkbox on this page
// that will be passed down tp the CustomButton to make it disabled/enabled

export default function Home() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const handleChange = () => {
    setIsButtonEnabled(!isButtonEnabled);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Hello world, caesar is alive and well!</p>
      <div>
        <h5>Donation Box?</h5>
        <input
          type="checkbox"
          checked={isButtonEnabled}
          onChange={handleChange}
        ></input>
      </div>
      <img
        src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_2240,c_limit/Monkey-Selfie.jpg"
        className={styles.monkey}
      ></img>
      <CustomButton
        text="buy him a coffee!"
        isDisabled={!isButtonEnabled}
      ></CustomButton>
    </div>
  );
}
