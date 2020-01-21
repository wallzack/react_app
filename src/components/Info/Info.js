import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


const Info = ({titleText, imageURL, contentText}) => (
  <Container>
    <Hero titleText={titleText} imageURL={imageURL} />
    <p className={contentText}>{ReactHtmlParser(contentText)}</p>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.string.isRequired,
  imageURL: PropTypes.node.isRequired,
  contentText: PropTypes.string.isRequired,
};

Info.defaultProps = {
  titleText: settings.infoContent.title,
  imageURL: settings.infoContent.image,
  contentText: settings.infoContent.text,
};

export default Info;