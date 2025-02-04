import { Route, Routes } from "react-router-dom";
import RomanticValentineProposal from "./RomanticProposal";
import JessyProposal from "./JessyProposal";

function App() {
  return (
    <Routes>
      <Route path="/moonshine" element={<RomanticValentineProposal />} />
      <Route path="/my-love" element={<JessyProposal />} />
    </Routes>
  );
}
export default App;
