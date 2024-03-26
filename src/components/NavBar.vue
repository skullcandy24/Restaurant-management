<template>
  <div>
    <div class="navbar">
      <img src="../assets/logo.png" alt="Logo" />
      <a href="#"><i class="fas fa-phone fa-rotate-90"></i>Contact Us</a>
      <a href="#"><i class="fas fa-shopping-cart"></i>Order Now !</a>
      <a href="#"><i class="fas fa-utensils"></i>Our Menu</a>
      <a href="#"><i class="fas fa-home icon"></i>Home</a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
}

/* Styling the navbar */
.navbar {
  background-color: lightblue;
  overflow: hidden;
}
.navbar img {
  float: left;
  height: 80px; /* Adjust height as needed */
  margin-right: 50px; /* Adjust margin as needed */
}

/* Style the links inside the navbar */
.navbar a {
  float: right;
  display: block;
  color: Black;
  text-align: center;
  padding: 28px 20px;
  text-decoration: none;
}
.navbar a i {
  padding-right: 3px;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
  height: 80px;
}
</style>
