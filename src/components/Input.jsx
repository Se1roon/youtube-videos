const Input = ({ options, onChange }) => {
  const { placeholder, Id, type } = options;

  return (
    <input
      type={type}
      id={Id}
      placeholder={placeholder ? placeholder : null}
      onChange={onChange}
    />
  );
};

export default Input;
