import * as Style from './styles';
import ContentContainer from '../ContentContainer';

// 회원가입, 로그인을 위한 컴포넌트입니다.
const Sign = ({ title, children }) => {
  return (
    <ContentContainer>
      <Style.Wrap>
        <Style.Title>{title}</Style.Title>
        {children}
      </Style.Wrap>
    </ContentContainer>
  );
};

export default Sign;
