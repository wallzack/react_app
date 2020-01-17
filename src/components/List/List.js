import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import PropTypes from 'prop-types'; //wymagana instalacj pakietu prop-types
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser'; //wymagana instalacja pakietu react-html-parser
import Creator from '../Creator/Creator.js';


class List extends React.Component {
  // state = {
  //   columns: this.props.columns || [],
  // }
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    imageURL: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    image: PropTypes.string,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  // addColumn(title){
  //   this.setState(state => (
  //     {
  //       columns: [
  //         ...state.columns,
  //         {
  //           key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
  //           title,
  //           icon: 'list-alt',
  //           cards: [],
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imageURL={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div> 
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    );
  }
}

export default List;
