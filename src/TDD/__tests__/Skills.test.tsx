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

    it('should render start button eventually', async () => {
        render(<Skills skills={SKILLS}/>);

        // Find by is default to 1000ms!!! If element takes longer to load it will fail
        // Example adds next argument that set this test to wait up to 2000ms for element to load
        const buttonElement = await screen.findByRole('button', {
                name: 'Start Learning',
            },
            {
                timeout: 2000,
            }
            );
        expect(buttonElement).toBeInTheDocument();
    });
});