export interface Dataset {
    Country:                                          Country;
    Year:                                             string;
    "Crop Name":                                      CropName;
    "Crop Production (UOM:t(Tonnes))":                number | string;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number | string;
    "Area Under Cultivation (UOM:Ha(Hectares))":      number | string;
}

export enum Country {
    India = "India",
}

export enum CropName {
    CoarseCereals = "CoarseCereals",
    Coffee = "Coffee",
    CottonLint = "CottonLint",
    Groundnut = "Groundnut",
    Pulses = "Pulses",
    RapeseedMustard = "RapeseedMustard",
    RawJuteMesta = "RawJuteMesta",
    Rice = "Rice",
    Soyabean = "Soyabean",
    Sugarcane = "Sugarcane",
    Tea = "Tea",
    Tobacco = "Tobacco",
    Wheat = "Wheat",
}
