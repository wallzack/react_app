import {connect} from 'react-redux';
import {getCardsForSearch} from '../../redux/cardsRedux.js';
import {createActionchangeSearchString} from '../../redux/searchStringRedux';
import SearchResult from './SearchResult.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createActionchangeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);