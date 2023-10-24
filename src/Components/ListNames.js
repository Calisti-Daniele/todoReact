

const navLinkStyle = { cursor: 'pointer'};

const List = ({list, active}) => {
    
    const className = `nav-link ${active ? 'active' : ''}`;

    return(
        <li className={className} style={navLinkStyle}>{list}</li>
    )
}

const ListNames = () => {
    return(
        <ul className="nav nav-pills flex-column mb-auto">
            <List list="Importante" />
            <List list="Film da vedere" active={true}/>
            <List list="Libri da leggere" />
        </ul>
    )
}


export default ListNames;