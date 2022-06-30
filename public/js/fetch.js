
function getApi() {
  
    // Insert the API url to get a list of your repos
    var requestUrl = 'http://www.boredapi.com/api/activity?key=5881028';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
  
      });
  }

  getApi();