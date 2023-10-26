
import "./sidebar.css";

type Props = {
    data: {
        viewer: {
            name: string,
            login: string,
            avatarUrl: string,
            bio: string,
            followers: {
                totalCount: number
            },
            following: {
                totalCount: number
            }
        }
    }
}

const Sidebar = ({ data }: Props) => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-image-container">
                <img className="sidebar-image" src={data?.viewer.avatarUrl} alt="Profile Picture" />
            </div>
            <div className="sidebar-userdata-container">
                <h3>{data?.viewer.name}</h3>
                <p>{data?.viewer.login}</p>
            </div>
            <div className="sidebar-bio-container">
                <p>{data?.viewer.bio}</p>
            </div>
            <div className="sidebar-followsinfo-container">
                {data?.viewer.followers.totalCount} followers · {data?.viewer.following.totalCount} following
            </div>

        </div>
    )
}

export default Sidebar;