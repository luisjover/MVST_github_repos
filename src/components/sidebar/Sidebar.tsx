
import UserData from "../../types/userData";
import "./sidebar.css";

type Props = {
    user: UserData
}


const Sidebar = ({ user }: Props) => {


    return (
        <div className="sidebar-container">
            <div className="sidebar-image-container">
                <img className="sidebar-image" src={user.avatarUrl} alt="Profile Picture" />
            </div>
            <div className="sidebar-userdata-container">
                <h3>{user.name}</h3>
                <p>{user.login}</p>
            </div>
            <div className="sidebar-bio-container">
                <p>{user.bio}</p>
            </div>
            <div className="sidebar-followsinfo-container">
                {user.followers.totalCount} followers · {user.following.totalCount} following
            </div>

        </div>
    )
}

export default Sidebar;