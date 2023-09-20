import { screen } from '@testing-library/react';
import {MuiMode} from "../MuiMode";
import {render} from "../../test-utils";

describe('MuiMode', () => {
    it('should render text correctly', function () {
        render(<MuiMode/>)

        //example how to add wrapper directly into test
        // render(<MuiMode/>, { wrapper: AppProviders });

        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode');
    });
});