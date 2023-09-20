import { render, screen } from '@testing-library/react';
import {Counter} from "../Counter";
import user from "@testing-library/user-event";

describe('Counter', () => {
    it('should render correctly', function () {
        render(<Counter />);

        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', {
            name: 'Increment',
        });
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render a count of 0', function () {
        render(<Counter />);

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    });

    it('should render a count of 1 after clicking the increment button', async function () {
        render(<Counter />);

        const buttonElement = screen.getByRole('button', {
            name: 'Increment',
        });
        await user.click(buttonElement);

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1');
    });

    it('should render a count of 2 after clicking twice the increment button', async function () {
        render(<Counter />);

        const buttonElement = screen.getByRole('button', {
            name: 'Increment',
        });
        for(let i=0; i<2; i++){
            await user.click(buttonElement);
        }

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('2');
    });
});