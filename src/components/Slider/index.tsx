import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { sliderItems } from '~/utils/data';
import {
  Arrow,
  Button,
  Container,
  Description,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from './Components';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: string) => () => {
    if (direction === 'right') setSlideIndex((p) => (p + 1 === sliderItems.length ? 0 : p + 1));
    else setSlideIndex((p) => (p === 0 ? sliderItems.length - 1 : p - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleClick('right'), 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Arrow direction='left' onClick={handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((el) => (
          <Slide key={el.id} bg={el.bg}>
            <ImgContainer>
              <Image src={el.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{el.title}</Title>

              <Description>{el.desc}</Description>

              <Button color={el.bg}>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction='right' onClick={handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
