const url = "http://localhost:3000/bilr";
fetch(url)
  .then((result) => result.json())
  .then((bilr) => console.log(bilr));

const manufacturers = [
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Ford",
  "Honda",
  "Jaguar",
  "Jeep",
  "Lamborghini",
  "Land Rover",
  "Maybach",
  "McLaren",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Rolls-Royce",
  "Saab",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "W Motors",
];

const selectManufacturers = document.getElementById("mfr");

manufacturers.forEach((manufacturer) => {
  const option = document.createElement("option");
  option.value = manufacturer.toUpperCase();
  option.text = manufacturer;
  selectManufacturers.appendChild(option);
});
