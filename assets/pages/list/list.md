<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScholarSearch</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .selected {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div class="trifold">
        <div class="column">
            <h2><b>Safety Schools</b></h2>
            <ul id="safety"></ul>
        </div>
        <div class="column">
            <h2><b>Match Schools</b></h2>
            <ul id="match"></ul>
        </div>
        <div class="column">
            <h2><b>Reach Schools</b></h2>
            <ul id="reach"></ul>
        </div>
    </div>
    <footer>
        <!-- Footer content goes here -->
    </footer>
    <div class="column">
        <h2><b>Searched schools</b></h2>
        <ul id="searched">
            <li onclick="toggleSelect(this)">University of Michigan</li>
            <li onclick="toggleSelect(this)">University of Texas at Austin</li>
            <li onclick="toggleSelect(this)">Cornell University</li>
            <li onclick="toggleSelect(this)">University of Washington</li>
            <li onclick="toggleSelect(this)">University of Florida</li>
            <li onclick="toggleSelect(this)">University of Chicago</li>
        </ul>
        <div class="buttons">
            <button onclick="moveTo('Safety')">Move to Safety</button>
            <button onclick="moveTo('Match')">Move to Match</button>
            <button onclick="moveTo('Reach')">Move to Reach</button>
        </div>
    </div>
    <script>
        var selectedSchools = [];
        function toggleSelect(element) {
            if (selectedSchools.includes(element)) {
                selectedSchools = selectedSchools.filter(item => item !== element);
                element.classList.remove('selected');
            } else {
                selectedSchools.push(element);
                element.classList.add('selected');
            }
        }
        function moveTo(category) {
            if (selectedSchools.length === 0) {
                alert('Please select at least one school first.');
                return;
            }
            var destinationList;
            if (category === 'Safety') {
                destinationList = document.getElementById('safety');
            } else if (category === 'Match') {
                destinationList = document.getElementById('match');
            } else if (category === 'Reach') {
                destinationList = document.getElementById('reach');
            }
            selectedSchools.forEach(function (school) {
                destinationList.appendChild(school);
                school.classList.remove('selected');
            });
            selectedSchools = [];
        }
    </script>
</body>
</html>
