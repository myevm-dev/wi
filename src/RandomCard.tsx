import React, { useState } from "react";

// Typing the position prop to only accept "over" or "under"
interface RandomCardProps {
  position: "over" | "under";
  setPosition: React.Dispatch<React.SetStateAction<"over" | "under">>;
}

export const RandomCard: React.FC<RandomCardProps> = ({ position, setPosition }) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value set to 50

  // Handle the slider value change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
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
        <h1 className="text-xl">Random Card</h1>

        {/* Placeholder for another component above the slider */}
        <div className="w-full mt-4">
          {/* This can be replaced with another component */}
          <div className="text-white">Another Component Goes Here</div>
        </div>
      </div>

      {/* Range Slider */}
      <div className="w-[90%] mt-6 mb-4 relative">
        <input
          id="slider"
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 appearance-none rounded-lg"
          style={{
            background: sliderBackground, // Apply dynamic background
          }}
        />
        <div className="text-white text-center">{sliderValue}</div>
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
    </div>
  );
};
