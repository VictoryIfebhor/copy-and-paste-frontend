import Input from "../components/Input";
import OutputBox from "../components/OutputBox";

const Main = () => {
  const selectContentRandomly = () => {
    return Math.random() > 0.5
      ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit expedita repellendus amet, commodi magnam sequi fuga, atque quia necessitatibus architecto iste iusto voluptatem temporibus fugiat, quibusdam nemo molestiae eligendi ipsum laborum. Nulla adipisci esse debitis eius aliquam explicabo ratione doloremque libero ipsam dolore praesentium dolorum dolorem, similique fugiat expedita ipsa."
      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consectetur? Inventore placeat doloremque cupiditate";
  };

  return (
    <>
      <main>
        <Input />
        <section>
          {[1, 2, 3, 4].map((num) => {
            return (
              <OutputBox
                key={num}
                title="Title"
                content={selectContentRandomly()}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Main;
