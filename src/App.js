import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    <div className="header">
      Inspectify Logo
    </div>

    <div>
      <h1>Let's find your home and an inspector.</h1>
      <p>Check out your home and see what we offer for your inspection protection.</p>
      <p>We'll match you with one of our preferred inspectors.</p>
    </div>

    <div>
      What is the address of the home you need inspection protection?
      <input type="text" placeholder="Property address"></input>
      <button>Create Order</button>
    </div>

    <div>
      Service Contracts are offered through Hippo Warranty Solutions Inc. Coverage under your Service Contract is subject to the terms and conditions of the Service Contract. Availability and qualification for coverage, as well as the terms, conditions, exclusions may vary by jurisdiction (see the state-specific endorsements for the terms specific to your jurisdiction). This Service Contract is not available outside the United States or in any jurisdiction in which we are not licensed to do business that requires such a license, and this material is not soliciting business in any such jurisdiction.
    </div>

    <div className="footer">
      Questions? Reach out to us!

      Email us at Hello@getinspectify.com or call us at (855) 456-6446

      About
      Terms of Services
      Privacy Policy
    </div>

    </div>
  );
}

export default App;
