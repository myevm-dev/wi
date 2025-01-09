import React, { useState } from "react";
import { RandomCard } from "./RandomCard";
import { BetCard } from "./BetCard";
import { calculatePayout } from "./probability";  // Import the utility
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";

export function App() {
  const [position, setPosition] = useState<"over" | "under">("over");
  const [sliderValue, setSliderValue] = useState(50);
  const [balance, setBalance] = useState(100);  // Initial balance

  // Update slider value dynamically and recalculate payout
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  // Calculate the payout based on slider value and position
  const payout = calculatePayout(sliderValue, position);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-10">
      <div className="flex flex-col items-center gap-4">
        <RandomCard position={position} setPosition={setPosition} />
        <BetCard balance={balance} payout={payout} />
      </div>
      <div className="mt-auto">
        <ConnectButton
          client={client}
          appMetadata={{
            name: "Example app",
            url: "https://example.com",
          }}
        />
      </div>
    </main>
  );
}
