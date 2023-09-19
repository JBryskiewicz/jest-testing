import React from 'react';
import './App.css';
import {Application} from "./TDD/Application";
import {Skills} from "./TDD/Skills";

export const SKILLS: string[] = ['java', 'javaScript', 'C', 'rust', 'python',];

function App() {
    return (
        <div className="App">
            <Application/>
            <Skills skills={SKILLS}/>
        </div>
    );
}

export default App;
