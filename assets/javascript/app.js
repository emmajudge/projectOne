// The below code fills in the first row of the table 
// var proxy = "https://cors-anywhere.herokuapp.com/";

var queryURL = "https://strainapi.evanbusse.com/cpTeJEf/strains/search/all";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    
    // testing / debugging
    console.log(response);
    console.log(Object.keys(response).length);

    for (var i = 0; i < 5; i++) {

        var strainID = Math.ceil(Math.random() * Object.keys(response).length) + 1;

        for (key in response) {

            // console.log("loop: ", response[key])

            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text

            var tr = $("<tr>");
            tr.addClass("strain-row");
            tr.attr("name", key);
            var name = $("<td scope='col'>").text(key);
            var id = $("<td scope='col'>").text(response[key].id);
            var race = $("<td scope='col'>").text(response[key].race);
            var flavors = $("<td scope='col'>").text(response[key].flavors);
            var effectsPos = $("<td scope='col'>").text(response[key].effects.positive);
            // var effectsNeg = $("<td scope='col'>").text(response[key].effects.negative);
            // var effectsMed = $("<td scope='col'>").text(response[key].effects.medical);


            console.log(strainID);

            if (response[key].id === strainID) {
                tr.append(name);
                // tr.append(id)
                tr.append(race);
                tr.append(flavors);
                tr.append(effectsPos);
                // tr.append(effectsNeg);
                // tr.append(effectsMed);

                // Append the table row to the table body
                $("tbody").append(tr);   
            }

        }
    }
})

