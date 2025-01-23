import {Link} from "react-router"


const Nav = () => {
    return (
        <nav style = {{backgroundColor: 'black', width: "100%", paddingLeft: "20px", paddingRight: "20px"}}>
            <ul>
                <li><strong>DoDo</strong></li>
            </ul>
            <ul>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav