import React, { useState } from "react";
import { RandomCard } from "./RandomCard";
import { BetCard } from "./BetCard";
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";

export function App() {
  const [position, setPosition] = useState<"over" | "under">("over");

  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-10">
      <div className="flex flex-col items-center gap-4">
        {/* Position is passed down to RandomCard */}
        <RandomCard position={position} setPosition={setPosition} />
        <BetCard />
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
