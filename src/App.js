import * as React from 'react';
import HeaderContainer from './Header/HeaderContainer';
import BoardContainer from './Board/BoardContainer';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <BoardContainer />
      </div>
    );
  }
}

export default App;
