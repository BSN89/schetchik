import './App.css';
import {Input} from "./ui/components/Input";
import {Button} from "./ui/components/Button";
import {CounterTitle} from "./ui/components/CounterTitle/CounterTitle";
import React from "react";
import {Setting} from "./ui/components/Setting";
import {IncBlock} from "./ui/components/IncBlock/IncBlock";


function App() {

    return (

        <div>

            <div className='App'>
                <Setting/>
            </div>

            <div className='App'>
                    <IncBlock/>
            </div>

        </div>

    );
}

export default App

