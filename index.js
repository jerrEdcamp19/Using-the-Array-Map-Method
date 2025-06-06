function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
    .catch(error => console.error("Erreur fetch:", error));
}

function renderBooks(books) {
  const list = document.getElementById("book-list");
  list.innerHTML = ""; // Vide la liste avant d'ajouter

  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    list.appendChild(li);
  });
}

