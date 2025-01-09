// Function to calculate the payout multiplier based on selected under value
export function getPayoutMultiplier(selectedNumber: number, betValue: number) {
    const remainingRange = 100 - selectedNumber;
    const multiplier = betValue > remainingRange ? 1 : 1 + remainingRange / betValue;
  
    return multiplier;
  }
  