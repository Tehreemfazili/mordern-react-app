import Header from './Components/Header/Header.jsx';
import DrawerLeft from './Components/Drawer/Drawer.jsx';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { theme } from './CustomTheme/ModernAppTheme.tsx';
import './App.scss'
import '../src/styles/base/base.scss'
import '../src/styles/buttons/buttons.scss'
import DrawerRoutes from './Components/Drawer/DrawerRoutes.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <BrowserRouter>
        <div className='app-main'>
          <div className='app-main-sidebar'>
            <DrawerLeft/>
          </div>
          <div className='app-main-content'>
            <DrawerRoutes/>
          </div>
        </div>
      </BrowserRouter>
         
    </div>
    </ThemeProvider>
   
  );
}

export default App;
