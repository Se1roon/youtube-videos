import Button from "./Button";

const Home = () => {
  return (
    <main className="home circle-anim">
      <header className="header">
        <div className="heading">
          Youtube <span>Search</span>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quo,
          iusto minus deserunt ea officia quibusdam excepturi, assumenda aliquam
          et magni magnam consectetur? Tenetur odio sed eum natus sit, maiores
          quas ab vitae sunt est dolorem labore modi aliquam corrupti unde animi
          veniam at perferendis harum nihil? Aut, repudiandae. Magni!
        </div>
      </header>
      <Button content="Let's start!" path="/search" />
    </main>
  );
};

export default Home;
