import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  // for images
  // uri: "https://api.webpack.wtf"

  // for form and list
  uri: 'https://api.graph.cool/simple/v1/cjexem1he3let0153tpc5ftu1'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root')
);
registerServiceWorker();



// const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

// // 3
// const middlewareAuthLink = new ApolloLink((operation, forward) => {
//   const token = localStorage.getItem(AUTH_TOKEN)
//   const authorizationHeader = token ? `Bearer ${token}` : null
//   operation.setContext({
//     headers: {
//       authorization: authorizationHeader
//     }
//   })
//   return forward(operation)
// })

// const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)
// const client = new ApolloClient({
//   link: httpLinkWithAuthToken,
//   cache: new InMemoryCache()
// })