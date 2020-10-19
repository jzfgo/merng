import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';
import MenuBar from './components/MenuBar';
import { AuthProvider } from './context/auth';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AuthRoute from './util/AuthRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={HomePage} />
          <AuthRoute exact path="/login" component={LoginPage} />
          <AuthRoute exact path="/register" component={RegisterPage} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
