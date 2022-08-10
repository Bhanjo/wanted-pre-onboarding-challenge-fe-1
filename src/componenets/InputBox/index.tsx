import * as Style from './styles';

type Props = {
  inputName: string;
  labelText: string;
  error?: string;
  children: React.ReactNode;
  isEssential?: boolean;
};

const InputBox = ({ inputName, labelText, error, children, isEssential }: Props) => {
  return (
    <div>
      <Style.InputGroup>
        <Style.Label htmlFor={inputName} isEssential={isEssential ? true : false}>
          {labelText}
        </Style.Label>
        {/* input을 children으로 받습니다. */}
        {children}
      </Style.InputGroup>
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputBox;
