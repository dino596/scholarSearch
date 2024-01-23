---
layout: page
title: My List
---

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScholarSearch</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: lightblue;
            display: flex;
            flex-direction: column; 
            align-items: center; 
            min-height: 100vh; 
        }
        header {
            background-color: #daeaf6;
            color: black;
            padding: 10px;
            text-align: center;
            width: 100%;
        }
        h1 {
            margin: 0;
        }
        .trifold {
            display: flex;
            gap: 20px; 
            margin-top: 20px; 
            flex: 1; 
        }
        .column {
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            overflow: hidden;
            padding: 20px;
            width: 100%; 
            max-width: 300px; 
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            width: 100%;
            position: fixed;
            bottom: 0;
        }
        .column h2 {
            text-align: center;
        }
        .column ul {
            list-style-type: disc;
            margin-left: 20px;
            padding: 0;
        }
        .column li {
            margin-bottom: 10px;
        }
    </style>
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

</body>

</html>
