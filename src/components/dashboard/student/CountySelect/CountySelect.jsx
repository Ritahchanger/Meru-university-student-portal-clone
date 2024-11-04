import React, { useState } from "react";
import Downshift from "downshift";

const kenyanCounties = [
  "Baringo",
  "Bomet",
  "Bungoma",
  "Busia",
  "Elgeyo-Marakwet",
  "Embu",
  "Garissa",
  "Homa Bay",
  "Isiolo",
  "Kajiado",
  "Kakamega",
  "Kericho",
  "Kiambu",
  "Kilifi",
  "Kirinyaga",
  "Kisii",
  "Kisumu",
  "Kitui",
  "Kwale",
  "Laikipia",
  "Lamu",
  "Machakos",
  "Makueni",
  "Mandera",
  "Meru",
  "Migori",
  "Marsabit",
  "Mombasa",
  "Murang'a",
  "Nairobi",
  "Nakuru",
  "Nandi",
  "Narok",
  "Nyamira",
  "Nyandarua",
  "Nyeri",
  "Samburu",
  "Siaya",
  "Taita-Taveta",
  "Tana River",
  "Tharaka-Nithi",
  "Trans Nzoia",
  "Turkana",
  "Uasin Gishu",
  "Vihiga",
  "Wajir",
  "West Pokot",
];

const CountySelect = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (selectedCounty) => {
    if (selectedCounty) {
      //   alert(`You selected ${selectedCounty}`);
    }
  };

  const handleInputValueChange = (value) => {
    setInputValue(value || "");
  };

  const filteredCounties = kenyanCounties.filter((county) =>
    county.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Downshift
      onChange={handleChange}
      onInputValueChange={handleInputValueChange}
      itemToString={(item) => (item ? item : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem,
      }) => (
        <div style={{ position: "relative", width: "100%" }}>
          <input
            {...getInputProps({ placeholder: "Search county..." })}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            className="focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <ul
            {...getMenuProps()}
            style={{
              position: "absolute",
              width: "100%",
              margin: 0,
              padding: 0,
              listStyle: "none",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderTop: "none",
              maxHeight: "150px",
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            {isOpen &&
              filteredCounties.map((county, index) => (
                <li
                  {...getItemProps({ item: county })}
                  key={county}
                  style={{
                    padding: "8px",
                    backgroundColor:
                      highlightedIndex === index ? "#bde4ff" : "white",
                    fontWeight: selectedItem === county ? "bold" : "normal",
                    cursor: "pointer",
                  }}
                >
                  {county}
                </li>
              ))}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

export default CountySelect;
