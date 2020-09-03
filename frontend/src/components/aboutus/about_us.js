import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faAngellist, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './about_us_css.scss';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us-container">
        <NavBarContainer/>
        <div className="today-align">
        <div className="about-us">
          <div className="about-the-app">
          <h1>About The App</h1>
            <img className="about-us-img" src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/Success+5.png"/>
          <p>
            Created with MongoDB, Express, React/Redux & Javascript.
            <br />
              <img id="mern-img" className="about-us-img" src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/mern-img.png" />
            <br />
            With roommates being our first priority, we wanted to develop an app
            that allowed roommates to keep track of the items in a shared refridgerator
            without those awkward discussions of "who ate my eggs?". 
            <br />
            <br />
            <strong>This app was made in only 6 days.</strong>
          </p>
          
          <h1>About The Team</h1>
          <div className="about-the-team">
            <div className="first-two">
              <div className="henry-han">
                <h1>Henry Han</h1>
                <p>Team Lead</p>
                  <FontAwesomeIcon className="about-icon" icon={faGithub} />
                  <FontAwesomeIcon className="about-icon" icon={faAngellist} />
                  <FontAwesomeIcon className="about-icon" icon={faLinkedin} />
              </div>
              <div className="nyki-wiehe">
                <h1>Nyki Wiehe</h1>
                <p>Frontend Lead</p>
                  <FontAwesomeIcon className="about-icon" icon={faGithub} />
                  <FontAwesomeIcon className="about-icon" icon={faAngellist} />
                  <FontAwesomeIcon className="about-icon" icon={faLinkedin} />
              </div>
            </div>
            <div className="second-two">
              <div className="jack-fragassi">
                <h1>Jack Fragassi</h1>
                <p>Backend Lead</p>
                  <FontAwesomeIcon className="about-icon" icon={faGithub} />
                  <FontAwesomeIcon className="about-icon" icon={faAngellist} />
                  <FontAwesomeIcon className="about-icon" icon={faLinkedin} />
              </div>
              <div className="anya-hirota">
                <h1>Anya Hirota</h1>
                <p>Omnipotent Engineer</p>
                  <FontAwesomeIcon className="about-icon" icon={faGithub} />
                  <FontAwesomeIcon className="about-icon" icon={faAngellist} />
                  <FontAwesomeIcon className="about-icon" icon={faLinkedin} />
              </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs;