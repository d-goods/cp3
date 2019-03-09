document.getElementById("cryptoSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("cryptoInput").value.toUpperCase();
    if (value === "")
      return;
    console.log(value);

    const url = "https://api.pro.coinbase.com/products/" + value + "-USD";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";
        results += "<div class=\"cryptoName\">";
        results += '<h2>Base Pair: ' + json.display_name + "</h2>";
        results += '<h2>Min Transaction: ' + json.base_min_size + json.base_currency + "</h2>";
        results += '<h2>Max Transaction: ' + json.base_max_size + json.base_currency + "</h2>";
        results += '<h2>Min to Max Funds per Trade: ' + json.min_market_funds + "-" + json.max_market_funds + "</h2>";
        results += "</div>";
        // results += "<div class=\"cryptoSymbol\">";
        // results += '<h2 id=\"sym\">Symbol: ' + json.symbol + "</h2>";
        // results += "</div>";
        // results += "<div class=\"midtext\">";
        // results += '<h1>:</h1>';
        // results += "</div>";
        // results += "<div class=\"rightstuff\">";
        // for (let i=0; i < json.weather.length; i++) {
        //   results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        // }
        // results += '<h2>' + json.main.temp + " &deg;F</h2>"
        // results += "<p>"
        // for (let i=0; i < json.weather.length; i++) {
        //   results += json.weather[i].description
        //   if (i !== json.weather.length - 1)
        //     results += ", ";
        // }
        // results += "</p>";
        // results += "</div>";
        document.getElementById("fill").innerHTML = results;
      });
  });
