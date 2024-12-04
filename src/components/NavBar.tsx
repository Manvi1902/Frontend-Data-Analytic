import { AppShell, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <AppShell.Navbar 
        p="lg" 
        mt="3.8rem" 
        style={{ 
            gap:'10px', 
            height:"100vh", 
            width:"300px", 
            borderRight:"2px solid", 
            borderRightColor:"lightgray",
            fontWeight:"bold"
        }}
  >
      <Button 
       component={Link} to="/" 
       variant="light" 
       color="green"
       size="xl"
       mt="lg"
       mb="sm"
      >
      Home   
      </Button>
      <Button 
       component={Link} to="/minmax" 
       variant="light" 
       color="green"
       size="xl"
       mb="sm"
      >
      Min/Max Crop Production    
      </Button>
      <Button 
       component={Link} to="/average" 
       variant="light" 
       color="green"
       size="xl"
       mb="sm"
      >
      Average Yeild Crop  
      </Button>
  </AppShell.Navbar>
  );
};

export default Navbar;