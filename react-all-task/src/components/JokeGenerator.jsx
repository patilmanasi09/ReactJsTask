import React, { useEffect, useState } from "react";

export default function JokeApp() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      const data = await response.json();

      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.log("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Random Joke Generator</h2>

      <p>{joke}</p>

      <button className="btn btn-primary" onClick={fetchJoke}>
        Get New Joke
      </button>
    </div>
  );
}