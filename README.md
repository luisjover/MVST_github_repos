# GitHub Repos Challenge 🥷🏽


<img width="200"  alt="MovieHub" src="https://github.com/luisjover/MVST_github_repos/assets/129792624/51517a11-c03e-41ea-bf86-43928f49f978">
<img width="600"  alt="MovieHub" src="https://github.com/luisjover/MVST_github_repos/assets/129792624/7892448a-46eb-4000-b9dc-aebf906fefa6">
<img width="200"  alt="MovieHub" src="https://github.com/luisjover/MVST_github_repos/assets/129792624/b3cf24ac-da9e-40f5-bfea-850eeced5814">



## Table of Content:

- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)
- [Future Improvements](#future-improvements)

## About

Small application that collects GitHub API v4 repositories and returns them in an interface prepared to filter by type and host language, as well as search by name match and sort by alphabetical order or by most recent update date.

It is fully responsive, working correctly on any device, whether mobile, tablet or desktop.


## Technologies
- HTML
- CSS
- TypeScript
- Vite
- React.js
- Storybook
- react-icons
- react-spinners
- react-router-dom
- GraphQL
- Apollo Client
- Vitest
- Jest
- React-Testing-Library


## Setup
```
git clone https://github.com/luisjover/MVST_github_repos

```

```
npm install

```

- Generate a classic access token on your GitHub
- Create your own .env file with the GitHub access token
- Get referenced by the provided .env.example file

```
npm run dev
```
<br />
For runing the tests suite

```
npm test
```

## Future Improvements
- Authenticate the user: I would like to implement a login with Auth0 or some similar tool. Using the login email (login with GitHub) the application is prepared to, with a few simple adaptations, show its own repositories to the user who logs in, instead of mine.
- Replace authentication with Github token with authentication with App: I would like to make the authentication process dynamic, so that you would not have to go to GitHub to generate the access token, replacing it with a JWT, in this case for example Auth0.
- Being able to see the repositories of other users: the two queries (userData and repositoriesData) have been built with variables, so that in the future it would be easy to add a small search engine to see not only my repositories, but those of any user.


## Check my Repos! 🥷🏽
