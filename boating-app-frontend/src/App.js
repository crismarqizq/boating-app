import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className='mt-10'>This is the App component. NavBar, and menu will be placed here</div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
