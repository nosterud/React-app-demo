import React from 'react';
import Header from './components/Header';
import Application from './components/Application';
import UserProvider from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <Header></Header>
      <Application></Application>
    </UserProvider>
  );
}

export default App;
