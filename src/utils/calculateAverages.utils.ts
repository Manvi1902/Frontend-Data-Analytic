import { Dataset } from "../types/Dataset.types.ts";

export const calculateAverages = (data: Dataset[]) => {
  const result: { crop: string; avgYield: number; avgArea: number }[] = [];

  const groupedByCrop = data.reduce((acc: Record<string, Dataset[]>, item) => {
    const crop = item["Crop Name"];
    if (!acc[crop]) acc[crop] = [];
    acc[crop].push(item);
    return acc;
  }, {});

  for (const crop in groupedByCrop) {
    const crops = groupedByCrop[crop];
    const avgYield =
      crops.reduce(
        (sum, curr) =>
          sum + (Number(curr["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0),
        0
      ) / crops.length;

    const avgArea =
      crops.reduce(
        (sum, curr) =>
          sum + (Number(curr["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0),
        0
      ) / crops.length;

    result.push({
      crop,
      avgYield: Math.round(avgYield),
      avgArea: Math.round(avgArea),
    });
  }

  return result;
};
