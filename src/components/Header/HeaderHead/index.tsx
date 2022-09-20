import MarvelLogo from '../../../assets/marvel-logo.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import YoutubeIcon from '../../../assets/youtube.svg';
import TwitterIcon from '../../../assets/twitter.svg';
import { BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';

import {
  Header,
  IconContainer,
  IconsContainer,
  WelcomeAccount,
  MarvelLogoComponent,
  SocialIcon,
  SearchContainer,
  Search
} from './styles';

export function HeaderHead() {
  return (
    <Header>
      <WelcomeAccount>
        <h5>WELCOME</h5>
        <BiDotsVerticalRounded className="bi-dots" />
        <h5>MY ACCOUNT</h5>
      </WelcomeAccount>
      <IconContainer>
        <div className="icons-social">
          <IconsContainer>
            <a href="/">
              <MarvelLogoComponent src={MarvelLogo} alt="Logo Marvel" />
            </a>
            <a href="http://facebook.com/marvel">
              <SocialIcon src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="http://youtube.com/marvel">
              <SocialIcon src={YoutubeIcon} alt="Youtube" />
            </a>
            <a href="http://twitter.com/marvel">
              <SocialIcon src={TwitterIcon} alt="Twitter" />
            </a>
          </IconsContainer>

          <SearchContainer>
            <Search>
              <input type="text" placeholder="SEARCH MARVEL SHOP" />
              <button>
                <BiSearchAlt2 />
              </button>
            </Search>
            <a href="">
              <BiDotsVerticalRounded className="bi-dots" />
            </a>
            <a href="">
              <FaShoppingCart />
            </a>
          </SearchContainer>
        </div>
      </IconContainer>
    </Header>
  );
}
