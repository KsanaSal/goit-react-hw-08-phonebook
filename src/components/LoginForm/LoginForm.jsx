import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import LoginIcon from '@mui/icons-material/Login';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Form, Input, Label } from './LoginForm.styled';
import { useAuth } from 'hooks';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">
        {isLoading ? (
          <CircularProgress sx={{ color: '#770e7e' }} size={24} />
        ) : (
          <LoginIcon />
        )}
        Log In
      </Button>
    </Form>
  );
};
