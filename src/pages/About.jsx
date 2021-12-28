import React from 'react';

import myPhoto from '../assets/Foto_wil.jpg';

import styles from './About.module.css';

export function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.name}>My name isJhon Wilder Pariona Vilca</h1>
      <div className={styles.container__body}>
        <div>
          <p className={styles.description}>
            I studied system engineering at San Cristóbal of Huamanga
            University. I like learning new things about software developer. I
            am currently studying at makeit real to improve my skills
          </p>
          <section className={styles.learned}>
            <h2>I learned</h2>
            <ul>
              <li>Javascript concepts</li>
              <li>React components</li>
              <li>Agile development with scrum</li>
            </ul>
          </section>
        </div>
        <div>
          <img className={styles.photo} src={myPhoto} alt="foto" />
        </div>
      </div>
      <p className={styles.email}>
        jhon.pariona.27@unsch.edu.pe - wilder.dev@gmail.com
      </p>
      <a className={styles.github} href="http://www.github.com/wilderPariona">
        Mi GitHub
      </a>
    </main>
  );
}
