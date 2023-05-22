import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here's the Header
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's the Header
        </a>
      </header>
      <main>
        <div>
          <h1>We're Migrating to a new Learning Management System</h1>
          <p>Please use one of the following links to navigate to your training or to register for a new class. If you have questions or need help accessing your training, please contact us at 443-733-1910 or help@dcita.edu.</p>
        </div>
        <div class="card_container">
          <div class="card">
            <div><i class="fa-regular fa-calendar"></i></div>
            <h2>Register for Training</h2>
            <p>
              Looking to register for an upcoming class? Log into our new LMS to learn about training and enroll in a class.
            </p>
            <div class="button_container">
              <button>Log in to New LMS</button>
            </div>
          </div>
          <div class="card">
            <div><i class="fa-regular fa-graduation-cap"></i></div>
            <h2>New Student? </h2>
            <p>If your training begins on or after May 30, please log into our new LMS using this link.</p>
            <div class="button_container">
              <button>Log in to New LMS</button>
            </div>
          </div>
          <div class="card">
            <div><i class="fa-regular fa-clock-rotate-left"></i></div>
            <h2>Legacy Student?</h2>
            <p>If your training began prior to May 30, please continue your training in our legacy LMS.</p>
            <div class="button_container">
              <button>Log in to Ginkgo</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          Here's the footer
        </div>
      </footer>
    </div>
  );
}

export default App;
