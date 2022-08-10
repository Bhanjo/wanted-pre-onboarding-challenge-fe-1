import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './pages/Todo';
import Header from './componenets/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo/' element={<Todo />} />
          <Route path='/todo/:id' element={<Todo />} />
          <Route path='/auth/sign-in' element={<SignIn />} />
          <Route path='/auth/sign-up' element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
