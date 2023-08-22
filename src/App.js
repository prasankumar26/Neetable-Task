import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PasswordGenerator from './PasswordGenerator';
import StarRating from './StarRating';
import MakeMyTrip from './makemytrip';
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import TrafficLight from "./TrafficLight";
import Todo from "./todo";
import Debounce from "./debounce";

function App() {
  return (
    <div className="container-fluid">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MakeMyTrip />} />
          <Route path="star-rating" element={<StarRating />} />
          <Route path="password-generator" element={<PasswordGenerator />} />
          <Route path="traffic-light" element={<TrafficLight />} />
          <Route path="todo" element={<Todo />} />
          <Route path="debounce" element={<Debounce />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;