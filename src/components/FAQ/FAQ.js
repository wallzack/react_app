import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


const FAQ = ({titleText, imageURL, contentText}) => (
  <Container>
    <Hero titleText={titleText} imageURL={imageURL} />
    <p className={contentText}>{ReactHtmlParser(contentText)}</p>
  </Container>
);

FAQ.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageURL: PropTypes.node.isRequired,
  contentText: PropTypes.string.isRequired,
};

FAQ.defaultProps = {
  titleText: settings.FAQContent.title,
  imageURL: settings.FAQContent.image,
  contentText: settings.FAQContent.text,
};

export default FAQ;