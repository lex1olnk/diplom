import React from 'react';

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    background: '#09304A',
    height: '50px',
    width: '100%',
  },
  container: {
    width: '70%',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  nav: {
    margin: '0 auto',
  },
  nav_a: {
    fontFamily: 'HelveticaNeue',
    textDecoration: 'none',
    fontSize: '24px',
    color: 'white',
    margin: '0px 50px',
  },

};

const Header = () => {
  return (
    <header className="header" id="header" style={styles.header}>
      <div style={styles.container}>
        <div style={styles.nav}>
          <a href="/" style={styles.nav_a}>НА ГЛАВНУЮ</a>
          <a href="/Map" style={styles.nav_a}>КАРТА</a>
          <a href="/Faq" style={styles.nav_a}>СПРАВОЧНИК</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
