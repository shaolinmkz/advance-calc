import React, { Component, createContext } from 'react'

export const storeTheme = createContext();

class StoreProvider extends Component {
  state = {
    show: false,
    display: 0,
    simple: {
      num1: 1,
      num2: 1,
      operand: "+"
    },
    historyMajor: [],
    historyMinor: []
  }
  toogleHistory = () => {
    this.setState({ show: !this.state.show });
  }

  monitorHistory = (value) => {
    this.setState({ historyMinor:[...this.state.historyMinor, value]});
    this.setState({ display: value });
  }

  render() {
    const { props, state, toogleHistory, monitorHistory } = this;
    return (
     <storeTheme.Provider value={{ ...state, toogleHistory, monitorHistory }}>
      {props.children}
     </storeTheme.Provider>
    )
  }
}

export default StoreProvider
