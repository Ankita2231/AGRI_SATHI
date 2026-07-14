import generateFarmingPrediction from "../Services/AI/gemini.ai.js"

const generateFarmingPredictionController = (req, res) => {
  // Extract input data from the request body
  const { crop, season, problem,state, soilType, irrigationMethod } = req.body;
  console.log(crop,season,problem,state,soilType,irrigationMethod);
  try {
    // Call the generateFarmingPrediction function with the input data
    const prediction = generateFarmingPrediction({ crop, season, problem,state, soilType, irrigationMethod });
    console.log("predictionp",prediction);
    return res.status(200).json({ prediction });
  } catch (error) {
    console.error("Error in controller:", error);
    return res.status(500).json({ error: "Internal server error while generating prediction" });
  }

}

export { generateFarmingPredictionController };