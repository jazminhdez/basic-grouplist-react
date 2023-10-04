import ListGroup from "./components/ListGroup";
import "./App.css";

const cities = ["New York", "San francisco", "Tokyo", "London", "Paris"];
let handlerOnSelectItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      <ListGroup
        items={cities}
        heading={"Cities"}
        onSelectItem={handlerOnSelectItem}
      />
    </div>
  );
}

export default App;
