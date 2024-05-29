import { useState } from "react";
import "./App.css";
import People from "./components/People";

const listOfPeople = [
  {
    id: 1,
    name: "Oscar Eduardo",
    role: "Frontend Developer",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Carolina",
    role: "Backend Developer",
    img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Catalina",
    role: "UI/UX Designer",
    img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
];

function App() {
  const [people, setPeople] = useState(listOfPeople);

  return (
    <div className="app">
      <div className="container">
        <People people={people} setPeople={setPeople} />
      </div>
    </div>
  );
}

export default App;
