import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from "./pages/LoginSignup/login";
import Signup from "./pages/LoginSignup/Signup";
import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";
import NavBar from "./component/navBar/navBar";

function App() {
  // Construct our main GraphQL API endpoint
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/searchPage" element={<SearchPage />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
