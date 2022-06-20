import Header from "./components/Header";
import Input from "./components/Input";
import OutputBox from "./components/OutputBox";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Input />
        <section>
          {[1, 2, 3, 4].map((num) => {
            return <OutputBox key={num} />;
          })}
        </section>
      </main>
    </>
  );
};

export default App;
