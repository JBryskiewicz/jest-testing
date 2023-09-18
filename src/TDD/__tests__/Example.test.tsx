import { render, screen } from '@testing-library/react';
import {Example} from "../Example";

/**
  * Example should render the text hello and if name is passed into the component
  * it should also render this name right after word hello
  */
describe("Example", () => {

  it('component renders correctly', () => {
    render(<Example/>);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  })

  it('component renders with passed name', () => {
    render(<Example name="Placeholder" />);
    const textElement = screen.getByText("Hello Placeholder");
    expect(textElement).toBeInTheDocument();
  })
})
