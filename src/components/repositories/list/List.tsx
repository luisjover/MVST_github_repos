
import RepoData from "../../../types/repoData";
import Card from "../card/Card";



type Props = {
    repositories: RepoData[];
}



const List = ({ repositories }: Props) => {


    return (
        <>
            {repositories?.map((repo, index) => (
                <Card key={index} repo={repo} />
            ))}
        </>
    )
}

export default List;