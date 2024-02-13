<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScholarSearch</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="trifold">
        <div class="column">
            <h2><b>Safety Schools</b></h2>
            <ul>
                <li>CSU San Marcos</li>
                <li>UC Santa Cruz</li>
                <li>UC Santa Barbara</li>
            </ul>
        </div>
        <div class="column">
            <h2><b>Match Schools</b></h2>
            <ul>
                <li>UC San Diego</li>
                <li>UC Irvine</li>
                <li>Pepperdine University</li>
            </ul>
        </div>
        <div class="column">
            <h2><b>Reach Schools</b></h2>
            <ul>
                <li>Princeton University</li>
                <li>Harvard University</li>
                <li>Stanford University</li>
            </ul>
        </div>
    </div>
    <footer>
        <!-- Footer content goes here -->
    </footer>

  <div class="column">
        <h2><b>Searched schools</b></h2>
        <ul id="searched">
            <li onclick="selectSchool(this)">University of Michigan</li>
            <li onclick="selectSchool(this)">University of Texas at Austin</li>
            <li onclick="selectSchool(this)">Cornell University</li>
            <li onclick="selectSchool(this)">University of Washington</li>
            <li onclick="selectSchool(this)">University of Florida</li>
            <li onclick="selectSchool(this)">University of Chicago</li>
        </ul>
        <div class="buttons">
            <button onclick="moveTo('Safety')">Move to Safety</button>
            <button onclick="moveTo('Match')">Move to Match</button>
            <button onclick="moveTo('Reach')">Move to Reach</button>
        </div>
    </div>

    <script>
       var selectedSchool;
        function selectSchool(element) {
            if (selectedSchool) {
                selectedSchool.classList.remove('selected');
            }
            selectedSchool = element;
            selectedSchool.classList.add('selected');
        }
        function moveTo(category) {
            if (!selectedSchool) {
                alert('Please select a school first.');
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
            destinationList.appendChild(selectedSchool);
            selectedSchool.classList.remove('selected');
            selectedSchool = null;
        }
    </script>

</body>

</html>
