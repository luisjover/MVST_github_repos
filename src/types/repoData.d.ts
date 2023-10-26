interface RepoData {
    name: string,
    createdAt: string,
    updatedAt: string,
    description: string,
    isPrivate: boolean,
    primaryLanguage: {
        name: string,
        color: string
    }
}

export default RepoData;