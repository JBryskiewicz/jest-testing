type Props = {
    name?: string;
}
export function Example({name} : Props) {
    return (
        <div>Hello {name}</div>
    );
}