/******************************************
 *  Author : Baris Cem Baykara   
 *  Created On : Sun Mar 11 2018
 *  File : requestHandler.js
 *******************************************/

$(document).ready(function () {

  const url = "http://data.fixer.io/api/";
  const access_key = "?access_key=ea0166aed8162018a4d24d9e951142a4";

  let rate;
  var rates;
  var oldAmount;

  //Request currencies and set to picker-to
  $.ajax({
    url: url + "symbols" + access_key,
    dataType: "jsonp",
    success: function (json) {
      $.each(json.symbols, function (key1, entry) {
        $("#picker-to").append($('<option></option>').attr('value', key1).text(key1));
      })
    },
    fail: function (xhr, statusText, body) {
      console.log(body);
    }
  });
//Request currency rates with base=EUR
  $.ajax({
    url: url + "latest" + access_key,
    dataType: "jsonp",
    success: function (json) {
      rates = json.rates;
    }
  });

  $("#search-button").click(function () {
    let symbol = $("#picker-to").val();
    rate = rates[symbol]
    if ($("#picker-to").val() != "default" && $.isNumeric($("#textField").val())) {
      $("#resultText").text($("#textField").val() * rate);
      oldAmount = $("#textField").val();
    }
  });

  $("#switch-button").click(function () {
    if ($("#picker-to").val() != "default" && $.isNumeric($("#textField").val())) {

    }
  });
});