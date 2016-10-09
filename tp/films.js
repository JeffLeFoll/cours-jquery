(function (exports) {
    "use strict;"

    function Films() {
    }

    exports.Films = Films;

    Films.prototype.chargerFilms = function () {
        $.ajax(new ParamGetJson("http://localhost:8080/film"))
            .done(json => afficherFilms(json))
            .fail((xhr, status, errorThrown) => gererErreurs(xhr, status, errorThrown));
    };

    function afficherFilms(json) {
        var tableauDeFilms = constructeurDeTableau(json);

        var emplacementFilms = $(".films");
        emplacementFilms.html("<h2>Films</h2>")
        emplacementFilms.append(tableauDeFilms);
    };

    function gererErreurs(xhr, status, errorThrown) {
        console.error(errorThrown);
        $(".erreurs").show().html("Erreur lors du chargement des Films.");
    }

})(this);
