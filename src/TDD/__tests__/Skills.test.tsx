import {Skills} from "../Skills";
import {render, screen} from "@testing-library/react";
import {SKILLS} from "../../App";
import exp from "node:constants";

describe('Skills', () => {
    it('should render component correctly', () => {
       render(<Skills skills={SKILLS}/>);

       const listElement = screen.getByRole('list');
       expect(listElement).toBeInTheDocument();
    });

    it('should render list of skills', () => {
        render(<Skills skills={SKILLS}/>)

        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(SKILLS.length);
    });

    it('should render login button', () => {
        render(<Skills skills={SKILLS}/>);

        const loginButton = screen.getByRole('button', {
            name: 'Login',
        });
        expect(loginButton).toBeInTheDocument();
    });

    it('should not render start learning button', () => {
        render(<Skills skills={SKILLS}/>)

        const learningButton = screen.queryByRole('button', {
            name: 'Start Learning',
        });
        expect(learningButton).not.toBeInTheDocument();
    });
});