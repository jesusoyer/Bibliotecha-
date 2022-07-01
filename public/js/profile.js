    




const postBook = async (event) => {
    event.preventDefault();

    const isbnNum = document.querySelector('#isbn'); 
    const bookTitle = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookSubjects= document.querySelector('#subjects');
    const published= document.querySelector('#publishDate');
   
   
   
   
    const isbn = isbnNum.textContent;
    const title = bookTitle.textContent;
    const author = bookAuthor.textContent;
    const subjects = bookSubjects.textContent;
    const publish_date = published.textContent;

    
   
    console.log(isbn);
    console.log(title);
    console.log(author)
    console.log(subjects);
    console.log(publish_date);
    

    
  
    if (isbn&& title&& author&& subjects && publish_date) {
      const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify({ isbn, title, author, subjects, publish_date }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('booklist update')
        document.location.replace('/profile');
      } else {
        alert('booklist failed to update.');
      }
    }
  };

/// third party api function


  function getApi(event) {
    event.preventDefault();

    const isbnInput = document.querySelector('#isbnInput').value.trim();
    const isbnNumber = document.querySelector('#isbn'); 
    const titleId = document.querySelector('#title');
    const authorId = document.querySelector('#author');
    const subjectId = document.querySelector('#subjects');
    const publishId = document.querySelector('#publishDate');
    


    // Insert the API url to get a list of your repos
    var requestUrl = 'https://openlibrary.org/isbn/'+isbnInput+'.json';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data.isbn_13[0])
        //text to page
        isbnNumber.textContent = data.isbn_13[0]
        titleId.textContent=data.title
        subjectId.textContent=data.subjects[0]
        publishId.textContent=data.publish_date
     
        
       
        




         const author = data.authors[0].key;
        //  const cover = data.covers[0]
         console.log(author)

         var requestUrl = 'https://openlibrary.org'+author+'.json';
         fetch(requestUrl)
         .then(function (response) {
            return response.json();
          })
          .then(function (authorData) {
            console.log(authorData.name)
            
            authorId.textContent = authorData.name

            

           })
      });
  }

  

  
  const deletePost = async (event) => {
    event.preventDefault();
    const isbnId = document.querySelector('#isbnValue'); 
  console.log("delete route hit")
  const isbn = isbnId.textContent;
  console.log(isbn)
      const response = await fetch(`/api/books/${isbn}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  







   

 
  document
  .querySelector('#updateTable')
  .addEventListener('click',postBook);

  document
    .querySelector('#isbnSearch')
    .addEventListener('click',getApi);
    
    document
    .querySelector('#deleteEntry')
    .addEventListener('click',deletePost);