const Input = ({ options }) => {
  const { placeholder, Id } = options;

  return (
    <input type="text" id={Id} placeholder={placeholder ? placeholder : null} />
  );
};

export default Input;
