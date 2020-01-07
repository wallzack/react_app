import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'

class List extends React.Component {
  render() {
    return (<section className={styles.component}>
      <Hero className={styles.subtitle}>Elo elo 3 2 0</Hero> 
      </section>
    )
  }
}

export default List;
