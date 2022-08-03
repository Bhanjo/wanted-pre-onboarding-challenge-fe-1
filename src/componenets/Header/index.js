import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './styles';

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('jwt'));

  const logout = () => {
    localStorage.removeItem('jwt');
    alert('로그아웃');
    navigate('/auth/sign-in');
    setToken(null);
  };

  useEffect(() => {
    setToken(localStorage.getItem('jwt'));
  }, [token]);

  return (
    <Style.Container>
      <Style.RouteWrap>
        <Style.RouteButton to='/'>Home</Style.RouteButton>
        <Style.RouteButton to='/todo'>Todo</Style.RouteButton>
        {token ? (
          <button type='button' onClick={logout}>
            로그아웃
          </button>
        ) : (
          <Style.RouteButton to='/auth/sign-in'>로그인</Style.RouteButton>
        )}
        <Style.RouteButton to='/auth/sign-up'>회원가입</Style.RouteButton>
      </Style.RouteWrap>
    </Style.Container>
  );
};

export default Header;
