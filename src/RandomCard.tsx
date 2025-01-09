import React, { useState } from "react";
import { calculatePayout } from "./probability"; // Import the utility

interface RandomCardProps {
  position: "over" | "under";
  setPosition: React.Dispatch<React.SetStateAction<"over" | "under">>;
}

export const RandomCard: React.FC<RandomCardProps> = ({ position, setPosition }) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value set to 50
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 101)); // Placeholder random number between 0 and 100

  // Calculate payout using the utility function
  const payout = calculatePayout(sliderValue, position);

  // Handle the slider value change with constraints
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);

    // Block 0 and 100 values
    if (value === 0) {
      value = 1; // set to 1 to avoid selecting 0
    } else if (value === 100) {
      value = 99; // set to 99 to avoid selecting 100
    }

    // If "under" is selected, make sure the value doesn't exceed 95
    if (position === "under" && value > 95) {
      value = 95;
    }

    // If "over" is selected, make sure the value doesn't go below 5
    if (position === "over" && value < 5) {
      value = 5;
    }

    setSliderValue(value);
  };

  // Calculate the slider background depending on position
  const sliderBackground = position === "over"
    ? `linear-gradient(to right, white ${sliderValue}%, purple ${sliderValue}%)`
    : `linear-gradient(to right, purple ${sliderValue}%, white ${sliderValue}%)`;

  return (
    <div
      className={`w-[800px] h-[420px] bg-black border-4 border-purple-500 rounded-lg shadow-md flex flex-col items-center justify-between transition-all duration-300`}
    >
      <div className="flex flex-col items-center justify-center text-white flex-grow">

        {/* Display the large random number */}
        <div className="text-white text-8xl mt-6">{randomNumber}</div>
      </div>

      {/* Range Slider */}
      <div className="w-[90%] mt-6 mb-4 relative">
        <input
          id="slider"
          type="range"
          min="1"  // Change minimum to 1
          max="99"  // Change maximum to 99
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 appearance-none rounded-lg"
          style={{
            background: sliderBackground, // Apply dynamic background
          }}
        />
        {/* Display the selected number with a larger font size */}
        <div className="text-white text-center text-3xl mt-2">{sliderValue}</div>
      </div>

      {/* Button Container at the Bottom of the Card */}
      <div className="flex gap-4 ml-4 mb-4 w-full">
        <button
          className={`${
            position === "under"
              ? "bg-purple-500 text-black"
              : "bg-black text-white border-4 border-purple-500"
          } p-2 rounded w-[48%]`}
          onClick={() => setPosition("under")}
        >
          Under
        </button>
        <button
          className={`${
            position === "over"
              ? "bg-purple-500 text-black"
              : "bg-black text-white border-4 border-purple-500"
          } p-2 rounded w-[48%]`}
          onClick={() => setPosition("over")}
        >
          Over
        </button>
      </div>

      {/* Display Payout */}
      <div className="text-white text-2xl mt-4">
        1 to win {payout.toFixed(2)}
      </div>
    </div>
  );
};
