import { StyledLink, Wrap } from './AuthNav.styled';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    <Wrap>
      <StyledLink to="/register">
        <HowToRegIcon />
        Register
      </StyledLink>
      <StyledLink to="/login">
        <LoginIcon />
        Log In
      </StyledLink>
    </Wrap>
  );
};
