import {useDisclosure} from '@mantine/hooks';
import { AppShell}     from '@mantine/core';
import Navbar          from './components/NavBar';
import Header          from './components/Header';
import RouterSwitcher  from './components/RouterSwitcher';
import './App.css';

function App() {
  const [opened, {toggle}] = useDisclosure();
  return (
    <div className="App" style={{marginTop: '20px'}}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ 
                  width: 300, 
                  breakpoint: 'sm', 
                  collapsed: {mobile: !opened}
               }}
        padding="md"
      >
        <Header 
          toggle={toggle} 
          opened={opened}
        />
        <Navbar />
        <AppShell.Main>
          <RouterSwitcher />
        </AppShell.Main>
      </AppShell>
    </div>
  );
}

export default App;