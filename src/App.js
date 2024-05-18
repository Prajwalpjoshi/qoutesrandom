import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuotes(data.content);
      setAuthor(data.author);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h1>{quotes}</h1>
        <p>{author}</p>
        <button onClick={getAdvice}>Get Quotes</button>
        <Message count={count} />
      </div>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <span>{props.count}</span> pieces of advice.
    </p>
  );
}

export default App; 