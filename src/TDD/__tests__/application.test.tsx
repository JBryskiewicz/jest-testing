import {Application} from "../Application";
import {render, screen} from "@testing-library/react";

describe('Application', () => {
    it('render correctly', () => {
        render(<Application/>);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        });
        expect(sectionHeading).toBeInTheDocument();

        const textBoxElement = screen.getByRole('textbox', {
            name: 'Name',
        });
        expect(textBoxElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio",
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
    });
})