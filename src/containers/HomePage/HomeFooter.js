import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    return (
      <section className="home-footer">
        <p>
          &copy; 2025 Booking care. | Design by <b>Minh Huy</b> | More
          information, please visit our hospital.{" "}
          <a target="_blank" href="#">
            &#8594; Click here &#8592;
          </a>
        </p>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
