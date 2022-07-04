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
  background-color: whitesmoke;
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
  color: #19f1e7;
}
nav a.router-link-exact-active {
  color: #3b104e;
}
*{
  font-family: 'Roboto', sans-serif;
  margin:0;
  padding:0;
}
</style>
