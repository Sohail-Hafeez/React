import { useState } from "react";

function ListGroup() {
    let items = ["pakistan", "india", "bangladesh", "nepal", "srilanka", "bhutan", "maldives", "afghanistan", "myanmar"];

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item} onClick={() => { setSelectedIndex(index); console.log(item, index); }}>
                        {item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;