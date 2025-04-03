import React, { Component } from "react";

import { connect } from "react-redux";
import "./OutStandingDoctor.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
class OutStandingDoctor extends Component {
  render() {
    return (
      <section className="section-share section-outstanding-doctor">
        <div className="container">
          <div className="section-container">
            <div className="section-header">
              <span className="title-section">Bác sĩ nổi bật tuần qua</span>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-customize">
                  <div className="customize-boder">
                    <div className="outer-bg">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="position text-center">
                      <div className="tittle-chucvu">
                        Giáo sư, Tiến Sĩ Minh Huy
                      </div>
                      <div>Cơ Xương Khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize">
                  <div className="customize-boder">
                    <div className="outer-bg">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="position text-center">
                      <div className="tittle-chucvu">
                        Giáo sư, Tiến Sĩ Minh Huy
                      </div>
                      <div>Cơ Xương Khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize">
                  <div className="customize-boder">
                    <div className="outer-bg">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="position text-center">
                      <div className="tittle-chucvu">
                        Giáo sư, Tiến Sĩ Minh Huy
                      </div>
                      <div>Cơ Xương Khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize">
                  <div className="customize-boder">
                    <div className="outer-bg">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="position text-center">
                      <div className="tittle-chucvu">
                        Giáo sư, Tiến Sĩ Minh Huy
                      </div>
                      <div>Cơ Xương Khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize">
                  <div className="customize-boder">
                    <div className="outer-bg">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="position text-center">
                      <div className="tittle-chucvu">
                        Giáo sư, Tiến Sĩ Minh Huy
                      </div>
                      <div>Cơ Xương Khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize">
                  <div className="customize-boder">
                    <div className="outer-bg">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="position text-center">
                      <div className="tittle-chucvu">
                        Giáo sư, Tiến Sĩ Minh Huy
                      </div>
                      <div>Cơ Xương Khớp</div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
