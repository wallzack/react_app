import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

// class Container extends React.Component {
//   static propTypes = {
//     children: PropTypes.node,
//   }
//   render() {
//     const {children} = this.props;
//     return (
//       <div className={styles.component}>
//         {children}
//       </div>
//     );
//   }
// }

const Container = props => (
  <div className={styles.component}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;