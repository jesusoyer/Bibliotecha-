
function getApi() {
  
    // Insert the API url to get a list of your repos
    var requestUrl = 'https://openlibrary.org/isbn/9780140328721.json';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
  
      });
  }

  getApi();