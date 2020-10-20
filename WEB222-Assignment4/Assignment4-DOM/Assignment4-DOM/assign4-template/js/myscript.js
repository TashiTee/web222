// All you JavaScript code for assignment 4 should be in this file

function appendTableCell(tableElemDom, dataDom, tableDom) {
    var tableDataTag = document.createElement("td");
    tableDataTag.appendChild(dataDom);
    tableElemDom.appendChild(tableDataTag);
    tableDom.appendChild(tableElemDom);
  }

  function addCountries(subtitle, filterFunc, language) {

    var exFunc = function() {
      document.getElementById("subtitle").innerHTML = subtitle;  //doesn't uses innerHTML property for other elements.
      var tableDom = document.getElementById("outputTable");
      const TABLE_BODY_UID = "current_tbody";

      // Removes any previous table body with id set to TABLE_BODY_UID to reset the table:
      var prevTable = document.getElementById(TABLE_BODY_UID);
      if (prevTable != null) {
        tableDom.removeChild(prevTable);
      }
  
      var tableBodyDom = document.createElement("tbody");
      tableBodyDom.id = TABLE_BODY_UID;
      
      for (var countryIndex in countries) {
        var country = countries[countryIndex];
        if (!filterFunc(country)) {
          continue;
        }
        var rowDom = document.createElement("tr");
        var imgTag = document.createElement("img");
        imgTag.alt = country["Code"];
        imgTag.src = "flags/" + country["Code"].toLowerCase() + ".png";
        imgTag.width = 40;
        imgTag.height = 20;
        appendTableCell(rowDom, imgTag, tableBodyDom);
        appendTableCell(rowDom, document.createTextNode(country["Code"]), tableBodyDom);
        appendTableCell(rowDom, document.createTextNode(country["Name"][language]), tableBodyDom);
        appendTableCell(rowDom, document.createTextNode(country["Continent"]), tableBodyDom);
        appendTableCell(rowDom, document.createTextNode(country["AreaInKm2"]), tableBodyDom);
        appendTableCell(rowDom, document.createTextNode(country["Population"]), tableBodyDom);
        appendTableCell(rowDom, document.createTextNode(country["Capital"]), tableBodyDom);
      }

      tableDom.appendChild(tableBodyDom);
    };
    return exFunc;
  }

  window.onload = function() {
    var countryListButton = document.getElementById("menu_1");
    countryListButton.href = "#";  // Removes the assignment.html link to prevent the page from reloading after onclick executes.
    countryListButton.onclick = addCountries("List of Countries and Dependencies", function(country) {
      return true;
    }, "English");
    countryListButton.onclick();  // Displays all countries on page load.

    document.getElementById("menu_21").onclick = addCountries("List of Countries and Dependencies - Population greater than 100 million", function(country) {
      return country.Population != "n/a" && country.Population > 100000000;
    }, "English");

    document.getElementById("menu_22").onclick = addCountries("List of Countries and Dependencies - Population between 1 and 2 million", function(country) {
      return country.Population != "n/a" && country.Population > 100000000 && country.Population < 200000000;
    }, "English");

    document.getElementById("menu_31").onclick = addCountries("List of Countries and Dependencies - Area greater than 1 million Km2, Americas", function(country) {
      return country.Continent == "Americas" && country.AreaInKm2 > 1000000;
    }, "English");

    document.getElementById("menu_32").onclick = addCountries("List of Countries and Dependencies - All countries in Asia", function(country) {
      return country.Continent == "Asia";
    }, "English");

    document.getElementById("menu_41").onclick = countryListButton.onclick;

    for (var i = 2; i <= 8; i++) {

      var langButton = document.getElementById("menu_4" + i);

      //  Converts the button's text to a language key:
      var langKey = langButton.innerText;
      if (langKey == "中文 (Chinese)") {
        langKey = "Chinese";
      }
      if (langKey == "French") {
        langKey = "Franch";  // a4-country-data.js has "French" misspelled as "Franch" (file is unmodifiable).
      }
  
      langButton.onclick = addCountries("List of Countries and Dependencies – Country / Dep. Name in " + langButton.innerText, function(country) {
        return true;
      }, langKey);

    }
  };