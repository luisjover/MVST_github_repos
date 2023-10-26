interface UserData {
    name: string,
    login: string,
    avatarUrl: string,
    bio: string,
    followers: {
        totalCount: number
    }
    following: {
        totalCount: number
    }
    repositories: {
        totalCount: number
    }
}

export default UserData;