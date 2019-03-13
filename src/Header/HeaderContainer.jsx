import React, { Component } from 'react';
import WaterRipplesContainer from './WaterRipples/WaterRipplesContainer';

import './Header.css';

export default class HeaderContainer extends Component {
  render() {
    return(
      <header>
        <WaterRipplesContainer/>
      </header>
    )
  }
}