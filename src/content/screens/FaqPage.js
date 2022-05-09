import React from 'react';
import Header from './header';

import { bg, pixelImg } from '../consts/variables'
import icon from '../images/icons/icon.png'

const styles = {
  container: {
    width: '70%',
    margin: '0 auto',
    height: '100%'
  },
  innerEl: {
    background: '#001324',
    height: '1000px'
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
    fontSize: '36px',
    fontFamily: 'Nunito',
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
  searchLogo: {
    width: 25,
    height: 25,
  },
  columns: {
    backgroundColor: '#1D135B',
    width: 330,
    height: 275,
    display: 'flex',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '15px 50px',
    fontAlign: 'center'
  },
  buttons: {
    justifyContent: 'space'
  },
  img: {
    width: 100,
    height: 100,
    margin: '25px auto'
  },
  columnText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Nunito',
    margin: '15px auto'
  },
  textArea: {
    width: '375px',
    display: 'flex',
    backgroundColor: '#fff',
    border: '2px solid #DBDBDB',
    borderRadius: 5,
    margin: '20px auto',
    fontSize: 16,
    fontFamily: 'Nunito',
    overflow: 'hidden',
    height: '20px',
    padding: '10px',
    resize: 'none',
  }
}

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <div style={{ ...styles.container }}>
          <div style={styles.searchElTitle}>
              Путеводитель студента
          </div>
        </div>
        <div style={styles.container}>
          <div style={styles.blocks}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0' }}>
              <div style={styles.columns}>
                <img src={icon} style={ styles.img }></img>
                <div style={ styles.columnText }>Студенческие организации</div>
              </div>
              <div style={styles.columns}>
                <img src={icon} style={ styles.img }></img>
                <div style={ styles.columnText }>Корпусные здания</div>
              </div>
              <div style={styles.columns}>
                <img src={icon} style={ styles.img }></img>
                <div style={ styles.columnText }>Справки, документы</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div style={styles.columns}>
                <img src={icon} style={ styles.img }></img>
                <div style={ styles.columnText }>Творческие центры</div>
              </div>
              <div style={styles.columns}>
                <img src={icon} style={ styles.img }></img>
                <div style={ styles.columnText }>Общежития</div>
              </div>
            </div>
          </div>
          <div>line</div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={styles.results}>
              results
            </div>
            <div>
              <div style={styles.innerElTitle}>
                Поиск
              </div>
              <div>
                <textarea style={ styles.textArea } placeholder='Поиск'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
