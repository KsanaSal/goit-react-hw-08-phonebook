import { useAuth } from 'hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import { Nav, StyledLink } from './Navigation.styled.js';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">
        <HomeIcon />
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
