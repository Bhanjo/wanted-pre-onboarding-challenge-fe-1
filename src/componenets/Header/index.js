import { useEffect, useState } from 'react';
import * as Style from './styles';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('jwt');

  const logout = () => {
    localStorage.removeItem('jwt');
    setIsLogin(false);
    alert('로그아웃');
  };

  useEffect(() => {
    token ? setIsLogin(true) : setIsLogin(false);
  }, []);

  return (
    <Style.Container>
      <Style.RouteWrap>
        <Style.RouteButton to='/'>Todo</Style.RouteButton>
        {isLogin ? (
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
