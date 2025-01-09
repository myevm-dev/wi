// utils/probability.ts
export const calculatePayout = (sliderValue: number, position: "over" | "under"): number => {
    let probability: number;
  
    // Calculate probability based on position and slider value
    if (position === "under") {
      // Probability of "under" position (slider value divided by 100)
      probability = sliderValue / 100;
    } else {
      // Probability of "over" position (slider value subtracted from 100, then divided by 100)
      probability = (100 - sliderValue) / 100;
    }
  
    // Return payout multiplier (1 / probability)
    // The payout is calculated by dividing 1 by the probability of that event happening
    return 1 / probability;
  };
  