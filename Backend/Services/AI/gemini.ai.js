
import farmingAdviceSchema from './farming.report.schema.js';
import generateReport  from '../../config/generateReport.js';
const generateFarmingPrediction = async ({ crop, season, problem,state, soilType, irrigationMethod }) => {
    try {
        const prompt = `
You are an experienced agricultural expert specializing in sustainable farming, organic agriculture, and environmentally friendly crop management.

Your task is to analyze the farmer's situation and generate personalized, practical, and sustainable farming recommendations.

Farmer Details:

- Crop: ${crop}
- Season: ${season}
- Farming Problem: ${problem}
- State/Region: ${state}
- Soil Type: ${soilType}
- Irrigation Method: ${irrigationMethod}

Instructions:

1. Analyze the provided farming details carefully.
2. Generate recommendations that are suitable for the specified crop, season, soil type, irrigation method, and farming problem.
3. Prioritize sustainable and eco-friendly farming practices.
4. Recommend organic fertilizers before suggesting chemical alternatives.
5. Suggest water conservation methods whenever applicable.
6. Recommend environmentally friendly pest and disease management techniques.
7. Provide practical preventive measures to avoid similar issues in the future.
8. Explain the environmental benefits of following the recommendations.
9. Assign a sustainability score between 0 and 100.
10. Assign a priority level:
   - low
   - medium
   - high
11. Estimate the crop recovery time based on the given farming problem.
12. The response should be easy for farmers to understand using simple language.
13. If any input is insufficient, make reasonable assumptions instead of refusing to answer.
14. Do not include markdown, code blocks, extra explanations, or text outside the JSON response.

Return ONLY a valid JSON object that strictly follows the provided schema.
`
        const response = await generateReport({prompt,reportSchema: farmingAdviceSchema});
        console.log(response)
        return response;
    } catch (error) {
        console.error("Error generating farming prediction:", error);
        throw error;
    }
}

export default generateFarmingPrediction;