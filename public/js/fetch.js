
function getApi() {
  
  // Insert the API url to get a list of your repos
  var requestUrl = 'https://openlibrary.org/isbn/0397319703.json';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      console.log(data)
      console.log(data.title)
      console.log(data.isbn_10[0])
      console.log(data.authors[0].key)
      console.log(data.covers[0])

       const author = data.authors[0].key;
      //  const cover = data.covers[0]
       console.log(author)

       var requestUrl = 'https://openlibrary.org/'+ author +'.json';
       fetch(requestUrl)
       .then(function (response) {
          return response.json();
        })
        .then(function (authorData) {
          console.log(authorData.name)

         })
      //    var requestUrl = 'https://covers.openlibrary.org/b/id/'+cover+'-S.jpg.json';
      //    fetch(requestUrl)
      //    .then(function (response) {
      //     return response.json();
      //   })
      //   .then(function (coverData) {
      //     console.log(coverData)

      //    })
    });
}

getApi();