import { Container } from './styles'
import { BiDotsVerticalRounded } from 'react-icons/bi';

export function HeaderBody() {
  return (
    <Container>
      <div className='header-tabs'>
        <div>
          <header>
            <p>SHOP</p>
          </header>
        </div>
        <div>
          <header>
            <BiDotsVerticalRounded />
          </header>
        </div>
        <div>
          <header>
            <p>New!</p>
          </header>
        </div>
        <div>
          <header>
            <p>Comics</p>
          </header>
        </div>
        <div>
          <header>
            <p>Characters</p>
          </header>
        </div>
        <div>
          <header>
            <p>Clothes</p>
          </header>
        </div>
        <div>
          <header>
            <p>Acessories</p>
          </header>
        </div>
        <div>
          <header>
            <p>Toys</p>
          </header>
        </div>
        <div>
          <header>
            <p>Home Décor</p>
          </header>
        </div>
        <div>
          <header>
            <p>Entertainment</p>
          </header>
        </div>
        <div>
          <header>
            <p>Collectibles</p>
          </header>
        </div>
        <div>
          <header>
            <p>Sales</p>
          </header>
        </div>
      </div>

      {/* <ul>
          <li>
            <label>SHOP</label>
          </li>
          <li>
            <a id="mvl-flyout-button-0" className="" href="https://www.marvel.com/watch">New!</a>
          </li>
          <li>
            <a id="mvl-flyout-button-0" className="" href="https://www.marvel.com/watch">Comics</a>
          </li>
          <li>
            <a id="mvl-flyout-button-0" className="" href="https://www.marvel.com/watch">Comics</a>
          </li>
        </ul> */}
      {/* </div> */}
    </Container>
  );
}