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
      <div className='app-main'>
         <div className='app-sidebar'>
          <DrawerLeft />
         </div>
         <div className='app-main-content'>
            <RetailerPage/>
         </div>
      </div>
    </div>
    </ThemeProvider>
   
  );
}

export default App;
