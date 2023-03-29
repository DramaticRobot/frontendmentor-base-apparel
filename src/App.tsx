import React, { useState } from 'react';
import logo from './images/logo.svg';
import iconArrow from './images/icon-arrow.svg';
import iconError from './images/icon-error.svg';
import './App.css';


function App() {
  const [buttonClass, setButtonClass] = useState('email-input-button');

  const handleMouseDown = () => {
    setButtonClass('email-input-button email-input-button-clicked');
  };

  const handleMouseUp = () => {
    setButtonClass('email-input-button');
  };

  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if email is valid
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
  };

  return (
    <div className="App">
      <div>
        <div className="mobile">
          <img className="mobile-header-logo" src={logo} alt="Base Apparel Logo" />
          <img className="mobile" id='hero-photo' />
        </div>
        <div className="content">
          <div className="desktop-header-logo">
            <img src={logo} alt="Base Apparel Logo"/>
          </div>
          <h1 className='preface'>We're</h1>
          <h1 className='focus-message'>coming soon</h1>
          <p className='details-message'>
              Hello fellow shoppers! We're currently building our new fashion store. 
              Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <div className='email-form'>
            <form onSubmit={handleSubmit}>
              <label>
                <input className='email-input' type="text" value={email} onChange={handleChange} placeholder="Email Address"/>
              </label>
              <button
                className={buttonClass}
                type="submit"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <img className='email-icon-arrow' src={iconArrow} alt="Arrow" />
              </button>
              {!isValid ? (
                <>
                  <p className='email-input-message'>Please provide a valid email</p>
                  <img className='email-icon-error' src={iconError} alt="Error icon"/>
                </>
              ) : <p className='email-input-message'></p>}
            </form>
          </div>
        </div>
      </div>
      <div className="desktop">
        <img className="desktop" id='hero-photo'/>
      </div>
    </div>
  );
}

export default App;
