import { Dataset } from "../types/Dataset.types.ts";  

/**  
 * Calculates the crops with the maximum and minimum production for each year.  
 *   
 * @param data - An array of Dataset objects containing crop production data.  
 * @returns An array of objects, each containing the year, the crop with maximum production,  
 *          and the crop with minimum production.  
 */  
export const calculateMinMax = (data: Dataset[]) => {  
  // Initialize an array to hold the result for each year's crops.  
  const result: { Year: string; maxCrop: string; minCrop: string }[] = [];  

  // Process the data to extract the year, removing "Financial Year (Apr - Mar), "  
  const processedData = data.map((item) => ({  
    ...item,  
    // Use regex to replace the financial year string and keep only the year  
    Year: item.Year.replace(/Financial Year \(.*\), /, ""),  
  }));  

  // Group the processed data by year  
  const groupedByYear = processedData.reduce(  
    (acc: Record<string, Dataset[]>, item) => {  
      const year = item.Year; // Get the year from the current item  
      // Initialize an array for the year if it doesn't already exist  
      if (!acc[year]) acc[year] = [];  
      // Add the current crop data to the appropriate year  
      acc[year].push(item);  
      return acc; // Return the grouped data  
    },  
    {}  
  );  

  // Calculate the crops with minimum and maximum production for each year  
  for (const year in groupedByYear) {  
    const crops = groupedByYear[year]; // Get all crops for the current year  
    // Filter out crops that have valid production values  
    const validCrops = crops.filter(  
      (crop) =>  
        crop["Crop Production (UOM:t(Tonnes))"] !== "" && // Ensure the production is not an empty string  
        !isNaN(Number(crop["Crop Production (UOM:t(Tonnes))"])) // Ensure the production is a valid number  
    );  

    // Calculate max crop by comparing crop production values  
    const maxCrop = validCrops.reduce((prev, curr) =>  
      Number(curr["Crop Production (UOM:t(Tonnes))"]) >  
      Number(prev["Crop Production (UOM:t(Tonnes))"])  
        ? curr // Choose current crop if it's greater  
        : prev  // Otherwise, keep the previous crop  
    );  

    // Calculate min crop by comparing crop production values  
    const minCrop = validCrops.reduce((prev, curr) =>  
      Number(curr["Crop Production (UOM:t(Tonnes))"]) <  
      Number(prev["Crop Production (UOM:t(Tonnes))"])  
        ? curr // Choose current crop if it's lesser  
        : prev  // Otherwise, keep the previous crop  
    );  

    // Push the results for the current year into the result array  
    result.push({  
      Year: year,  
      maxCrop: maxCrop["Crop Name"] || "N/A", // Set the max crop name, or "N/A" if not found  
      minCrop: minCrop["Crop Name"] || "N/A", // Set the min crop name, or "N/A" if not found  
    });  
  }  

  return result; // Return the final array containing max and min crops for each year  
};