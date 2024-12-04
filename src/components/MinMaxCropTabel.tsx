import React,{ useEffect, useState }  from "react";
import { useMediaQuery }              from "@mantine/hooks";  
import { Text, Table,Container}       from "@mantine/core"; 
import { calculateMinMax }            from "../utils/calculateMinMax.utils.ts"; 
import { Dataset }                    from "../types/Dataset.types"; 

const MinMaxCropTable: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const [data, setData] = useState<Dataset[]>([]); // Holds the raw crop data
  const [minMaxData, setMinMaxData] = useState<{ Year: string; maxCrop: string; minCrop: string }[]>([]); // Holds the calculated min-max data
  console.log(data);
  useEffect(() => {
    // Fetch crop data 
    const fetchData = async () => {
      try {
        const response = await fetch("/data/cropDataset.json"); 
        const jsonData: Dataset[] = await response.json(); // Parse the JSON data into Dataset type 
        setData(jsonData);
        setMinMaxData(calculateMinMax(jsonData)); // Calculate min-max data when the raw data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();// Call the fetchData function to initiate data fetching  
  }, []);

  
  // Render table rows
  const rows = minMaxData.map((row) => (
    <Table.Tr key={row.Year}>
      <Table.Td>{row.Year}</Table.Td>
      <Table.Td>{row.maxCrop}</Table.Td>
      <Table.Td>{row.minCrop}</Table.Td>
    </Table.Tr>
  ));

  return (
  <>
  <Container>
    <Text 
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
        Crop Production Insights:<br/> Year-wise Minimum and Maximum  
    </Text>
    <Table.ScrollContainer minWidth={500}>
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
          ml="0"
          mr="2rem"  
           
      >
          <Table.Thead  >
              <Table.Tr>
                    <Table.Th  style={{width:'50px',textAlign:'center'}}>
                         Year
                    </Table.Th>
                    <Table.Th  style={{width:'100px',textAlign:'center'}}> 
                        Crop with Maximum <br/> Production in that Year
                    </Table.Th>
                    <Table.Th  style={{ width:'100px',textAlign:'center'}}>
                        Crop with Minimum <br/> Production in that Year
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

export  default MinMaxCropTable;
