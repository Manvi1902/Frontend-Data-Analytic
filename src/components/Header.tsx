import { useMediaQuery } from '@mantine/hooks';
import { 
        Flex, 
        Burger,
        Text, 
        AppShell,
        Image
      } from '@mantine/core';

const Header = ({toggle, opened}: any) => {

  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <AppShell.Header 
      style={{ 
          height:"120px", 
          backgroundColor:"white", 
          borderBottom:"2px solid", 
          borderBottomColor:"lightgray",
          
      }}
    >
      <Flex 
          justify="space-between" 
          align="center" 
          style={{ 
            padding: '10px 20px' 
          }}
      >
       <Burger 
            opened={opened} 
            onClick={toggle} 
            hiddenFrom="sm" 
            size="sm"
        />
          
        <Flex align="center">  
          <Image   
            src="./crop-logo.jpg"  
            alt="Logo"  
            width={isSmallScreen ? 60 :100} 
            height={isSmallScreen ? 60 :80}
            mt="sm" 
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />   
          <Text   
            mt="sm"  
            p="md"  
            fw={600}  
            tt="uppercase"    
            size={isSmallScreen ? '30px' : '36px'} 
            variant="gradient"
            gradient={{ from: 'cyan', to: 'lime', deg: 90 }} 
          >  
            Crop Metrics Analysis Dashboard   
          </Text>  
        </Flex>  
      </Flex>
    </AppShell.Header>
  );
};

export default Header;