import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selector';
import { Span, FilterInput, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <FilterInput>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filter"
        title="Filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={value}
      />
    </FilterInput>
  );
};
