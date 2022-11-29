import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '~/components/Products';
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Header,
  Option,
  Select,
  Title,
} from './Components';

export const ProductList = () => {
  const category = useParams().category as string;

  const [filters, setFilters] = useState({
    color: '',
    size: '',
  });

  const [sort, setSort] = useState('newest');

  const onChange = (e: any) => {
    setFilters((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      <Header>
        <Title>{category}</Title>

        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>

            <Select name='color' value={filters.color} onChange={onChange}>
              <Option disabled value=''>
                Color
              </Option>

              <Option value=''>All</Option>

              <Option value='white'>White</Option>

              <Option value='black'>Black</Option>

              <Option value='red'>Red</Option>

              <Option value='blue'>Blue</Option>

              <Option value='yellow'>Yellow</Option>

              <Option value='green'>Green</Option>
            </Select>

            <Select name='size' value={filters.size} onChange={onChange}>
              <Option disabled value=''>
                Size
              </Option>

              <Option value=''>All</Option>

              <Option value='XS'>XS</Option>

              <Option value='S'>S</Option>

              <Option value='M'>M</Option>

              <Option value='L'>L</Option>

              <Option value='XL'>XL</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort Products:</FilterText>

            <Select name='sort' value={sort} onChange={(e) => setSort(e.target.value)}>
              <Option value='newest'>Newest</Option>

              <Option value='asc'>Price (asc)</Option>

              <Option value='desc'>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Header>

      <Products filters={filters} category={category} sort={sort} />
    </Container>
  );
};
