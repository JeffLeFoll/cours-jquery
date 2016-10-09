(function (exports) {
    "use strict;"

    function CDs() {
    }

    exports.CDs = CDs;

    CDs.prototype.chargerCDs = function () {
        $.ajax(new ParamGetJson("http://localhost:8080/cd"))
            .done(json => afficherCDs(json))
            .fail((xhr, status, errorThrown) => gererErreurs(xhr, status, errorThrown));
    };

    function afficherCDs(json) {
        var tableauDeCDs = constructeurDeTableau(json);

        var emplacementCDs = $(".cds");
        emplacementCDs.html("<h2>CDs</h2>")
        emplacementCDs.append(tableauDeCDs);
    };

    function gererErreurs(xhr, status, errorThrown) {
        console.error(errorThrown);
        $(".erreurs").show().html("Erreur lors du chargement des CDs.");
    }

})(this);
