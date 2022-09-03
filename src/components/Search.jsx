import Header from "./Header";
import InputGroup from "./InputGroup";
import Button from "./Button";

const Search = () => {
  return (
    <main className="search circle-anim">
      <Header
        content={
          <h1>
            Search for <span>Videos!</span>
          </h1>
        }
      />
      <InputGroup />
    </main>
  );
};

export default Search;
