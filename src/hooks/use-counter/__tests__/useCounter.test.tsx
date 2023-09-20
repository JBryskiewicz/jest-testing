import {useCounter} from "../useCounter";
import {renderHook} from "@testing-library/react";

describe('useCounter', () => {
    it('should render the initial count', function () {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    });

    it('should accept and render the same initial count', function () {
        const { result } = renderHook(useCounter, { initialProps: { initialCount: 10 } });
        expect(result.current.count).toBe(10);
    });
});

export {}