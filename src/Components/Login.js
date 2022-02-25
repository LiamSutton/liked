import React from 'react'
import {CLIENT_ID, CLIENT_SECRET, API_KEY} from '../Secrets';
const Login = () => {
    let redirectUri = 'http://localhost:3000'
    let scope = 'https://www.googleapis.com/auth/youtube.force-ssl'
    let responseType = 'token'
    let includeGrantedScopes = true
    let baseUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&include_granted_scopes=${includeGrantedScopes}}`
   
    let fragmentString = window.location.hash.substring(1)
    let expression = new RegExp('token=([A-za-z0-9\.\-])*')
    let accessToken = expression.exec(fragmentString)[0].replace("token=", "")
    console.log(accessToken)
    console.log(fragmentString)
    const oauthSignIn =() => {
        // Google's OAuth 2.0 endpoint for requesting an access token
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
      
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);
      
        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {'client_id': CLIENT_ID,
                      'redirect_uri': redirectUri,
                      'response_type': 'token',
                      'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                      'include_granted_scopes': 'true'
                    };
      
        // Add form parameters as hidden input values.
        for (var p in params) {
          var input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', p);
          input.setAttribute('value', params[p]);
          form.appendChild(input);
        }
      
        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
      }

    return (
      <div className="App">
        <h1>Welcome to Liked!</h1>
        <button onClick={oauthSignIn}>Auth With Youtube</button>
      </div>
    );
}

export default Login