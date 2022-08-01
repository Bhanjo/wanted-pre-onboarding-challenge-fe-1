import * as Style from './styles';

const InputBox = ({ inputName, labelText, error, children }) => {
  return (
    <div>
      <Style.InputGroup>
        <label htmlFor={inputName}>{labelText}</label>
        {/* input을 children으로 받습니다. */}
        {children}
      </Style.InputGroup>
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputBox;
