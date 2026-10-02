import listings from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Resort Listings</h1>

      <div className="resort-container">
        {listings.map((resort) => (
          <div className="resort-card" key={resort.id}>
            <img src={resort.pic} alt={resort.location} />

            <h2>{resort.location}</h2>

            <p>{resort.country}</p>

            <p>Rating: {resort.rating}</p>

            <p>${resort.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;