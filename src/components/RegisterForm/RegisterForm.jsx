import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import CircularProgress from '@mui/material/CircularProgress';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Button, Form, Input, Label } from './RegisterForm.styled';
import { useAuth } from 'hooks';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
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
          <CircularProgress sx={{ color: '#3affe9' }} size={24} />
        ) : (
          <HowToRegIcon />
        )}
        Register{console.log('sdfgf', isLoading)}
      </Button>
    </Form>
  );
};
