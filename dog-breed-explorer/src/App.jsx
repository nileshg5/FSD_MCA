import { useEffect, useState } from "react";
import axios from "axios";
import BreedCard from "/components/BreedCard";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dogapi.dog/api/v2/breeds")
      .then(res => {
        setBreeds(res.data.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-blue-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dog Breed Explorer</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {breeds.map(breed => (
          <BreedCard key={breed.id} breed={breed.attributes} />
        ))}
      </div>
    </div>
  );
}

export default App;
