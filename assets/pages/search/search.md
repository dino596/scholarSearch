---
layout: page
title: Search
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/common/css/style.css">
    <style>
        /* Custom CSS for search page */
        body {
            font-family: Arial, sans-serif;
            background-color: #daeaf6;
            padding: 20px;
        }
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
        var colleges = [
            {
                name: "Stanford University",
                location: "Stanford, California",
                description: "Stanford University is a private research university in Stanford, California. Stanford is known for its academic strength, wealth, and proximity to Silicon Valley.",
                website: "https://www.stanford.edu/"
            },
            {
                name: "University of California, Berkeley",
                location: "Berkeley, California",
                description: "The University of California, Berkeley is a public research university in Berkeley, California. Established in 1868 as the state's first land-grant university, it is the flagship campus of the University of California system.",
                website: "https://www.berkeley.edu/"
            },
            {
                name: "University of California, Los Angeles (UCLA)",
                location: "Los Angeles, California",
                description: "The University of California, Los Angeles is a public research university in Los Angeles, California. It became the Southern Branch of the University of California in 1919, making it the second-oldest undergraduate campus of the ten-campus University of California system.",
                website: "https://www.ucla.edu/"
            },
            {
                name: "University of California, San Diego (UCSD)",
                location: "San Diego, California",
                description: "The University of California, San Diego is a public research university located in the La Jolla neighborhood of San Diego, California. Established in 1960, UCSD is one of the ten campuses of the University of California system.",
                website: "https://ucsd.edu/"
            },
            {
                name: "University of California, Davis (UC Davis)",
                location: "Davis, California",
                description: "The University of California, Davis is a public research university and land-grant university adjacent to Davis, California. Established in 1905 as the University Farm, it offers over 100 undergraduate majors and 90 graduate programs.",
                website: "https://www.ucdavis.edu/"
            },
            {
                name: "University of California, Santa Barbara (UCSB)",
                location: "Santa Barbara, California",
                description: "The University of California, Santa Barbara is a public research university in Santa Barbara, California. It is one of the 10 campuses of the University of California system and offers 200 undergraduate and graduate degree programs.",
                website: "https://www.ucsb.edu/"
            },
            {
                name: "University of California, Irvine (UCI)",
                location: "Irvine, California",
                description: "The University of California, Irvine is a public research university in Irvine, California. It is one of the 10 campuses in the University of California (UC) system and is classified among 'R1: Doctoral Universities – Very high research activity'.",
                website: "https://uci.edu/"
            },
            {
                name: "University of California, Santa Cruz (UCSC)",
                location: "Santa Cruz, California",
                description: "The University of California, Santa Cruz is a public research university in Santa Cruz, California. It is one of the 10 campuses in the University of California system.",
                website: "https://www.ucsc.edu/"
            },
            {
                name: "University of California, Riverside (UCR)",
                location: "Riverside, California",
                description: "The University of California, Riverside is a public research university in Riverside, California. It is one of the 10 campuses of the University of California system.",
                website: "https://www.ucr.edu/"
            },
            {
                name: "California Institute of Technology (Caltech)",
                location: "Pasadena, California",
                description: "The California Institute of Technology is a private research university in Pasadena, California. Known for its strength in natural science and engineering, Caltech is often ranked as one of the world's top-ten universities.",
                website: "https://www.caltech.edu/"
            },
            {
                name: "California State University, Los Angeles (CSULA)",
                location: "Los Angeles, California",
                description: "California State University, Los Angeles is a public university in Los Angeles, California. It is part of the California State University (CSU) system.",
                website: "https://www.calstatela.edu/"
            },
            {
                name: "California State University, Fullerton (CSUF)",
                location: "Fullerton, California",
                description: "California State University, Fullerton is a public university in Fullerton, California. It is part of the California State University (CSU) system.",
                website: "https://www.fullerton.edu/"
            },
            {
                name: "California State University, Long Beach (CSULB)",
                location: "Long Beach, California",
                description: "California State University, Long Beach is a public university in Long Beach, California. It is one of the largest and most comprehensive public universities in the United States.",
                website: "https://www.csulb.edu/"
            },
            {
                name: "California State University, Northridge (CSUN)",
                location: "Northridge, California",
                description: "California State University, Northridge is a public university in the Northridge neighborhood of Los Angeles, California. It is part of the California State University (CSU) system.",
                website: "https://www.csun.edu/"
            },
            {
                name: "California State Polytechnic University, Pomona (Cal Poly Pomona)",
                location: "Pomona, California",
                description: "California State Polytechnic University, Pomona is a public polytechnic university in Pomona, California. It is one of two polytechnics in the California State University (CSU) system.",
                website: "https://www.cpp.edu/"
            },
            {
                name: "California State University, Sacramento (Sacramento State)",
                location: "Sacramento, California",
                description: "California State University, Sacramento is a public university in Sacramento, California. It is one of the 23 campuses of the California State University (CSU) system.",
                website: "https://www.csus.edu/"
            },
            {
                name: "San Diego State University (SDSU)",
                location: "San Diego, California",
                description: "San Diego State University is a public research university in San Diego, California. It is the third-oldest university in the 23-member California State University (CSU) system.",
                website: "https://www.sdsu.edu/"
            },
            {
                name: "University of Southern California (USC)",
                location: "Los Angeles, California",
                description: "The University of Southern California is a private research university in Los Angeles, California. USC was founded in 1880, making it the oldest private research university in California.",
                website: "https://www.usc.edu/"
            },
            {
                name: "University of San Diego (USD)",
                location: "San Diego, California",
                description: "The University of San Diego is a private Roman Catholic research university in San Diego, California. Founded in July 1949 as the San Diego College for Women and San Diego University, the academic institutions merged from the California school system into University of San Diego in 1972.",
                website: "https://www.sandiego.edu/"
            },
            {
                name: "University of California, Merced (UC Merced)",
                location: "Merced, California",
                description: "The University of California, Merced is a public land-grant research university in Merced, California. Established in 2005, UC Merced is the tenth and newest of the University of California campuses.",
                website: "https://www.ucmerced.edu/"
            },
            // Add more colleges here
        ];
        document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.getElementById("searchForm");
    var searchInput = document.getElementById("searchInput");
    var searchResults = document.getElementById("searchResults");
    var userList = [];
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        var searchTerm = searchInput.value.toLowerCase();
        var filteredColleges = colleges.filter(function(college) {
            return college.name.toLowerCase().includes(searchTerm);
        });
        displaySearchResults(filteredColleges);
    });
    function displaySearchResults(results) {
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
            location.textContent = "Location: " + college.location;
            resultElement.appendChild(location);
            var description = document.createElement("p");
            description.textContent = college.description;
            resultElement.appendChild(description);
            var websiteLink = document.createElement("a");
            websiteLink.textContent = "Visit Website";
            websiteLink.href = college.website;
            websiteLink.target = "_blank"; // Open link in a new tab
            resultElement.appendChild(websiteLink);
            // Insert a space between "Visit Website" and "Add to List"
            var space = document.createTextNode('\u00A0');
            resultElement.appendChild(space);
            var addToListLink = document.createElement("a");
            addToListLink.textContent = "Add to List";
            addToListLink.href = "#";
            addToListLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from navigating
    userList.push(college.name);
    updateList();
});
            resultElement.appendChild(addToListLink);
            searchResults.appendChild(resultElement);
        });
    }
    function updateList() {
        var listElement = document.getElementById("userList");
        listElement.innerHTML = "";
        userList.forEach(function(college) {
            var listItem = document.createElement("li");
            var bullet = document.createTextNode('\u2022 '); // Bullet character
            listItem.appendChild(bullet);
            listItem.appendChild(document.createTextNode(college));
            listElement.appendChild(listItem);
        });
    }
});
    </script>
</body>
</html>