import {connect} from 'react-redux';
import {getCardsForSearch} from '../../redux/cardsRedux.js';
import {createActionChangeSearchString} from '../../redux/searchStringRedux';
import SearchResult from './SearchResult.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createActionChangeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);