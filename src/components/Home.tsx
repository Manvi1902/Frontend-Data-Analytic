import React from 'react';  
import { Container, Text, Title, Flex,Image } from '@mantine/core';  

const Home: React.FC = () => {  
  return (  
    <Container size="lg" style={{ padding: '2rem 0' }} c="#495057">  
      <Flex direction="column" justify="center">  
          <Text size="md" mt="lg" fw={700} style={{ fontSize: '2rem',textAlign:"center" }}  c="#22b8cf">  
            About Crop Data Analysis  
          </Text>  
        <Flex align="center">  
          <Image   
            src="./crop-logo.jpg"  
            alt="Logo"  
            width="400px" 
            height="250px"
            mt="sm" 
            
          />   
            <Text size="md" mb="1.5rem" c="#495057">  
                Welcome to the <strong>Crop Analysis Platform</strong>, where we provide in-depth insights into agricultural trends and metrics through meticulous data analysis. Our mission is to equip farmers, researchers, policymakers, and agricultural enthusiasts with accurate, relevant data to make informed decisions that enhance crop productivity and sustainability.  
            </Text>  
        </Flex> 
        

        {/* What We Offer Section */}  
        <Title order={3} mb="1rem"  c="#22b8cf" >  
          What We Offer:  
        </Title>  
        <Text size="md" mb="1rem">  
          - <strong>Detailed Yield Reports:</strong> Examine year-wise average yields, identifying trends and patterns that can inform cultivation practices.  
        </Text>  
        <Text size="md" mb="1rem">  
          - <strong>Cultivation Area Insights:</strong> Understand historical changes in the average cultivation area for various crops between 1950 and 2020, helping stakeholders recognize shifts in agricultural priorities.  
        </Text>  
        <Text size="md" mb="1rem">  
          - <strong>Visual Data Representations:</strong> Access interactive charts and graphs that bring clarity to complex data, making it easy to track changes and forecasts.  
        </Text>  
        <Text size="md" mb="1rem">  
          - <strong>Research Support:</strong> Leverage our extensive database and analytical tools for academic research, policy formulation, and strategic planning in agriculture.  
        </Text>  
        <Text size="md" mb="1rem">  
          - <strong>Community Collaboration:</strong> Join our platform to connect with fellow agriculturalists, share insights, and collaborate on innovative farming solutions.  
        </Text>  

        {/* Why Choose Us Section */}  
        <Title order={3} mb="1rem" c="#22b8cf" >  
          Why Choose Us?  
        </Title>  
        <Text size="md" mb="1.5rem" >  
          At <strong>Crop Analysis Platform</strong>, we harness the power of data analytics to improve the agricultural landscape. By utilizing cutting-edge technology and robust methodologies, we ensure that our users have the most accurate and actionable insights available. Whether you’re a seasoned farmer or an enthusiastic newcomer to agriculture, our platform is designed to support and enhance your journey.  
        </Text>  

      </Flex>  
    </Container>  
  );  
};  

export default Home;