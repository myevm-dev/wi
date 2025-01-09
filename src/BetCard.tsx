import React from "react";

interface BetCardProps {
  balance: number;
  payout: number;  // New prop to display the dynamic payout
}

export const BetCard: React.FC<BetCardProps> = ({ balance, payout }) => {
  return (
    <div className="w-[800px] h-[120px] bg-black border-4 border-purple-500 rounded-lg shadow-md flex items-center justify-center flex-col">
      <h1 className="text-white text-xl mb-4">Bet Card</h1>
      <div className="text-white text-2xl mb-4">Balance: ${balance}</div>

    </div>
  );
};
