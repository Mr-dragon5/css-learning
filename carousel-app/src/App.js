import React from "react";
import Carousel from "./carousel";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>test</p>
        <Carousel items={items} active={0} />
      </div>
    );
  }
}

export default App;

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
