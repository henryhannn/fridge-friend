import React from 'react';
// import { Link } from 'react-router-dom';
import '../footer/footer_css.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <a href="https://github.com/henryhannn/fridge-friend">
          <FontAwesomeIcon className="github-icon" icon={faGithub} />
        </a>
        <p className="footer">Copyright &copy; 2020.</p>
        <p className="our-names">
          Jack Fragassi, Nyki Wiehe, Anya Hirota & Henry Han
        </p>
      </div>
    );
  }
}

export default Footer;