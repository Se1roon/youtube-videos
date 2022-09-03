const Input = ({ options }) => {
  const { placeholder } = options;

  return <input type="text" placeholder={placeholder ? placeholder : null} />;
};

export default Input;
