import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
  };
};
