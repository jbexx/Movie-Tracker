import React from "react";
import { connect } from "react-redux";
import { getFromLocal } from "../../actions/actions";
import App from "../App/App.jsx";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { currentUser: state.loggedIn };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFromLocal: getFromLocal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
