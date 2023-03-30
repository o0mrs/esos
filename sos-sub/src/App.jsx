

import {Routes,Route} from "react-router-dom";
import Data from "./com/data";
import Home from "./com/home";
import Mo from "./com/mo";
function App() {

  return (
<Routes>
  {/* <GetChat */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/mo" element={<Mo />}></Route>
      <Route path="/data" element={<Data />}></Route>
      </Routes>
  );
}

export default App;