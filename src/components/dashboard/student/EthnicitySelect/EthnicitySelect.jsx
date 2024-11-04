import React, { useState } from "react";
import Downshift from "downshift";

const kenyanCommunities = [
  "Kikuyu",
  "Luo",
  "Luhya",
  "Kalenjin",
  "Kamba",
  "Meru",
  "Maasai",
  "Somali",
  "Turkana",
  "Embu",
  "Kisii",
  "Mijikenda",
  "Taita",
  "Pokot",
  "Samburu",
  "Teso",
  "Kurya",
  "Bajuni",
  "Swahili",
  "Orma",
];

const EthnicitySelect = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (selectedCommunity) => {
    if (selectedCommunity) {
      //   alert(`You selected ${selectedCommunity}`);
    }
  };

  const handleInputValueChange = (value) => {
    setInputValue(value || "");
  };

  const filteredCommunities = kenyanCommunities.filter((community) =>
    community.toLowerCase().includes(inputValue.toLowerCase())
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
            {...getInputProps({ placeholder: "Search community..." })}
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
              filteredCommunities.map((community, index) => (
                <li
                  {...getItemProps({ item: community })}
                  key={community}
                  style={{
                    padding: "8px",
                    backgroundColor:
                      highlightedIndex === index ? "#bde4ff" : "white",
                    fontWeight: selectedItem === community ? "bold" : "normal",
                    cursor: "pointer",
                  }}
                >
                  {community}
                </li>
              ))}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

export default EthnicitySelect;
