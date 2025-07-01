"use client";
import styles from "./index.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.sec1}>
        <h1 className={styles.sec1Title}>
          Personalized College Guidance for First-Gen and Underserved Students
        </h1>
        <h3 className={styles.sec1Subtitle}>
          AI + Real Mentors = Less Overwhelm, More Clarity
        </h3>
        <button className={styles.sec1Button}>Start Your Journey</button>
      </div>
      <div className={styles.sec2}>
        <div className={styles.sec2TitleSection}>
          <h1>How It Works</h1>
          <div className={styles.sec2SubtitleSection}>
            <h3 className={styles.sec2Subtitle}>Take A Short Survey</h3>
            <h3 className={styles.sec2Subtitle}>
              Get A Personalized Dashboard
            </h3>
            <h3 className={styles.sec2Subtitle}>
              Receive AI + mentor-powered advice
            </h3>
          </div>
        </div>
        <div className={styles.sec2VisualsContainer}>
          <Image
            className={styles.sec2Visual}
            src="https://www.indiewire.com/wp-content/uploads/2018/12/SpiderVerse_mkp120.1025_lm_v1-e1545860033639.jpg"
            alt="SpiderVerse Image"
            width={600}
            height={400}
            unoptimized
          />
          <Image
            className={styles.sec2Visual}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fmiguel-o-hara-spider-man2099-cg4rtasnqu937hp5.jpg&f=1&nofb=1&ipt=598a81ed6ad7f83c0d19bf5f1d0866b00ff8a5589be6fcba03caf443d7f5a6ce"
            alt="Miguel O'Hara Image"
            width={600}
            height={400}
            unoptimized
          />
          <Image
            className={styles.sec2Visual}
            src="https://deadline.com/wp-content/uploads/2018/12/1.jpg"
            alt="Miles Morales Image"
            width={600}
            height={400}
            unoptimized
          />
        </div>
        <div className={styles.sec2DescriptionContainer}>
          <h4 className={styles.sec2Description}>
            Answer a few questions to personalize your experience
          </h4>
          <h4 className={styles.sec2Description}>
            See colleges, to-dos, and passion project ideas
          </h4>
          <h4 className={styles.sec2Description}>
            AI + mentors help with essays and big questions
          </h4>
        </div>
      </div>
      <div className={styles.sec3}>
        <h1 className={styles.sec3Title}>Core Features</h1>
        <div className={styles.rightSidedContainer}>
          <Image
            className={styles.sec3Visual}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fmiles-morales-in-spider-man-into-the-spider-verse_a2dtaGyUmZqaraWkpJRnZWltrWdlaW0.jpg&f=1&nofb=1&ipt=d66c2f85c920abecf9325bfd2c93ba5c39b7038e15af3d53dfacf7ae39caeedd"
            alt="Miles Morales Spider-Man"
            width={600}
            height={400}
            unoptimized
          />
          <div className={styles.rightSidedInfo}>
            <h3>To-Do Lists</h3>
            <h4 className={styles.featureDescription}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque.
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
