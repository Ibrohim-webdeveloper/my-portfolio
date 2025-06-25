import "../App.css"
import Navbar from './Navbar'
import logo from "../assets/logo.png"
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1>Hi, I'm <span>Voxidjanov Ibrohim</span></h1>
          <h3>Fullstack Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae <br /> nihil sit delectus autem libero tempore, cum dolorem placeat <br /> fugiat modi sunt facilis beatae distinctio id eligendi.</p>
          <div className="btn-container">
            <a href="#" className="contact-me">Contact Me</a>
            <a href="#" className="get-resume">Get Resume</a>
          </div>
        </div>
        <div className="home-logo">
          <img src={logo} />
        </div>
      </div>
      <div className="social-media">
        <div className="facebook">
          <FaFacebookF />
        </div>
        <div className="twitter">
          <FaXTwitter />
        </div>
        <div className="linkedin">
          <TiSocialLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Home