import * as Style from './styles';

const InputBox = ({ inputName, labelText, error, children, isEssentail }) => {
  return (
    <div>
      <Style.InputGroup>
        <Style.Label htmlFor={inputName} isEssentail={isEssentail}>
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
