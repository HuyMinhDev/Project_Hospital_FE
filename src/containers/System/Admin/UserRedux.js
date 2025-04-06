import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils/constant";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    try {
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        this.setState({ genderArr: res.data });
      }
      console.log("check res: ", res);
    } catch (error) {
      console.error("Error fetching user types:", error);
    }
  }

  render() {
    const { intl } = this.props;
    let genders = this.state.genderArr;
    let language = this.props.language;
    return (
      <div className="user-redux-container">
        <div className="title">User Redux Huy</div>
        <div className="text-redux-body">
          <div className="container">
            <div className="row">
              <form>
                <div className="row">
                  <div className="col-md-12 my-3 fw-bold fs-10">
                    <FormattedMessage id="manage-user.add" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="inputEmail4" className="form-label">
                      <FormattedMessage id="manage-user.email" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder={intl.formatMessage({
                        id: "manage-user.pl-email",
                      })}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="inputPassword4" className="form-label">
                      <FormattedMessage id="manage-user.password" />
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder={intl.formatMessage({
                        id: "manage-user.pl-password",
                      })}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      <FormattedMessage id="manage-user.first-name" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder={intl.formatMessage({
                        id: "manage-user.pl-first-name",
                      })}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      <FormattedMessage id="manage-user.last-name" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder={intl.formatMessage({
                        id: "manage-user.pl-last-name",
                      })}
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      <FormattedMessage id="manage-user.phone-number" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder={intl.formatMessage({
                        id: "manage-user.pl-number",
                      })}
                    />
                  </div>

                  <div className="col-md-8 mb-3">
                    <label htmlFor="address" className="form-label">
                      <FormattedMessage id="manage-user.address" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder={intl.formatMessage({
                        id: "manage-user.pl-address",
                      })}
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="gender" className="form-label">
                      <FormattedMessage id="manage-user.gender" />
                    </label>
                    <select id="gender" className="form-select" defaultValue="">
                      <option value="" disabled>
                        {intl.formatMessage({
                          id: "manage-user.select-gender",
                        })}
                      </option>
                      {genders &&
                        genders.length > 0 &&
                        genders.map((item, index) => {
                          return (
                            <option key={index} value={item.keyMap}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="position" className="form-label">
                      <FormattedMessage id="manage-user.position" />
                    </label>
                    <select
                      id="position"
                      className="form-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {intl.formatMessage({
                          id: "manage-user.select-position",
                        })}
                      </option>
                      <option>Manager</option>
                      <option>Staff</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="roleId" className="form-label">
                      <FormattedMessage id="manage-user.role" />
                    </label>
                    <select id="roleId" className="form-select" defaultValue="">
                      <option value="" disabled>
                        {intl.formatMessage({
                          id: "manage-user.select-role",
                        })}
                      </option>
                      <option>Admin</option>
                      <option>User</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="image" className="form-label">
                      <FormattedMessage id="manage-user.image" />
                    </label>
                    <input type="text" className="form-control" id="image" />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <button type="submit" className="btn btn-primary">
                    <FormattedMessage id="manage-user.save" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(UserRedux));
