type Props = {
    count: number;
    handleIncrement?: () => void;
    handleDecrement?: () => void;
}

export function CounterMocking({ count, handleIncrement, handleDecrement}: Props) {
    return (
        <div>
            <h1>Counter Two</h1>
            <p>{ count }</p>
            { handleIncrement && <button onClick={handleIncrement}>Increment</button> }
            { handleDecrement && <button onClick={handleDecrement}>Decrement</button> }
        </div>
    );
}