import React from 'react';
import { Link } from 'react-router-dom';

function LoginButton() {
    return (
      <div>
        <Link to="/target-page">
          <button>Go to Target Page</button>
        </Link>
      </div>
    );
  }

  export default LoginButton;