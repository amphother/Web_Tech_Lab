import React, { useState } from 'react';
import './App.css';

const vehiclesData = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    image: 'url_to_toyota_camry_image.jpg', // Replace with the actual image URL
    description:
      'The Toyota Camry is a stylish and reliable sedan known for its comfort and safety features.',
    price: '$25,000',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    image: 'url_to_honda_civic_image.jpg', // Replace with the actual image URL
    description:
      'The Honda Civic is a compact car with excellent fuel efficiency and a comfortable interior.',
    price: '$20,000',
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2020,
    image: 'url_to_ford_mustang_image.jpg', // Replace with the actual image URL
    description:
      'The Ford Mustang is a legendary sports car with powerful performance and iconic design.',
    price: '$30,000',
  },
  // Add more vehicles here
];

function CarInfo({ car }) {
  return (
    <div className="car-info">
      <h2>
        {car.make} {car.model}
      </h2>
      <p>Year: {car.year}</p>
      <p>Description: {car.description}</p>
      <p>Price: {car.price}</p>
    </div>
  );
}

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="App">
      <h1>Vehicle Catalog</h1>
      <div className="car-container">
        {vehiclesData.map((car) => (
          <div key={car.id} className="car-card">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              onClick={() => handleCarClick(car)}
            />
            <p>{car.make}</p>
          </div>
        ))}
      </div>
      <div className="car-details">
        {selectedCar && <CarInfo car={selectedCar} />}
      </div>
    </div>
  );
}

export default App;
