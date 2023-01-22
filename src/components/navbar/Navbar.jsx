import './navbar.scss';
import Logo from '../../assets/logo.png';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={isScrolled ? 'navbar scrolled' : 'navbar'}
    >
      <div className="container">
        <div className="left">
          <img src={Logo} alt="logo" />
          <Link to="/">
            <span>Homepage</span>
          </Link>
          <Link to="/movies">
            <span>Movies</span>
          </Link>
        </div>
        <div className="right">
          <img src='https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg' alt="profile" />
          <div className="profile">
            <AiOutlinePoweroff size={25} onClick={() => dispatch(logout())} className='icon'/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
