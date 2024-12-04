import { Dataset } from "../types/Dataset.types.ts";  

/**  
 * Calculates the average yield and average area under cultivation for each crop.  
 *   
 * @param data - An array of Dataset objects containing crop data.  
 * @returns An array of objects, each containing the crop name,  
 *          average yield, and average area under cultivation.  
 */ 
 
export const calculateAverages = (data: Dataset[]) => {  
  
  // Initialize an array to hold the result of the average calculations  
  const result: { crop: string; avgYield: number; avgArea: number }[] = [];  

  // Group the data by crop name  
  const groupedByCrop = data.reduce((acc: Record<string, Dataset[]>, item) => {  
    const crop = item["Crop Name"]; // Get the crop name from the current item  
    // If the crop doesn't exist in the accumulator, initialize it as an empty array  
    if (!acc[crop]) acc[crop] = [];  
    // Push the current item into the correct crop array  
    acc[crop].push(item);  
    return acc; // Return the grouped data  
  }, {});  

  // Iterate over each crop group to calculate average yield and area  
  for (const crop in groupedByCrop) {  
    const crops = groupedByCrop[crop]; // Get the array of datasets for the current crop  

    // Calculate average yield  
    const avgYield =  
      crops.reduce(  
        (sum, curr) =>  
          sum + (Number(curr["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0), // Sum yields; fallback to 0 if undefined  
        0  
      ) / crops.length; // Divide by the number of records to get the average  

    // Calculate average area under cultivation  
    const avgArea =  
      crops.reduce(  
        (sum, curr) =>  
          sum + (Number(curr["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0), // Sum area; fallback to 0 if undefined  
        0  
      ) / crops.length; // Divide by the number of records to get the average  

    // Push the results for the current crop into the result array  
    result.push({  
      crop,  
      avgYield: Math.round(avgYield),    // Round the average yield to the nearest whole number  
      avgArea: Math.round(avgArea),      // Round the average area to the nearest whole number  
    });  
  }  

  return result; // Return the final array of averages  
};