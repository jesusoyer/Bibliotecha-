const getQuote = require('literature-clock');


const logout = async () => {
  console.log('logout.js file hit')
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log("failed to log out")
      alert('Failed to log out.');
    }
  };


 

  const now = new Date();
  console.log(getQuote(now))




  


  
  document.querySelector('#logout').addEventListener('click', logout);
  