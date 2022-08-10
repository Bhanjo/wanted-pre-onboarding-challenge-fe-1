import * as Style from './styles';
import ContentContainer from '../ContentContainer';

type Props = {
  title: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  BtnDisabled?: boolean;
  children: React.ReactNode;
};

// 회원가입, 로그인을 위한 컴포넌트입니다.
const Sign = ({ title, children, onSubmit, BtnDisabled }: Props) => {
  return (
    <ContentContainer>
      <Style.Wrap>
        <Style.Title>{title}</Style.Title>
        <Style.Form onSubmit={onSubmit}>
          <Style.FormDatas>{children}</Style.FormDatas>
          <Style.SubmitButton type='submit' disabled={BtnDisabled}>
            {title}
          </Style.SubmitButton>
        </Style.Form>
      </Style.Wrap>
    </ContentContainer>
  );
};

export default Sign;
