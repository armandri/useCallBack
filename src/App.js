import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./list";

function App() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems =  useCallback((inc) => { // inc is Parameter
        return [number+inc, number+1+inc, number+2+inc, number+3+inc, "+"+inc];
    }, [number])

    // in useCallBack, we want return functional type (it has all the features of the function)
    // in useMemo, we want return value type

    return (
        <div className="App" >
            <header className="App-header" style={{backgroundColor: dark ? 'black' : "#282c34"}}>
                <img src={logo} className="App-logo" alt="logo"/>
                <pre>
                     test code by arman,
                     this part is useCallBack
                </pre>
                <div>
                    <input placeholder="0" onChange={(e) => setNumber(parseInt(e.target.value))}/>
                    <button onClick={() => setDark(pre => !pre)}>change light</button>
                </div>
            <List getItems={getItems}/>
            </header>
        </div>
    );
}

export default App;
