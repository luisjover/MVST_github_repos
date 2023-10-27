import "./card.css";

type Props = {
    repo: {
        name: string;
        createdAt: string;
        updatedAt: string;
        description: string;
        isPrivate: boolean;
        primaryLanguage: {
            name: string;
            color: string;
        };

    }
}

const Card = ({ repo }: Props) => {

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