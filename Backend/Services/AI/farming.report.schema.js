import { z } from "zod";

const farmingAdviceSchema = z.object({
    success: z.boolean().describe("Whether the AI successfully generated sustainable farming recommendations."),

    message: z.string().nullable().describe("A user-friendly message explaining why recommendation generation failed, or null if successful."),

    summary: z.string().nullable().describe("A short summary of the farmer's situation based on the provided crop, season, and farming problem."),

    priorityLevel: z.enum(["low", "medium", "high"]).nullable().describe("The severity level of the reported farming problem."),

    estimatedRecoveryTime: z.string().nullable().describe("The estimated time required for the crop to recover after following the recommended practices."),

    organicFertilizers: z.array(
        z.string().describe("An organic fertilizer recommendation.")
    ).describe("A list of suitable organic fertilizers for the given crop and farming condition."),

    waterSavingMethods: z.array(
        z.string().describe("A water-saving recommendation.")
    ).describe("A list of water conservation methods suitable for the given crop and season."),

    pestManagement: z.array(
        z.string().describe("An eco-friendly pest management recommendation.")
    ).describe("A list of sustainable pest control methods for the reported farming problem."),

    sustainablePractices: z.array(
        z.string().describe("A sustainable farming practice.")
    ).describe("A list of environmentally friendly farming practices recommended for the farmer."),

    preventiveMeasures: z.array(
        z.string().describe("A preventive measure.")
    ).describe("A list of preventive measures to reduce the chances of similar farming problems in the future."),

    expectedBenefits: z.array(
        z.string().describe("An expected benefit.")
    ).describe("A list of benefits the farmer can expect after following the recommended practices."),

    dos: z.array(
        z.string().describe("A recommended action.")
    ).describe("A list of actions the farmer should follow."),

    donts: z.array(
        z.string().describe("An action the farmer should avoid.")
    ).describe("A list of actions the farmer should avoid."),

    sustainabilityScore: z.number().min(0).max(100).nullable().describe("An overall sustainability score ranging from 0 to 100 based on the recommended farming practices."),

    environmentalImpact: z.object({
        soilHealth: z.string().describe("Expected impact of the recommendations on soil health."),
        waterConservation: z.string().describe("Expected impact of the recommendations on water conservation."),
        chemicalReduction: z.string().describe("Expected reduction in the use of chemical fertilizers and pesticides."),
        biodiversity: z.string().describe("Expected impact of the recommendations on local biodiversity and ecosystem.")
    }).nullable().describe("The environmental benefits of following the recommended sustainable farming practices."),

    aiDisclaimer: z.string().nullable().describe("A disclaimer informing the user that the recommendations are AI-generated and should be verified with local agricultural experts when necessary.")
});

export default farmingAdviceSchema;