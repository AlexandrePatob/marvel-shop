import { Advertsment } from "../Advertsment";
import { Container, SubContainer } from "./styles";

export function Footer() {
  return (
    <Container>
      <Advertsment backgroundColor="#151515" />
      <SubContainer>

        <div className="footer-container">
          <div>
            <label>COMICS</label>
            <a>Realsease Calendar</a>
            <a>Marvel unlimited</a>
            <a>Realsease Calendar</a>
            <a>Realsease Calendar</a>
            <a>Realsease Calendar</a>
          </div>
          <div>
            <label>CHARACTERS</label>
            <ul>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>

            </ul>
          </div>
          <div>
            <label>KIDS</label>
            <ul>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>

            </ul>
          </div>
          <div>
            <label>MARVEL</label>
            <ul>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>

            </ul>
          </div>
          <div>
            <label>INSIDER</label>
            <ul>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>
              <li>Realsease Calendar...</li>

            </ul>
          </div>
        </div>
      </SubContainer>
    </Container>
  )
}