import {Application} from "../Application";
import {render, screen} from "@testing-library/react";

describe('Application', () => {
    it('renders headings correctly', () => {
        render(<Application/>);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        });
        expect(sectionHeading).toBeInTheDocument();
    });

    it('renders inputs correctly', () => {
        render(<Application/>);

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
    });

    it('renders buttons correctly', () => {
        render(<Application/>);

        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
    });
})