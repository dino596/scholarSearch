---
layout: default
title: Scholar Search
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/common/css/style.css">
</head>
<body>
<header>
<<<<<<< HEAD
        <h1 id="welcome" style="margin: 0;"><b>Welcome!</b></h1>
=======
    <h1 style="margin: 0;"><b>Welcome _____!</b></h1>
>>>>>>> f6485c9c1896ba83e937217831fbb68404345c1e
</header>
<section id="deadlines">
    <h2><b>Upcoming Deadlines:</b></h2>
    <ul>
        <li>Harvard University - Jan 2</li>
        <li>Princeton University - Jan 1</li>
        <li>UCLA - Nov 30</li>
    </ul>
</section>

<<<<<<< HEAD
   <section id="recommended">
        <h2><b>Recommended For You:</b></h2>
         <ul>
            <li>Breaking News: Harvard President Resigns</li>
            <li>Article: The Secret Behind College Admissions</li>
            <li>Podcast: Yale Admissions Officers Discussion</li>
        </ul>
    </section>
<script src="{{ site.baseurl }}/assets/common/js/script.js"></script>
<script>
    
=======
<section id="recommended">
    <h2><b>Recommended For You:</b></h2>
    <ul id="articlesList"></ul>
</section>

<!-- JavaScript code for fetching and displaying articles -->
<script>
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8199/articles/articlesList", requestOptions)
        .then(response => response.json()) // Assuming the data is in JSON format
        .then(result => {
            // Display the fetched data in the articlesList ul
            const articlesList = document.getElementById("articlesList");
            result.forEach(article => {
                const li = document.createElement("li");
                li.innerHTML = `<b>${article.title}</b> by ${article.author} - <a href="${article.link}">Read More</a>`;
                articlesList.appendChild(li);
            });
        })
        .catch(error => console.log('error', error));
>>>>>>> f6485c9c1896ba83e937217831fbb68404345c1e
</script>
</body>
</html>
