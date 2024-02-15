---
layout: default
title: Profile
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <style>
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
            <!--img src="profile_placeholder.png" alt="Profile Picture"-->
        </div>
        <div class="profile-form">
            <h2>Login</h2>
            <form id="login-form">
                <input type="text" id="username" placeholder="Username">
                <input type="password" id="password" placeholder="Password">
                <input type="submit" value="Login">
            </form>
        </div>
        <div class="profile-form">
            <h2>Sign Up</h2>
            <form id="signup-form">
                <input type="text" id="sign-username" placeholder="Username">
                <input type="password" id="sign-password" placeholder="Password">
                <input type="password" id="confirm-password" placeholder="Confirm Password">
                <input type="submit" value="Sign Up">
            </form>
        </div>
    </div>
<script src="{{ site.baseurl }}/assets/common/js/script.js"></script>
</body>
</html>
