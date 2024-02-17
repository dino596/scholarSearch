document.addEventListener("DOMContentLoaded", function() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    let colleges = []; // Define colleges variable outside of the fetch callback to make it accessible globally

    // Fetch the college data
    fetch("http://127.0.0.1:8199/dataList", requestOptions)
        .then((response) => response.json()) // Parse the response as JSON
        .then((result) => {
            colleges = result; // Assuming result is an array of colleges
            updateSelectedColleges();
            displaySearchResults(colleges); // Display all colleges initially
        })
        .catch((error) => console.error(error));

    // Function to add a college to the list
    function addToList(college) {
        var storedList = JSON.parse(localStorage.getItem('selectedSchools')) || [];
        storedList.push(college);
        localStorage.setItem('selectedSchools', JSON.stringify(storedList));
        updateSelectedColleges();
    }

    // Function to update the selected colleges list
    function updateSelectedColleges() {
        var selectedCollegesList = document.getElementById("selected");
        if (!selectedCollegesList) return; // Check if the element exists
        selectedCollegesList.innerHTML = ""; // Clear previous list
        var storedList = JSON.parse(localStorage.getItem('selectedSchools')) || [];
        storedList.forEach(function(college) {
            var listItem = document.createElement("li");
            listItem.textContent = college;
            selectedCollegesList.appendChild(listItem);
        });
    }

    // Event listener for the search input field
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function(event) {
        var searchTerm = event.target.value.toLowerCase(); // Get the value from the input field
        if (searchTerm.trim() === "") { // If search term is empty, display all colleges
            displaySearchResults(colleges);
            return;
        }
        var filteredColleges = colleges.filter(function(college) {
            return college.name.toLowerCase().includes(searchTerm);
        });
        displaySearchResults(filteredColleges);
    });

    // Function to display search results
    function displaySearchResults(results) {
        var searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = ""; // Clear previous search results
        if (results.length === 0) {
            searchResults.innerHTML = "<p>No results found</p>";
            return;
        }
        results.forEach(function(college) {
            var resultElement = document.createElement("div");
            resultElement.classList.add("searchResult");
            var heading = document.createElement("h3");
            heading.textContent = college.name;
            resultElement.appendChild(heading);
            var location = document.createElement("p");
            location.textContent = "Location: " + college.city + ", " + college.state;
            resultElement.appendChild(location);
            // Add button to add to list
            var addButton = document.createElement("button");
            addButton.textContent = "Add to List";
            addButton.onclick = function() {
                addToList(college.name); // Passing college name to addToList function
            };
            resultElement.appendChild(addButton);
            searchResults.appendChild(resultElement);
        });
    }
});
