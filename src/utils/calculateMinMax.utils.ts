import { Dataset } from "../types/Dataset.types.ts";

export const calculateMinMax = (data: Dataset[]) => {
  const result: { Year: string; maxCrop: string; minCrop: string }[] = [];

  // Process the data to extract only the year from the "Year" field
  const processedData = data.map((item) => ({
    ...item,
    Year: item.Year.replace(/Financial Year \(.*\), /, ""), // Remove "Financial Year (Apr - Mar), " and retain the year
  }));

  
  // Group by year
  const groupedByYear = processedData.reduce(
    (acc: Record<string, Dataset[]>, item) => {
      const year = item.Year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(item);
      return acc;
    },
    {}
  );

  // Calculate min and max crop production for each year
  for (const year in groupedByYear) {
    const crops = groupedByYear[year];
    const validCrops = crops.filter(
      (crop) =>
        crop["Crop Production (UOM:t(Tonnes))"] !== "" &&
        !isNaN(Number(crop["Crop Production (UOM:t(Tonnes))"]))
    );

    const maxCrop = validCrops.reduce((prev, curr) =>
      Number(curr["Crop Production (UOM:t(Tonnes))"]) >
      Number(prev["Crop Production (UOM:t(Tonnes))"])
        ? curr
        : prev
    );

    const minCrop = validCrops.reduce((prev, curr) =>
      Number(curr["Crop Production (UOM:t(Tonnes))"]) <
      Number(prev["Crop Production (UOM:t(Tonnes))"])
        ? curr
        : prev
    );

    result.push({
      Year: year,
      maxCrop: maxCrop["Crop Name"] || "N/A",
      minCrop: minCrop["Crop Name"] || "N/A",
    });
  }

  return result;
};
