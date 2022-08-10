import * as Style from './styles';

type Props = {
  children: React.ReactNode;
};

// 콘텐츠를 정 중앙에 배치하기 위한 컨테이너입니다.
const ContentContainer = ({ children }: Props) => {
  return <Style.Container>{children}</Style.Container>;
};

export default ContentContainer;
