import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import NavBarContainer from '../nav/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faAngellist, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './about_us_css.scss';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us-container">
        {this.props.loggedIn ? <NavBarContainer /> : ""}
        <div className="today-align">
          <div className="about-us">
            <div className="about-the-app">
              <h1>About The App</h1>
              <img
                className="about-us-img"
                src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/Success+5.png"
              />
              <p>
                Created with MongoDB, Express, React/Redux & Javascript.
                <br />
                <img
                  id="mern-img"
                  className="about-us-img"
                  src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/mern-img.png"
                />
                <br />
                With roommates being our first priority, we wanted to develop an
                app that allowed roommates to keep track of the items in a
                shared refridgerator without those awkward discussions of "who
                ate my eggs?".
                <br />
                <br />
              </p>

              <h1>About The Team</h1>
              <div className="about-the-team">
                <div className="first-two">
                  <div className="henry-han">
                    <h1>Henry Han</h1>
                    <p>Team Lead</p>
                    <a href="https://github.com/henryhannn">
                      <FontAwesomeIcon className="about-icon" icon={faGithub} />
                    </a>
                    <a href="https://angel.co/u/henryhannn">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faAngellist}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/henryhannn/">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faLinkedin}
                      />
                    </a>
                  </div>
                  <div className="nyki-wiehe">
                    <h1>Nyki Wiehe</h1>
                    <p>Frontend Lead</p>
                    <a href="https://github.com/nykiway">
                      <FontAwesomeIcon className="about-icon" icon={faGithub} />
                    </a>
                    <a href="https://angel.co/u/nicole-wiehe">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faAngellist}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/nicolewiehe/">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faLinkedin}
                      />
                    </a>
                  </div>
                </div>
                <div className="second-two">
                  <div className="jack-fragassi">
                    <h1>Jack Fragassi</h1>
                    <p>Backend Lead</p>
                    <a href="https://github.com/jfrag1">
                      <FontAwesomeIcon className="about-icon" icon={faGithub} />
                    </a>
                    <a href="https://angel.co/u/jack-fragassi">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faAngellist}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/jack-fragassi-a8413b1b4/">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faLinkedin}
                      />
                    </a>
                  </div>
                  <div className="anya-hirota">
                    <h1>Anya Hirota</h1>
                    <p>Omnipotent Engineer</p>
                    <a href="https://github.com/anyahirota">
                      <FontAwesomeIcon className="about-icon" icon={faGithub} />
                    </a>
                    <a href="https://angel.co/u/anya-hirota">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faAngellist}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/anya-hirota-59392560/">
                      <FontAwesomeIcon
                        className="about-icon"
                        icon={faLinkedin}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="return-home-about">
              {!this.props.loggedIn ? (
                <button>
                  <Link to="/home">Return Home</Link>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps)(AboutUs);