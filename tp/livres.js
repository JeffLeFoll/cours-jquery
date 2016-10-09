(function (exports) {
    "use strict;"

    function Livres() {
    }

    exports.Livres = Livres;

    Livres.prototype.chargerLivres = function () {
        $.ajax(new ParamGetJson("json/livres.json"))
            .done(json => afficherLivres(json))
            .fail((xhr, status, errorThrown) => gererErreurs(xhr, status, errorThrown));
    };

    function afficherLivres(json) {
        var tableauDeLivres = constructeurDeTableau(json);

        var emplacementLivres = $(".livres");
        emplacementLivres.html("<h2>Livres</h2>")
        emplacementLivres.append(tableauDeLivres);
    };

    function gererErreurs(xhr, status, errorThrown) {
        console.error(errorThrown);
        $(".erreurs").show().html("Erreur lors du chargement des Livres.");
    }

})(this);
