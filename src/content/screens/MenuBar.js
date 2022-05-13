import React, { useState } from 'react';
import logo from '../images/logo.png'
import searchlogo from '../images/icons/search.png'
import eat from '../images/icons/eat.png'
import apteka from '../images/icons/apteka.png'
import product from '../images/icons/product.png'
import uslugi from '../images/icons/uslugi.png'
import { places } from '../consts/variables'
import { setItem } from '../store/tasks';
import { useDispatch } from 'react-redux';

const styles = {
  menuBar: {
    zIndex: 2,
    width: '350px',
    position: 'fixed',
    right: 0,
    top: 0,
    background: '#EEEEEE',
    height: '100%'
  },
  container: {
    width: '0px auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  search: {
    width: '200px',
    backgroundColor: '#fff',
    border: '2px solid #DBDBDB',
    margin: '0px 10px',
    height: '36px',
    padding: '0px 15px',
    lineHeight: 0,
  },
  searchItem: {
    background: 'white',
    width: '100%',
    height: '50px',
    border: '1px solid #DDDDDD'
  },
  logo: {
    width: '175px',
    height: '175px',
    display: 'flex',
    margin: '25px auto'
  },
  menuTitle: {
    fontSize: 20,
    fontAlign: 'center',
    fontFamily: 'HelveticaNeue',
    fontStyle: 'Medium',
    margin: '0 auto'
  },
  searchLogo: {
    width: 25,
    height: 25,
  },
  columns: {
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 15px',
    fontAlign: 'center'
  },
  buttons: {
    justifyContent: 'space'
  },
  img: {
    width: 60,
    height: 60,
    margin: 'auto'
  }
}

const search = item => {
  const result = []
  if (item.length > 0) {
    places.map(buildings => {
      buildings.features.map(place => {
        const x = place
        if (x.properties.name !== undefined) {
          if (x.properties.name.includes(item)) {
            result.push(x)
            console.log(x, 'got')
          }
        }
        /// console.log(x)
      })
    })
  }
  console.log(result)
  console.log('pressed', item)
  return result
}

const MenuBar = () => {
  const [text, setText] = useState('');
  const [pressed, setPressed] = useState(false)
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  console.log(pressed)
  return (
    <div style={styles.menuBar}>
      <div style={styles.container}>
        <div>
          <img src={logo} style={styles.logo}/>
        </div>
        <div style={ styles.menuTitle }>
          Путеводитель по студгородку
        </div>
        <div style={{ marginVertical: '50px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }} >
            <input
              style={{ ...styles.search }}
              type="text"
              name="Поиск"
              placeholder='Поиск'
              onChange={txt => {
                setText(txt.target.value)
              }}
            />
            <button
              type="submit"
              style={{
                ...styles.search,
                width: '40px',
                padding: 0,
                height: '40px'
              }}
              onClick={() => {
                setItems(search(text))
                setPressed(true)
              }}
            >
              <img
                src={ searchlogo }
                style={ styles.searchLogo }
              />
            </button>
          </div>
          <div style={{
            position: 'fixed',
            // top: 0,
            background: '#09304A',
            height: (text.length > 0 && pressed) ? '100%' : 0,
            width: '100%',
            margin: '10px auto'
          }}>
            {(pressed)
              ? (items.length != 0)
                  ? items.map(item =>
                  <div 
                    key={item.properties.name} 
                    style={ styles.searchItem } 
                    onClick={txt => { 
                      dispatch(setItem(item)) 
                      setPressed(false)
                    }}
                  >
                    {item.properties.name }
                    <br />Номер кабинета {item.properties.number}
                  </div>
                  )
                  : 'Ничего не найдено'
              : ''}
          </div>
        </div>
        <div style={styles.buttons}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0' }}>
            <div style={styles.columns}>
              <div style={{ margin: '5px auto' }}>поесть</div>
              <img src={eat} style={ styles.img }></img>
            </div>
            <div style={styles.columns}>
            <div style={{ margin: '5px auto' }}>продукты</div>
              <img src={product} style={ styles.img }></img>
            </div>
            <div style={styles.columns}>
            <div style={{ margin: '5px auto' }}>аптека</div>
              <img src={apteka} style={ styles.img }></img>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={styles.columns}>
            <div style={{ margin: '5px auto' }}>услуги</div>
              <img src={uslugi} style={ styles.img }></img>
            </div>
            <div style={styles.columns}>
              <div style={{ margin: '5px auto' }}>места</div>
              <img src={eat} style={ styles.img }></img>
            </div>
            <div style={styles.columns}>
              <div style={{ margin: '5px auto' }}>спорт</div>
              <img src={eat} style={ styles.img }></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
