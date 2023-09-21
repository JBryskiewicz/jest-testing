import {useCounter} from "../useCounter";
import {renderHook} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe('useCounter', () => {
    it('should render the initial count', function () {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    });

    it('should accept and render the same initial count', function () {
        const { result } = renderHook(useCounter, { initialProps: { initialCount: 10 } });
        expect(result.current.count).toBe(10);
    });

    //Focus on act() in following two examples
    it('should increment the count', function () {
        const { result } = renderHook(useCounter);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    it('should decrement the count', function () {
        const { result } = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    });
});

export {}