---
layout: page
title: Profile
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #daeaf6;
        }
        .profile-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .profile-picture {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
        .profile-picture img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
        }
        .profile-form {
            margin-bottom: 20px;
        }
        .profile-form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .profile-form input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        .profile-info {
            margin-bottom: 20px;
        }
        .profile-info div {
            margin-bottom: 10px;
        }
        .profile-info label {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="profile-container">
        <div class="profile-picture">
            <img src="profile_placeholder.png" alt="Profile Picture">
        </div>
        <div class="profile-form">
            <h2>Update Username and Password</h2>
            <form id="update-form">
                <input type="text" id="new-username" placeholder="New Username">
                <input type="password" id="new-password" placeholder="New Password">
                <input type="submit" value="Update">
            </form>
        </div>
        <div class="profile-info">
            <h2>Profile Information</h2>
            <div>
                <label for="graduation-year">Graduation Year from High School:</label>
                <span id="graduation-year">2024</span>
            </div>
            <div>
                <label for="birthday">Birthday:</label>
                <span id="birthday">September 8, 2005</span>
            </div>
            <div>
                <label for="full-name">Name:</label>
                <span id="full-name">John Doe</span>
            </div>
        </div>
    </div>
    <script>
        document.getElementById('update-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            // Get new username and password values
            var newUsername = document.getElementById('new-username').value;
            var newPassword = document.getElementById('new-password').value;
            // Update profile information
            document.getElementById('full-name').textContent = newUsername;
            // You can add more logic to update other profile information as well
            // For now, let's assume only the username is updated
            // Reset form fields
            document.getElementById('new-username').value = '';
            document.getElementById('new-password').value = '';
        });
    </script>
</body>
</html>
