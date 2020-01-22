import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Card from '../Card/Card';


class SearchResult extends React.Component {

    static propTypes = {
      cards: PropTypes.array,
    }
    render(){
      const {cards} = this.props;
      
      return (
        <Container>
          <section className={styles.component}>
            <div className={styles.cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          </section>
        </Container>
      );
    }

    static propTypes = {
      columns: PropTypes.array,
      lists: PropTypes.array,
    };
}

export default SearchResult;