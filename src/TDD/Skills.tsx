import {useEffect, useState} from "react";

type Props = {
    skills: string[]
}
export function Skills({skills}: Props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 500);
    }, []);

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