import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;

  &.active {
    color: #3affe9;
    text-decoration: underline;
  }
`;
