import MarvelLogo from '../../../assets/marvel-logo.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import YoutubeIcon from '../../../assets/youtube.svg';
import TwitterIcon from '../../../assets/twitter.svg';
import { BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa'

import { Header, IconContainer } from './styles'

export function HeaderHead() {
  return (
    <Header>
      <div className='welcome-account'>
        <h5>WELCOME</h5>
        <BiDotsVerticalRounded className='bi-dots' />
        <h5>MY ACCOUNT</h5>
      </div>
      <IconContainer>
        <div className='icons-social'>
          <div className='icons-container'>
            <a href='/'>
              <img className='marvel-logo' src={MarvelLogo} alt="Logo Marvel" />
            </a>
            <a href="http://facebook.com/marvel">
              <img className='social-icons' src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="http://youtube.com/marvel">
              <img className='social-icons' src={YoutubeIcon} alt="Youtube" />
            </a>
            <a href="http://twitter.com/marvel">
              <img className='social-icons' src={TwitterIcon} alt="Twitter" />
            </a>
          </div>
          <div className='search-container'>
            <div className='search'>
              <input type="text" placeholder='SEARCH MARVEL SHOP' />
              <button >
                <BiSearchAlt2 />
              </button>
            </div>
            <a href="">
              <BiDotsVerticalRounded className='bi-dots' />
            </a>
            <a href="">
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </IconContainer>
    </Header>
  );
}