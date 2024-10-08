<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css">

CloudOps-Discussions is a documentation platform designed to manage cloud operations. It offers **features** like comprehensive documentation, integration with GitHub, and easy navigation for all team members.

### Click on [Town Square](https://github.com/vchinnap/CloudOps-Discussions/discussions/categories/town-square) for community engagement.

> **Note**: This project is maintained by the CloudOps team to streamline cloud operations.

## Features
- **Centralized Documentation**: Keep all your cloud operations documentation in one place.
- **Easy Navigation**: Quickly find the information you need with a searchable interface.
- **Integration with GitHub**: Link directly to issues, discussions, and pull requests..

## Search Discussions

<input type="text" id="searchInput" onkeyup="searchDiscussions()" placeholder="Search discussions..." style="width: 100%; padding: 12px; font-size: 16px; margin-bottom: 20px;"/>

## Discussions

<div id="discussions">
    <div class="discussion-item">What is the difference between Hibernation vs Stopping</div>
    <!-- Add more discussion items as needed -->
</div>
<script>
    function searchDiscussions() {
        var input, filter, items, item, i, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toLowerCase();
        items = document.getElementsByClassName('discussion-item');

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
</script>
