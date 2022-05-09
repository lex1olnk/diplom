import React from 'react';
import { bg, pixelImg } from '../consts/variables';

const styles = {
  container: {
    width: '70%',
    margin: '0 auto',
    height: '100%',
  },
  innerEl: {
    background: '#001324',
    height: '1000px',
  },
  searchEl: {
    backgroundImage: `url(${bg})`,
    height: '1400px',
    width: '100%',
  },
  searchElTitle: {
    height: '1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchElTitleText: {
    fontFamily: 'Miratrix',
    color: 'white',
    fontSize: '84px',
  },
  innerElTitle: {
    textAlign: 'center',
    fontSize: '48px',
    color: 'white',
  },
  innerElText: {
    textAlign: 'center',
    fontSize: '24px',
    color: 'white',
  },
  innerElImg: {
    display: 'flex',
    margin: '0 auto',
  },
};

function MainInner() {
  return (
    <div>
      <div style={styles.searchEl}>
        <div style={{ ...styles.container }}>
          <div style={styles.searchElTitle}>
            <div style={styles.searchElTitleText}>Путеводитель студента</div>
          </div>
        </div>
      </div>
      <div style={styles.innerEl}>
        <div style={styles.container}>

          <div style={styles.innerElTitle}>
            Добро пожаловать в Путеводитель!
          </div>
          <div style={styles.innerElText}>
            Студенческий городок СВФУ «Сергелях»  – Развитая инфраструктура создает все необходимые условия для обучения и организации досуга иногородних и иностранных студентов.
          </div>
          <div>
            <img style={styles.innerElImg} src={pixelImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInner;
