// iot_dashboard_react: A starter React.js app for IoT Device Management Dashboard

// Importing necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// A simple App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IoT Device Management Dashboard</h1>
        <p>Monitor and manage your IoT devices with ease.</p>
      </header>
      <main>
        <section>
          <h2>Device Overview</h2>
          <table>
            <thead>
              <tr>
                <th>Device Name</th>
                <th>Status</th>
                <th>Last Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Device 1</td>
                <td>Online</td>
                <td>2025-01-13 10:00</td>
              </tr>
              <tr>
                <td>Device 2</td>
                <td>Offline</td>
                <td>2025-01-12 22:15</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>Actions</h2>
          <button>Refresh</button>
          <button>Add Device</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 IoT Management Inc.</p>
      </footer>
    </div>
  );
}

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));