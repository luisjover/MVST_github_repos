
import "./css/reset.css";
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import Client from './graphql/apollo/apollo.client.ts';
import App from './App.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
)
