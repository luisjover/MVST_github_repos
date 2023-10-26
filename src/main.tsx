
import "./css/reset.css";
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import GraphqlClient from './graphql/client/graphql.client.ts';
import App from './App.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={GraphqlClient}>
    <App />
  </ApolloProvider>,
)
