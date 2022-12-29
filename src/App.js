import { useDispatch, useSelector } from "react-redux";
import { changeName, dataChange } from "./store/reducer";

function App() {
  const name = useSelector((state) => state.test.data);
  console.log(name);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="App" onClick={() => dispatch(dataChange("updated"))}>
        clean
      </div>
    </div>
  );
}

export default App;
