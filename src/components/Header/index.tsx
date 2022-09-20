import { useContext, useEffect, useState } from 'react';

import { HeaderBody } from './HeaderBody';
import { HeaderHead } from './HeaderHead';
import { Advertsment } from '../Advertsment';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { SearchContext } from '../../contexts/SearchContext';
import { MarvelInfo } from '../../shared/interfaces/Marvel';

import { BoxBannerTitle, Container, ContainerTitleBanner } from './styles';

export function Header() {
  const { searchByComics } = useContext(SearchContext);
  const [cards, setCards] = useState<MarvelInfo[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: { origin: 'center', perView: 2.5, spacing: 0 },
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      }
    },
    []
  );

  function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
    const disabeld = props.disabled ? ' arrow--disabled' : '';
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
      </svg>
    );
  }

  useEffect(() => {
    const getData = async () => {
      const response = await searchByComics({
        limit: 12,
        offset: 0
      });
      setCards(response.results);
    };

    getData();
  }, []);

  return (
    <Container>
      <Advertsment backgroundColor="gray" />

      <HeaderHead />

      <HeaderBody />

      {cards.length > 0 && (
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <div ref={sliderRef} className="keen-slider">
            {cards.map((card) => {
              return (
                <div key={card.id} ref={sliderRef} className="keen-slider__slide number-slide">
                  <img
                    src={`${card.thumbnail.path}.${card.thumbnail.extension}`}
                    alt={card.title}
                  />
                </div>
              );
            })}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
          <ContainerTitleBanner>
            <BoxBannerTitle>
              <span>{cards[currentSlide]?.title}</span>
              <span>This april</span>
              <p>Charles soule and david marquez unravel the mystery</p>
              <button>
                <span>Join Now</span>
              </button>
            </BoxBannerTitle>
          </ContainerTitleBanner>
        </div>
      )}
    </Container>
  );
}
