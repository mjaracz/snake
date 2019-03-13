import React, { Component } from 'react';
import './GridCell.css';

type Props = {
  key: number,
  foodCell: boolean,
  snakeCell: boolean
}

class GridCell extends Component<Props> {
  render() {
    const {
      foodCell,
      snakeCell,
      tailCell,
      key
    } = this.props;

    const classes = `main__gridcell 
      ${foodCell ? 'main__gridcell--food': ''}
      ${snakeCell ? 'main__gridcell--head': ''}
      ${tailCell ? 'main__gridcell--tail': ''}
    `;

    return (
      <div className={ classes } key={ key }/>
    )
  }
}

export default GridCell;
