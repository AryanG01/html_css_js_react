import React from 'react';
import './App.css';
import HelloFunctional from './components/HelloFunctional';
import HelloClass from './components/HelloClass';

//named import should be in curly braces
import {HelloFunctionalES6} from './components/HelloFunctionalES6';
import Display from './components/Display';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <h2>Hello App Component</h2>
      <HelloFunctional></HelloFunctional> */}
      {/* <HelloFunctional></HelloFunctional>
      <HelloFunctional></HelloFunctional> */}
      {/* <HelloFunctional />
      <HelloClass name='TVSD' age='5' />
      <HelloClass name='TVSD' age='5' />
      <HelloFunctionalES6 />
      <Display firstName="Aryan" lastName="Nayra" age='199'>
        <p>Some text from Aryan</p>
      </Display><br />
      <Display firstName="Ayush" lastName="Hsuya" age='99  '>
        <input type="text" placeholder="Enter your name" />
      </Display> */}

      <Welcome name="Aryan" age="199"></Welcome>
    </div>
  );
}

export default App;
