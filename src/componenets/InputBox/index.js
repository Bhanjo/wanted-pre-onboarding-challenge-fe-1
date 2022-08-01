import styled from 'styled-components';

const InputBox = ({ inputName, labelText, error, children }) => {
  return (
    <div>
      <InputGroup>
        <label htmlFor={inputName}>{labelText}</label>
        {/* input과 에러를 children으로 받음 */}
        {children}
      </InputGroup>
      {error && <p>{error}</p>}
    </div>
  );
};

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label::after {
    content: '*';
    color: red;
  }
  input {
    width: 65%;
    height: 35px;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #d5d4d4;
    font-size: 18px;
  }
  input:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.indigo};
  }
`;

export default InputBox;
