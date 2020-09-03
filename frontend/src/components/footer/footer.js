import React from 'react';
// import { Link } from 'react-router-dom';
import '../footer/footer_css.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faGithub } from "@fortawesome/free-brands-svg-icons";



class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <a href="https://github.com/henryhannn/fridge-friend">
          <FontAwesomeIcon className="github-icon" icon={faGithub} />
        </a>
        <Link to="/aboutus" className="about-us-link">About Us</Link>
        <p className="footer">Fridge Friend. Copyright &copy; 2020.</p>
      </div>
    );
  }
}

export default Footer;