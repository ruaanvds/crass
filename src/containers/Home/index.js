import React, { Component } from "react";
import { connect } from "react-redux";

import { loadGeneral } from "../../redux/actions/generalActions";
import logo from "../../assets/svg/logo.svg";
import { Button } from "../../components/Button";

class Home extends Component {
  render() {
    const { loadGeneral } = this.props;

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button action={loadGeneral} />
      </header>
    );
  }
}

export default connect(
  state => {
    return {
      general: state.general
    };
  },
  {
    loadGeneral
  }
)(Home);
