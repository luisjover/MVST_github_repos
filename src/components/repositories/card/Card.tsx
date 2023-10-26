

type Props = {
    repo: {
        name: string;
        description: string;
        updated_at: string;
        language: {
            name: string;
            color: string;
        }

    }
}

const Card = ({ repo }: Props) => {
    return (
        <div>
            <div>
                <h3>{repo.name}</h3>
            </div>
            <div>
                <p>{repo.description}</p>
            </div>
            <div>
                <span>{repo.language.name}</span>
                <span>{repo.updated_at}</span>
            </div>
        </div>
    )
}

export default Card