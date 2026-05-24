function ListGroup() {
    const items = ["pakistan", "india", "bangladesh", "nepal", "srilanka", "bhutan", "maldives", "afghanistan", "myanmar", "thailand", "vietnam", "cambodia", "laos", "malaysia", "indonesia", "singapore", "brunei", "philippines", "east timor", "papua new guinea"];
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;