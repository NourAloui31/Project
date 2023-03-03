function getValue() {
    // Get the input element
    var input = document.getElementById("inputValue");

    // Get the value of the input element
    var valeur = input.value;

    // Redirect to the other HTML page with the value as a query parameter
    window.location.href = "game.html?valeur=" + encodeURIComponent(valeur);
}

 // Get the value from the query parameter
 var valeur = decodeURIComponent(window.location.search.replace("?valeur=", ""));
