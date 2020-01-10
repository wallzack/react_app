import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    titleColumn: PropTypes.node,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: <p>I can do all the</p>
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageURL={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div> 
        <div className={styles.columns}>
          <Column titleColumn={'Title one'} />
          <Column titleColumn={'Title two'} />
          <Column titleColumn={'Title three'} />
        </div>
      </section>
    )
  };
}

export default List;
