"use strict;"

$(document).ready(function () {
    $(".erreurs").hide();

    $("#welcome").html("Bonjour !");

    var moduleCDs = new CDs();
    moduleCDs.chargerCDs();

    var moduleFilms = new Films();
    moduleFilms.chargerFilms();

    var moduleLivres = new Livres();
    moduleLivres.chargerLivres();
});
