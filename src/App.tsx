import React from 'react';
import './App.css';
import {Skills} from "./TDD/Skills";
import {AppProviders} from "./TDD/AppProviders";
import {MuiMode} from "./TDD/MuiMode";

export const SKILLS: string[] = ['java', 'javaScript', 'C', 'rust', 'python',];

function App() {
    return (
        <AppProviders>
            <div className="App">
                <MuiMode/>
                <Skills skills={SKILLS}/>
            </div>
        </AppProviders>
    );
}

export default App;
