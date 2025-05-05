import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <section className="section-share section-about container">
        <div className="section-about-header">
          Truyền thông nói về bệnh viện
        </div>
        <div className="section-about-content">
          <div className="content-left">
            {/* <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/zaYS8tiD0Og?si=zaITotWt5Pbh2Ngn&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
          </div>
          <div className="content-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              aut repellat voluptates similique ducimus id earum ab sunt
              officiis unde cumque voluptas facere quas architecto, expedita
              dolorem distinctio eveniet quaerat quia mollitia. Voluptatum
              perferendis, repellendus eaque animi magnam, possimus ut qui
              excepturi id adipisci aperiam amet iure obcaecati quibusdam
              itaque!
            </p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
