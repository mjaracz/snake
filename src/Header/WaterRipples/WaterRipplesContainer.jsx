import React from 'react';
import TransitionMotion from '../../react-motion/TransitionMotion';
import spring from '../../react-motion/spring';
import './WaterRipples.css';

const leavingSpringConfig = {stiffness: 60, damping: 15};

export default class WaterRipplesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mouse: [], now: 't' + 0};
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  handleMouseMove = ({pageX, pageY}) => {
    this.setState(() => {
      return {
        mouse: [pageX - 25, pageY - 25],
        now: 't' + Date.now(),
      };
    });
  };
  handleKeyDown = (e) => {
    this.setState({
      mouse: [this.randomNumber(0, 1500), this.randomNumber(0, 600)],
      now: 't' + Date.now()
    })
  };

  randomNumber = (min, max) => {
    return Math.round(min + Math.random(max - min) * max)
  };
  handleTouchMove = (e) => {
    e.preventDefault();
    if(e.code) {
      this.handleMouseMove();
    }
    else {
      this.handleMouseMove(e.touches[0]);
    }
  };

  willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    };
  };

  render() {
    const {mouse: [mouseX, mouseY], now} = this.state;
    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        scale: spring(0),
        x: spring(mouseX),
        y: spring(mouseY),
      }
    }];
    return (
      <TransitionMotion willLeave={this.willLeave} styles={styles}>
        {circles =>
          <div
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.handleTouchMove}
            className="header__container"
          >
            {circles.map(({key, style: {opacity, scale, x, y}}) =>
              <div
                key={key}
                className="header__ball"
                style={{
                  opacity: opacity,
                  scale: scale,
                  transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                }}
              />
            )}
          </div>
        }
      </TransitionMotion>
    );
  };
}