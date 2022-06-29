const postBook = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#book_title').value.trim();
    const author = document.querySelector('#book_author').value.trim();
    const category = document.querySelector('#book_category').value.trim();
    const date_published = document.querySelector('#date_published').value.trim();
  
    if (name, author, category, date_published) {
      const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify({ name, author, category, date_published }),
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

  document
    .querySelector('#post')
    .addEventListener('click', postBook);