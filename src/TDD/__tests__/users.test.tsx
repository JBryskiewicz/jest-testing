import {render, screen} from "@testing-library/react";
import {Users} from "../Users";
import {server} from "../../mocks/server";
import {rest} from "msw";

describe('Users', () => {
    it('should render correctly', function () {
        render(<Users/>);
        const textElement = screen.getByText('Users');
        expect(textElement).toBeInTheDocument();
    });

    it('should render list of users', async function () {
        render(<Users/>);
        const users = await screen.findAllByRole('listitem');
        expect(users).toHaveLength(3);
    });

    it('should render error correctly', async function () {
        server.use(
            rest.get(
                "https://jsonplaceholder.typicode.com/users",
            (req, res, ctx) => {
                return res(ctx.status(500));
            }
        ));
        render(<Users/>);
        const error = await screen.findByText('Error fetching users');
        expect(error).toBeInTheDocument();
    });
})

export {}