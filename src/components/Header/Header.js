import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from '../Header/Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Search from '../Search/SearchContainer';


class Header extends React.Component {

  static propTypes = {
    logoIcon: PropTypes.node,
    toHomeURL: PropTypes.string,
    toInfoURL: PropTypes.string,
    toFAQURL: PropTypes.string,
    homeHeader: PropTypes.string,
    infoHeader: PropTypes.string,
    FAQHeader: PropTypes.string,
  }

  static defaultProps = {
    logoIcon: settings.navMenu.logoIcon,
    toHomeURL: settings.navMenu.toHomeURL,
    toInfoURL: settings.navMenu.toInfoURL,
    toFAQURL: settings.navMenu.toFAQURL,
    homeHeader: settings.navMenu.homeHeader,
    infoHeader: settings.navMenu.infoHeader,
    FAQHeader: settings.navMenu.FAQHeader,
  }

  render(){
    const {logoIcon, toFAQURL, toHomeURL, toInfoURL, homeHeader, infoHeader, FAQHeader} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to={toHomeURL} className={styles.logo}>
              <Icon name={logoIcon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to={toHomeURL} activeClassName='active'>{ReactHtmlParser(homeHeader)}</NavLink>
              <NavLink exact to={toInfoURL} activeClassName='active'>{ReactHtmlParser(infoHeader)}</NavLink>
              <NavLink exact to={toFAQURL} activeClassName='active'>{ReactHtmlParser(FAQHeader)}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
