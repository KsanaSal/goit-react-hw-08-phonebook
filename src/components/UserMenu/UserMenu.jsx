import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'hooks/useAuth';
import { Button, Title, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: '#cb52fb',
        border: '2px solid  #770e7e',
        color: 'rgba(255, 255, 255, 0.9)',
      },
      children: `${name[0].toUpperCase()}${name[1].toLowerCase()}`,
    };
  }

  return (
    <Wrapper>
      <Title>
        Welcome,
        <Avatar {...stringAvatar(user.name)} />
      </Title>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
        Logout
      </Button>
    </Wrapper>
  );
};
