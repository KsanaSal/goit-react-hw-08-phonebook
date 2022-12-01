// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { StyledLink } from './Navigation.styled.js';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
