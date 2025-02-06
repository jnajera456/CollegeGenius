"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/button";
import LogoHeader from "../components/header";
import cx from "classnames";

// var isButtonEnabled that is changeable using a checkbox on this page
// that will be passed down tp the CustomButton to make it disabled/enabled

export default function Home() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const handleChange = () => {
    setIsButtonEnabled(!isButtonEnabled);
  };

  const [data, setData] = useState();
  const [isGetSuccessful, setIsGetSuccessful] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");

  //how much of the above process do I need to repeat here?
  const [sum, setSum] = useState(null);
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");

  async function getUserFromApi() {
    // call the API endpoint ---- fetch
    const response = await fetch("/api/get-user", {
      method: "POST", // GET, PATCH, PUT , POST , DELETE
      body: JSON.stringify({
        userId: currentUserId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    // successful or not
    if (response.ok) {
      // no issues
      // the data in the response is currently a string with JSON data, convert it to a real object
      const info = await response.json();
      setData(info);
      setIsGetSuccessful(true);
    }
    if (!response.ok) {
      // some error happened
      const errorInfo = await response.json();
      setData(errorInfo);
      setIsGetSuccessful(false);
    }
  }

  async function getAgeSumFromApi() {
    //call the API endpoint that will calculate this
    const response = await fetch("/api/get-age-sum-of-users", {
      method: "POST",
      body: JSON.stringify({
        firstUser: firstUser,
        secondUser: secondUser,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    // successful or not
    if (response.ok) {
      // no issues
      // the data in the response is currently a string with JSON data, convert it to a real object
      const info = await response.json();
      setSum(info.sum);
      setIsGetSuccessful(true);
    }
    if (!response.ok) {
      // some error happened
      const errorInfo = await response.json();
      setAge(errorInfo);
      setIsGetSuccessful(false);
    }
  }

  // dont pass in anything to the API, just call it and it does all the work
  // make an endpoint that tells you a whether its morning, afternoon, or night, evening, based on time. the api will figure this out (look up js get current time) --- than based on the time of day, show a differenty color div with the word.
  // for example, morning would be a yellow rectangle with the word Good morning
  // night would be a dark blue rect with the word Good night!

  return (
    <div>
      <LogoHeader className={styles.pageHeader}></LogoHeader>
      <div className={styles.pageBody}>
        <h1 className={styles.mainHeader}>
          Master the College <br /> Application Process With
        </h1>
        <h1 className={cx(styles.mainHeader, styles.mainHeaderColor)}>
          Personalized Mentorship
        </h1>
        <p1 className={styles.gistPara}>
          Take the stress out of college applications with our personalized
          mentorship program. Whether you&apos;re unsure where to start or need
          guidance perfecting your essays, we&apos;re here to help you every
          step of the way. Our expert mentors provide tailored advice,
          actionable insights, and step-by-step support to ensure you feel
          confident and prepared throughout the admissions journey. With
          resources designed to fit your unique goals, you&apos;ll be empowered
          to make informed decisions and put your best foot forward.
        </p1>
        <div className={styles.statsContainer}>
          <div>
            <h3>10+</h3>
            <h5>Courses</h5>
          </div>
          <div>
            <h3>10+</h3>
            <h5>Expert Mentors</h5>
          </div>
          <div>
            <h3>50+</h3>
            <h5>Hours of Content</h5>
          </div>
        </div>
      </div>

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

      <br />
      <br />
      <br />
      <br />
      <input onChange={(e) => setCurrentUserId(e?.target?.value)}></input>
      <button onClick={getUserFromApi}>Call the API!</button>
      {isGetSuccessful && (
        <p>
          Hello {data?.name}! I can see that you&apos;re already {data?.age}!
          Congrats!
        </p>
      )}
      {!isGetSuccessful && <p>{data?.message}</p>}

      <h3>Enter First User Name:</h3>
      <input
        onChange={(e) =>
          setFirstUser({ name: e?.target?.value, age: firstUser.age })
        }
      ></input>
      <h3>Enter First User Age:</h3>
      <input
        onChange={(e) =>
          setFirstUser({ name: firstUser.name, age: e?.target?.value })
        }
      ></input>

      <h3>Enter Second User Name:</h3>
      <input
        onChange={(e) =>
          setSecondUser({ name: e?.target?.value, age: secondUser.age })
        }
      ></input>
      <h3>Enter Second User Age:</h3>
      <input
        onChange={(e) =>
          setSecondUser({ name: secondUser.name, age: e?.target?.value })
        }
      ></input>

      <button onClick={getAgeSumFromApi}>Call the API!</button>
      {sum && <p>The sum of the two user ages is: {sum} years old!</p>}
    </div>
  );
}
