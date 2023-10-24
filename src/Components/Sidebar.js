import User from "./User";
import ListNames from "./ListNames";
import Col from "./Col";

const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0,0,0,0.1)"
}

const Sidebar = (props) => {

    return (
        <Col size={3} classe="bg-light" customStyle={customStyle}>
            <User user={props.user} />
            <hr />
            <ListNames />
        </Col>
    )
}

export default Sidebar;