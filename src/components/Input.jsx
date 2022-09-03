const Input = ({ options, onChange }) => {
  const { placeholder, Id } = options;

  return (
    <input
      type="text"
      id={Id}
      placeholder={placeholder ? placeholder : null}
      onChange={onChange}
    />
  );
};

export default Input;
