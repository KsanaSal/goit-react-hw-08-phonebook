import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 16px;
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;

  &.active {
    color: #cb52fb;
    text-decoration: underline;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
