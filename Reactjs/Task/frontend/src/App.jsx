// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;










import React from 'react'

function login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>

      <form action="">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Email</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className='btn btn-success'>Log in</button>
          <p>Your are agree to our terms and policies</p>

          <button className='btn btn-success'>Create Account</button>

      </form>

        </div>
    </div>
  )
}

export default login;

