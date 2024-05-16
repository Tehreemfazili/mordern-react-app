import Header from './Components/Header/Header.jsx';
import DrawerLeft from './Components/Drawer/Drawer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='app-main'>
         <div className='app-sidebar'>
          <DrawerLeft />
         </div>
         <div className='app-main-content'>
         </div>
      </div>
    </div>
  );
}

export default App;
