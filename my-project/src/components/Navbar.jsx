import logo from "../assets/SahilVaishlogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { SiReaddotcv } from "react-icons/si";
const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-3 w-15" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://drive.google.com/file/d/1M2MuVxt-jFeHhBTZXmrK9UecQ29Y7nyK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <SiReaddotcv/>
      </a>
    <a href="https://www.linkedin.com/in/sahilvxish/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin/>
      </a>
      <a href="https://github.com/sahilxvaish" target="_blank" rel="noopener noreferrer">
      <FaGithub/>
      </a>
      <a href="https://x.com/sahilvxish" target="_blank" rel="noopener noreferrer">
      <FaSquareXTwitter/>
      </a>
      <a href="https://www.instagram.com/sahilvxish/" target="_blank" rel="noopener noreferrer">
      <FaInstagram/>
      </a>
      <a href="https://leetcode.com/u/sahilvxish/" target="_blank" rel="noopener noreferrer">
      <SiLeetcode/>
      </a>
    </div>
  </nav>
}

export default Navbar
