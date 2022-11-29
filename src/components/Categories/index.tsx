import { categories } from '~/utils/data';
import { CategoryItem } from './CategoryItem';
import { Container } from './Components';

export const Categories = () => {
  return (
    <Container>
      {categories.map((cat) => (
        <CategoryItem key={cat.id} {...cat} />
      ))}
    </Container>
  );
};
