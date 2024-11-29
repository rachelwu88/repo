import React from 'react';
import { BpkCalendar } from 'bpk-component-calendar';
import { BpkButton } from 'bpk-component-button';
// import './App.scss';

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  calendarContainer: {
    margin: '20px auto',
    maxWidth: '400px',
  },
  buttonContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Flight Schedule</h1>
      </header>

      {/* Calendar Component */}
      <div style={styles.calendarContainer}>
        <BpkCalendar />
      </div>

      {/* "Continue" Button */}
      <div style={styles.buttonContainer}>
        <BpkButton onClick={() => alert('Continue button clicked!')}>Continue</BpkButton>
      </div>
    </div>
  );
}

export default App;
