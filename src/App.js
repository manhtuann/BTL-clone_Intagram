import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { ROUTE } from './constants';
import Profile from './pages/Profile';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Routes>
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.REGISTER} element={<Register />} />
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App
