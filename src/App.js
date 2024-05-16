import Header from './Components/Header/Header.jsx';
import DrawerLeft from './Components/Drawer/Drawer.jsx';
import RetailerPage from './Pages/Retailer/Retailer.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './CustomTheme/ModernAppTheme.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <DrawerLeft />
      <RetailerPage/>
    </div>
    </ThemeProvider>
   
  );
}

export default App;
