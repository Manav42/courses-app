import { ListGroup } from "reactstrap";
import {Link} from "react-router-dom";

const Menus = () => {
    return (
        <ListGroup>
            <Link className='list-group-item list-group-item-action' tag='a' to='/'>Home</Link>
            <Link className='list-group-item list-group-item-action' tag='a' to='/course'>Add Course</Link>
            <Link className='list-group-item list-group-item-action' tag='a' to='/courses'>View Courses</Link>
            <Link className='list-group-item list-group-item-action' tag='a' to='/'>About Us</Link>
            <Link className='list-group-item list-group-item-action' tag='a' to='/'>Contact Us</Link>
        </ListGroup>
    );
}
export default Menus;