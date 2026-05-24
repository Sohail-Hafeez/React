import type { MouseEvent } from "react";

function ListGroup() {
    let items = ["pakistan", "india", "bangladesh", "nepal", "srilanka", "bhutan", "maldives", "afghanistan", "myanmar"];

    const handleClick = (event: MouseEvent) => console.log(event);
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item active" key={item} onClick={() => handleClick}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;