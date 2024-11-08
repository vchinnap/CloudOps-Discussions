async function searchDocs() {
  const query = document.getElementById("search-box").value.toLowerCase();
  const results = document.getElementById("search-results");
  results.innerHTML = "";
  if (query.length < 3) return;

  const response = await fetch("https://vchinnap.github.io/CloudOps-Discussions/search/index.json");
  const index = await response.json();

  index.forEach(doc => {
    if (doc.content.toLowerCase().includes(query) || doc.title.toLowerCase().includes(query)) {
      const item = document.createElement("li");
      item.innerHTML = `<a href="${doc.path}">${doc.title}</a>`;
      results.appendChild(item);
    }
  });
}
