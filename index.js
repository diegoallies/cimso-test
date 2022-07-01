import fetch from "node-fetch";

fetch("https://apitest.cimsoweb.com/api/innterchange/unit_type_info_request")
  .then((res) => res.json())
  .then((pokemonList) => {

  console.log(pokemonList);

    

  });

  function getData(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
}    
