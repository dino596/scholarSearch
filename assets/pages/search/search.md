---
layout: default
title: Search
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/common/css/style.css">
    <style>
        /* Search container */
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            overflow: hidden;
        }
        /* Search form */
        #searchForm {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
        #searchInput {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        #searchButton {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            margin-left: 10px;
            cursor: pointer;
        }
        #searchButton:hover {
            background-color: #0056b3;
        }
        /* Search results */
        #searchResults {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            padding: 20px;
        }
        .searchResult {
            margin-bottom: 10px;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }
        .searchResult:last-child {
            border-bottom: none;
        }
        .searchResult h3 {
            margin: 0;
            color: #007bff;
        }
        .searchResult p {
            margin-top: 5px;
            color: #666;
        }
    </style>
    <title>College Search</title>
</head>
<body>
    <div class="container">
        <h1>College Search</h1>
        <form id="searchForm">
            <label for="searchInput">Search by College Name: </label>
            <input type="text" id="searchInput" name="searchInput" placeholder="Enter college name">
            <button id="searchButton" type="submit">Search</button>
        </form>
        <div id="searchResults">
            <!-- Search results will be displayed here -->
        </div>
    </div>
    <script>
           // JavaScript code for adding schools to list page
        document.addEventListener("DOMContentLoaded", function() {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch("http://127.0.0.1:8199/dataList", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .then((result) => {
                colleges=result
                updateSelectedColleges()
            })
            .catch((error) => console.error(error))
    // Function to add school to list
    function addToList(college) {
        var storedList = JSON.parse(localStorage.getItem('selectedSchools')) || [];
        storedList.push(college);
        localStorage.setItem('selectedSchools', JSON.stringify(storedList));
        // After adding to the list, update the displayed list as well
        updateSelectedColleges();
    }
    // Function to update the displayed list of selected colleges
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
        // Ensure that the searchResults element is present
        var searchResults = document.getElementById("searchResults");
        if (!searchResults) return; // Check if the element exists
        // Optional: Display a message if there are no search results
        if (searchResults.innerHTML === "" && storedList.length === 0) {
            searchResults.innerHTML = "<p>No search results</p>";
        }
    }
    // Event listener for search form submission
    var searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        var searchTerm = searchInput.value.toLowerCase();
        var filteredColleges = colleges.filter(function(college) {
            return college.name.toLowerCase().includes(searchTerm);
        });
        displaySearchResults(filteredColleges);
    });
        // Function to display search results
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
            // Other elements creation
            searchResults.appendChild(resultElement);
        });
        }
    })
    </script>
</body>
</html>