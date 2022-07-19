import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import TextInput from "./TextInput";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<TextInput />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
