import Input from "../components/Input";
import OutputBox from "../components/OutputBox";
import { useGlobalContext } from "../context";

const Main = () => {
  const { items } = useGlobalContext();

  return (
    <>
      <main>
        <Input />
        <section>
          {items &&
            items.map((item) => {
              return (
                <OutputBox
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
        </section>
      </main>
    </>
  );
};

export default Main;
