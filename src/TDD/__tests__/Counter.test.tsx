import { render, screen } from '@testing-library/react';
import {Counter} from "../Counter";
import user from "@testing-library/user-event";

describe('Counter', () => {
    it('Counter`s elements should render correctly', function () {
        render(<Counter />);

        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', { name: 'Increment' });
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render a count of 0', function () {
        render(<Counter />);

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    });

    it('should render a count of 1 after clicking the increment button', async function () {
        render(<Counter />);

        const buttonElement = screen.getByRole('button', { name: 'Increment' });
        await user.click(buttonElement);

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1');
    });

    it('should render a count of 2 after clicking twice the increment button', async function () {
        render(<Counter />);

        const buttonElement = screen.getByRole('button', { name: 'Increment' });
        for(let i=0; i<2; i++){
            await user.click(buttonElement);
        }

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('2');
    });

    it('should render a count of 10 after clicking set button', async function () {
        render(<Counter/>);

        const amountInput = screen.getByRole('spinbutton');
        await user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);

        const setButton = screen.getByRole('button', { name: 'Set' });
        await user.click(setButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10');
    });

    // Example, keyboard user's interaction
    it('should focus on elements in right order', async function () {
        render(<Counter/>);
        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', { name: 'Set' });
        const incrementButton = screen.getByRole('button', { name: 'Increment' });

        await user.tab();
        expect(incrementButton).toHaveFocus();

        await user.tab();
        expect(amountInput).toHaveFocus();

        await user.tab();
        expect(setButton).toHaveFocus();
    });
});