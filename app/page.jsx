import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center mt-5">Discover & Share </h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center head_text">
        AI-Powered Prompts
      </span>

      <p className="desc text-center">
        Prompto is an AI prompting tool for modern world to discover, create and
        share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
