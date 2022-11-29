import { Categories } from '~/components/Categories';
import { Products } from '~/components/Products';
import { Slider } from '~/components/Slider';

export const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
    </>
  );
};
