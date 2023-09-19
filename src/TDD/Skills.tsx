import {useState} from "react";

type Props = {
    skills: string[]
}
export function Skills({skills}: Props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>
            {isLoggedIn
                ? (<button>Start Learning</button>)
                : <button onClick={() => setIsLoggedIn(true)}>Login</button>
            }
        </>
    );
}