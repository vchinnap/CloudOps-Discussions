function searchDiscussions() {
    // Declare variables
    var input, filter, items, item, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    items = document.getElementsByClassName('discussion-item');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < items.length; i++) {
        item = items[i];
        txtValue = item.textContent || item.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}
