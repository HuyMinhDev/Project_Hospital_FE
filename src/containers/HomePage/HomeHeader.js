import React, { Component } from "react";

import { connect } from "react-redux";
import "./HomeHeader.scss";
import iconHospital from "../../assets/icon-hospital.png";
import iconTuXa from "../../assets/icon-tuxa.png";
import iconKhamTongQuan from "../../assets/iconkham-tong-quan.png";
import iconXetNghiemYHoc from "../../assets/iconxet-nghiem-y-hoc.png";
import iconSucKhoeTinhThan from "../../assets/iconsuc-khoe-tinh-than.png";
import iconKhamNhaKhoa from "../../assets/iconkham-nha-khoa.png";
import logo from "../../assets/Logo-Bookingcare.svg";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    // fire redux event : actions
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  render() {
    let language = this.props.language;

    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="container">
            <div className="home-header-content">
              <div className="left-content">
                <i className="fas fa-bars"></i>
                <img
                  className="header-logo"
                  src={logo}
                  alt="logo"
                  onClick={() => this.returnToHome()}
                />
              </div>
              <div className="center-content">
                <div className="child-content">
                  <div>
                    <b>
                      <FormattedMessage id="homeheader.speciality" />
                    </b>
                  </div>
                  <div className="subs-title">
                    <FormattedMessage id="homeheader.searchdoctor" />
                  </div>
                </div>
                <div className="child-content">
                  <div>
                    <b>
                      <FormattedMessage id="homeheader.health-facility" />
                    </b>
                  </div>
                  <div className="subs-title">
                    <FormattedMessage id="homeheader.select-room" />
                  </div>
                </div>
                <div className="child-content">
                  <div>
                    <b>
                      <FormattedMessage id="homeheader.doctor" />
                    </b>
                  </div>
                  <div className="subs-title">
                    <FormattedMessage id="homeheader.select-doctor" />
                  </div>
                </div>
                <div className="child-content">
                  <div>
                    <b>
                      <FormattedMessage id="homeheader.fee" />
                    </b>
                  </div>
                  <div className="subs-title">
                    <FormattedMessage id="homeheader.check-health" />
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div className="support">
                  <i className="fas fa-question-circle"></i>
                  <FormattedMessage id="homeheader.support" />
                </div>
                <div
                  className={
                    language === LANGUAGES.VI
                      ? "language-vi active"
                      : "language-vi"
                  }
                >
                  <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                    VN
                  </span>
                </div>
                <div
                  className={
                    language === LANGUAGES.EN
                      ? "language-en active"
                      : "language-en"
                  }
                >
                  <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="content-up">
              <div className="title1">
                <FormattedMessage id="banner.title1" />
              </div>
              <div className="title2">
                <FormattedMessage id="banner.title2" />
              </div>
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
              </div>
            </div>
            <div className="content-down">
              <div className="options">
                <div className="options-child">
                  <div className="icon-child">
                    <img src={iconHospital} alt="iconHospital" />
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child3" />
                  </div>
                </div>
                <div className="options-child">
                  <div className="icon-child">
                    <img src={iconTuXa} alt="iconTuXa" />
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child4" />
                  </div>
                </div>
                <div className="options-child">
                  <div className="icon-child">
                    <img src={iconKhamTongQuan} alt="iconKhamTongQuan" />
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child5" />
                  </div>
                </div>
                <div className="options-child">
                  <div className="icon-child">
                    <img src={iconXetNghiemYHoc} alt="iconXetNghiemYHoc" />
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child6" />
                  </div>
                </div>
                <div className="options-child">
                  <div className="icon-child">
                    <img src={iconSucKhoeTinhThan} alt="iconSucKhoeTinhThan" />
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child7" />
                  </div>
                </div>
                <div className="options-child">
                  <div className="icon-child">
                    <img src={iconKhamNhaKhoa} alt="iconKhamNhaKhoa" />
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
