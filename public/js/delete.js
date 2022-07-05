const deletePost = async (event) => {
    event.preventDefault();
    const isbnId = document.querySelector('#isbnValue'); 
  console.log("delete route hit")
//   const isbn = isbnId.textContent;
  console.log(isbn)
      const response = await fetch(`/api/books/${isbnId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    };

    document
    .querySelector('#deleteEntry')
    .addEventListener('click', deletePost);