import './App.css';
import React from 'react';
import Login from './components/LogIn/LogIn';
import { AuthProvider } from './context/AuthContext';

const App=()=> {
  return (
    <>
    <AuthProvider>
    
    <BrowserRouter>
   
    <Routes>
      
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
    
    </AuthProvider>
    </>
  );
}

export default App;