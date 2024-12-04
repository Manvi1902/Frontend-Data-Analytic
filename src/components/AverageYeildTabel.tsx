import React,{useEffect,useState}  from "react";
import { useMediaQuery }           from '@mantine/hooks';  
import {Container, Table, Text }   from "@mantine/core";
import { Dataset }                 from "../types/Dataset.types.ts";

const AverageYeildTable: React.FC = () => {

  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const [data, setData] = useState<Dataset[]>([]);

  // Fetch the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/cropDataset.json"); // Replace with the correct path
        const jsonData: Dataset[] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate average yield and average area
  const calculateAverages = () => {
    const averages: {
      crop: string;
      avgYield: number;
      avgArea: number;
    }[] = [];

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
          (sum, curr) => sum + (Number(curr["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0),
          0
        ) / crops.length;

      const avgArea =
        crops.reduce(
          (sum, curr) => sum + (Number(curr["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0),
          0
        ) / crops.length;

      averages.push({
        crop,
        avgYield: Math.round(avgYield),
        avgArea: Math.round(avgArea),
      });
    }
    return averages;
  };

  const averages = calculateAverages();

  // Render table rows
  const rows = averages.map((row) => (
    <Table.Tr key={row.crop}>
      <Table.Td>
          {row.crop}
      </Table.Td>
      <Table.Td>{row.avgYield}</Table.Td>
      <Table.Td>{row.avgArea}</Table.Td>
    </Table.Tr>
  ));

  return (
  <>
  <Container   >
        <Text 
            ml="1rem"
            mt="4rem"
            mb="1rem"
            fw={500}
            tt="capitalize"
            c="#0b7285"
            style={{
              textAlign:"left",
              lineHeight:"3rem",
              letterSpacing:"1px"
            }}
            size={isSmallScreen ? '25px' : '30px'}
        >
          Analyzing Crop Yields and <br/> Cultivation Areas: 1950-2020
        </Text>

        <Table.ScrollContainer minWidth={400} className="tabel-2">
            <Table 
              verticalSpacing="lg"
              horizontalSpacing="md"
              highlightOnHover
              highlightOnHoverColor="lightyellow"
              striped
              stripedColor="#f8f9fa" 
              withColumnBorders
              withRowBorders
              borderColor="#868e96"
              bgcolor="#c5f6fa"
              mr="2rem"
            >
              <Table.Thead >
                  <Table.Tr>
                        <Table.Th style={{ width: '60px',textAlign: 'center' }} >
                          Crop Name
                        </Table.Th>
                        <Table.Th style={{ width: '160px',textAlign: 'center' }} >
                          Average Yield of the Crop between 1950-2020
                        </Table.Th>
                        <Table.Th style={{ width: '160px',textAlign: 'center' }} >
                          Average Cultivation Area  of the Crop between 1950-2020 
                        </Table.Th>
                  </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {rows}
              </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  </Container>
  </>
   
  );
};

export default AverageYeildTable;
