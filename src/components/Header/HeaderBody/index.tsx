import { BiDotsVerticalRounded } from 'react-icons/bi';

import { Container, HeaderTabs } from './styles';

export function HeaderBody() {
  return (
    <Container>
      <HeaderTabs>
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
      </HeaderTabs>
    </Container>
  );
}
