import {
  FooterContainer,
  FooterSubContainer,
  NavItems,
  NavSpan,
  NavSubContainer,
  SubContainer,
  SocialIcon,
  MarvelIcon
} from './styles';

import MarvelLogo from '../../assets/marvel-logo.svg';
import FacebookIcon from '../../assets/facebook.svg';
import YoutubeIcon from '../../assets/youtube.svg';
import TwitterIcon from '../../assets/twitter.svg';

import { Advertsment } from '../Advertsment';

export function Footer() {
  return (
    <div>
      <Advertsment backgroundColor="#151515" />
      <SubContainer>
        <FooterContainer>
          <div>
            <strong>COMICS</strong>
            <span>Realsease Calendar</span>
            <span>Marvel unlimited</span>
            <span>Redeem Digital Copy</span>
            <span>Print Subscriptions</span>
            <span>Developer portal</span>
          </div>
          <div>
            <strong>CHARACTERS</strong>
            <span>Spider-Man</span>
            <span>Avengers</span>
            <span>Iron Man</span>
            <span>Doctor Strange</span>
            <span>Captain America</span>
          </div>
          <div>
            <strong>KIDS</strong>
            <span>Marvel HQ</span>
            <span>Kids Games</span>
            <span>Kides Videos</span>
            <span>Kids Activities</span>
          </div>
          <div>
            <strong>MARVEL</strong>
            <span>Sign Up</span>
            <span>Marvel MasterCard</span>
            <span>Marvel insider</span>
            <span>Help / FAQs</span>
            <span>Email Preferences</span>
            <span>About Marvel</span>
            <span>Advertising</span>
            <span>Internships</span>
            <span>Carrers</span>
          </div>
          <div>
            <strong>INSIDER</strong>
            <span>Join Today</span>
            <span>Home</span>
            <span>Activities</span>
            <span>Rewards</span>
            <span>Member Profile</span>
            <span>FAQs</span>
            <span>Marvel Insider Terms of Use</span>
          </div>
        </FooterContainer>

        <FooterSubContainer>
          <NavSubContainer>
            <MarvelIcon src={MarvelLogo} alt="Marvel logo" />
            <NavItems
              target="_self"
              data-click-text="terms of use"
              data-click-url="https://disneytermsofuse.com"
              data-click-type="link"
              href="https://disneytermsofuse.com"
            >
              Terms of Use
            </NavItems>
            <NavItems
              target="_self"
              data-click-text="privacy policy"
              data-click-url="https://privacy.thewaltdisneycompany.com/en"
              data-click-type="link"
              href="https://privacy.thewaltdisneycompany.com/en"
            >
              Privacy Policy
            </NavItems>
            <NavItems
              target="_self"
              data-click-text="your california privacy rights"
              data-click-url="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights"
              data-click-type="link"
              href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights"
            >
              Your California Privacy Rights
            </NavItems>
            <NavItems
              target="_self"
              data-click-text="license agreement"
              data-click-url="https://www.marvel.com/corporate/license_tou"
              data-click-type="link"
              href="https://www.marvel.com/corporate/license_tou"
            >
              License Agreement
            </NavItems>
            <NavItems
              target="_self"
              data-click-text="interest-based ads"
              data-click-url="http://preferences-mgr.truste.com/?pid=disney01&amp;aid=marvel01&amp;type=marvel"
              data-click-type="link"
              href="http://preferences-mgr.truste.com/?pid=disney01&amp;aid=marvel01&amp;type=marvel"
            >
              Interest-Based Ads
            </NavItems>
            <NavItems
              target="_self"
              data-click-text="marvel insider terms"
              data-click-url="https://www.marvel.com/corporate/insider_terms"
              data-click-type="link"
              href="https://www.marvel.com/corporate/insider_terms"
            >
              Marvel Insider Terms
            </NavItems>
            <NavSpan>{'©2022'} MARVEL</NavSpan>
            <SocialIcon src={FacebookIcon} alt="Facebook" />
            <SocialIcon src={TwitterIcon} alt="Twitter" />
            <SocialIcon src={YoutubeIcon} alt="Youtube" />
          </NavSubContainer>
        </FooterSubContainer>
      </SubContainer>
    </div>
  );
}
