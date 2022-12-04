import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selector';
import { Span, FilterInput, Input, WrapFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <FilterInput>
      <Span>Find contacts by name</Span>
      <WrapFilter>
        <SearchIcon sx={{ color: '#010101', fontSize: 30 }} />
        <Input
          type="search"
          name="filter"
          title="Filter"
          onChange={e => dispatch(setFilter(e.target.value))}
          value={value}
        />
      </WrapFilter>
    </FilterInput>
  );
};
