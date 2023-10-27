import RepoData from "../../../types/repoData";
import "./card.css";

type Props = {
    repo: RepoData
}

const Card = ({ repo }: Props) => {

    //Get the desired format date from the updatedAt string
    const updateDate = repo.updatedAt.split("T")[0];

    return (
        <div className="card-container">
            <div>
                <h3>{repo.name}</h3>
            </div>
            <div>
                <p>{repo.description}</p>
            </div>
            <div>
                <span
                    className="language-color"
                    style={{
                        backgroundColor: repo.primaryLanguage?.color || "transparent",
                    }}
                >
                </span>
                <span>{repo.primaryLanguage?.name}</span>
                <span className="updated-info">Updated at {updateDate}</span>
            </div>
        </div >
    )
}

export default Card;