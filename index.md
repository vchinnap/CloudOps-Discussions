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

<div class="discussion-item">Enable Hibernate for EC2 Instances</div>
<div class="discussion-item">Provision the EC2 instance upgraded version to production</div>
<div class="discussion-item">Version upgrade</div>
<div class="discussion-item">Provision EC2 Instance using CDK</div>
<div class="discussion-item">Update the EC2 CLI version</div>

<script>
    function searchDiscussions() {
        var input = document.getElementById('searchInput');
        var filter = input.value.toLowerCase();
        var items = document.getElementsByClassName('discussion-item');

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var text = item.textContent || item.innerText;

            // If the filter text matches, show the item, otherwise hide it
            if (text.toLowerCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    }
</script>
            }
        }
    }
</script>
