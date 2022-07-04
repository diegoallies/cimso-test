<template>
  <nav>
    <router-link to="/">Bookings</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  text-decoration: none;
  }
nav a:hover {
  font-weight: 100;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #e68d22;
}
*{
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding:0;
}
</style>
