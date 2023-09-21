import {render, screen} from "@testing-library/react";
import {CounterMocking} from "../CounterMocking";
import user from "@testing-library/user-event";

describe('CounterMocking', () => {
    it('should render correctly', function () {
        render(<CounterMocking count={0}/>);
        const textElement = screen.getByText('Counter Two');
        expect(textElement).toBeInTheDocument();
    });

    it('should call the handlers', async function () {
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();

        render(
            <CounterMocking
                count={0}
                handleIncrement={incrementHandler}
                handleDecrement={decrementHandler}
            />
        );

        const incrementButton = screen.getByRole('button', { name: 'Increment' });
        const decrementButton = screen.getByRole('button', { name: 'Decrement' });

        await user.click(incrementButton);
        await user.click(decrementButton);

        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    });
});

export {}