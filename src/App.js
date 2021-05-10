import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from './routes/Navigation';

function App() {

  return (

    <div>
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  );
}

export default App;
