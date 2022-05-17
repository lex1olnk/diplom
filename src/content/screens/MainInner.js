import React from 'react'
import { bg, studgorod, logo } from '../consts/variables'

const styles = {
  container: {
    width: '70%',
    margin: '0 auto',
    height: '100%'
  },
  searchEl: {
    height: '1000px',
    width: '100%',
  },
  searchElTitle: {
    height: '1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchElTitleText: {
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontSize: '84px',
  },
  innerElTitle: {
    textAlign: 'center',
    fontSize: '48px',
    color: 'white',
  },
  innerElText: {
    fontFamily: 'HelveticaNeue',
    textAlign: 'center',
    fontSize: '24px',
    color: 'white',
  },
  innerElImg: {
    width: '100%',
    display: 'flex',
    margin: '0 auto',
  },
}

const MainInner = () => {
  return (
    <div>
      <div style={styles.searchEl}>
        <div style={{ ...styles.container }}>
          <div style={styles.searchElTitle}>
            <div>
              <div style={styles.searchElTitleText}>
                Путеводитель по студгородку
              </div>
              <div style={styles.innerElText}>
                Студенческий городок СВФУ «Сергелях»  – 
                Развитая инфраструктура создает все необходимые условия для обучения 
                и организации досуга иногородних и иностранных студентов.  
              </div>
            </div>
            <div>
              <img 
                src={logo}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={styles.innerEl}>
        <div style={styles.container}>
          <div>
            <img 
              style={styles.innerElImg} 
              src={studgorod}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInner;
