import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button, Switch } from 'antd'
import MenuLayout from './menu/index'

const App: React.FC = () => {
  return (
    <MenuLayout/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <Button type='primary'>click me oh !</Button>
    //   <Button type='link' size='large' block={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis saepe ipsam natus voluptas expedita alias nisi velit placeat nihil facilis harum doloremque mollitia suscipit, nesciunt laborum consequuntur delectus ex!</Button>
    //   <Switch>开关~</Switch>
    // </div>
  );
}

export default App;
