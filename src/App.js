import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./components/Box";
import { addBox } from "./redux/actions/boxActions";
import { RESET_BOX } from "./redux/constants/boxConstants";

function App() {
  const dispatch = useDispatch();
  const boxState = useSelector((state) => state.boxState);
  const { mainBoxes } = boxState;
  return (
    <div className="App">
      <div className="box_form">
        <h2>Generate boxes</h2>
        <div className="box_form_input">
          <label>number of boxes</label>
          <input type="number" />
        </div>
        <div className="box_form_input">
          <label>box in box number</label>
          <input type="number" />
        </div>
        <button
          className=""
          onClick={() =>
            dispatch({
              type: RESET_BOX,
            })
          }
        >
          Reset All
        </button>
      </div>
      <button
        className=""
        onClick={() =>
          dispatch(
            addBox({
              id: Math.floor(Math.random() * 100000000),
            })
          )
        }
      >
        add Box
      </button>
      <div className="main_boxes">
        {mainBoxes.length > 0 ? (
          mainBoxes.map((box) => <Box key={box.id} identifier={box.id} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
