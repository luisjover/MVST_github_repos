
import "./header.css";
import { AiFillGithub } from "react-icons/ai";


const Header = () => {
    return (
        <header className="header">
            <AiFillGithub className="header-icon" />
            <h1 className="header-title">My Github Repositories</h1>
        </header>
    )
}

export default Header;