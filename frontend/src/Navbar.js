import { Link } from "react-router-dom"
export default function(){
    return <ul style={{listStyle:"none"}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addReceipe'>Add Student</Link></li>
        <li><input type='search' placeholder="Search"/></li>
    </ul>
}