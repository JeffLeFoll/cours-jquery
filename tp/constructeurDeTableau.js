(function (exports) {
    "use strict;"

    function creerConstructeurDeTableau() {
        return function (json) {
            var tableau = "<table>";
            tableau += construireEnTeteTableau(json[0]);
            tableau += construireContenuTableau(json);
            tableau += "</table>";

            return tableau;
        }
    }

    exports.constructeurDeTableau = creerConstructeurDeTableau();

    function construireEnTeteTableau(objet) {
        var enTeteTableau = "<tr>";
        var proprietes = Object.keys(objet);

        proprietes.forEach(function (element) {
            if (element !== "id") {
                enTeteTableau += "<th>" + element + "</th>"
            }
        });
        enTeteTableau += "</tr>"

        return enTeteTableau;
    }

    function construireContenuTableau(json) {
        var contenuTableau = "";
        var proprietes = Object.keys(json[0]);

        json.forEach(function (element) {
            contenuTableau += "<tr>";

            proprietes.forEach(function (nom) {
                if (nom !== "id") {
                    contenuTableau += "<td>";
                    if (nom === "prix") {
                        contenuTableau += element.prix.valeur + " " + element.prix.devise;

                    } else if (nom === "couverture" || nom === "jaquette") {
                        contenuTableau += '<img src="' + element[nom] + '">';

                    } else {
                        contenuTableau += element[nom];
                    }
                    contenuTableau += "</td>";
                }
            });
            contenuTableau += "</tr>";
        });
        return contenuTableau;
    }

})(this);