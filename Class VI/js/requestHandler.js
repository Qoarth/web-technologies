/******************************************
 *  Author : Baris Cem Baykara   
 *  Created On : Sun Mar 11 2018
 *  File : requestHandler.js
 *******************************************/

$(document).ready(function () {

  const url = "http://data.fixer.io/api/";
  const access_key = "?access_key=ea0166aed8162018a4d24d9e951142a4";

  var symbols;
  var rates;
  let rate;
  let isEur = true;
  let tmpTo;
  var oldAmount;

  //Request currencies and set to picker-to
  $.ajax({
    url: url + "symbols" + access_key,
    dataType: "jsonp",
    success: function (json) {
      symbols = json.symbols
      $.each(symbols, function (key1, entry) {
        if (key1 == "EUR") {
          $("#picker-from").append($('<option></option>').attr('value', key1).text(key1));
          $("#picker-to").append($('<option></option>').attr('value', key1).text(key1));
        } else {
          $("#picker-to").append($('<option></option>').attr('value', key1).text(key1));
          $("#picker-from").append($('<option disabled = true></option>').attr('value', key1).text(key1));
        }
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
    if ($("#picker-to").val() != null && $.isNumeric($("#textField").val()) && isEur) {
      rate = rates[$("#picker-to").val()];
      $("#resultText").text($("#textField").val() * rate);
    }else if ($("#picker-to").val() != null && $.isNumeric($("#textField").val()) && !isEur){
      rate = rates[tmpTo];
      $("#resultText").text($("#textField").val() / rate);
    }
  });

  $(document).keyup(function(event) {
    if (event.keyCode == 13) {
     $("#search-button").click();
    }
})

  $("#switch-button").click(function () {
    if ($("#picker-to").val() != null) {
      let tmp = $("#picker-from").val();
      if (isEur) {
        $("#picker-from").val($("#picker-to").val()).change();
        $('#picker-from').attr('disabled', true);
        $('#picker-to').attr('disabled', true);
        tmpTo = $("#picker-to").val();
        $("#picker-to").val(tmp).change();
        isEur = false;
      } else {
        $("#picker-from").val("EUR").change();
        $('#picker-from').attr('disabled', false);
        $('#picker-to').attr('disabled', false);
        $("#picker-to").val(tmpTo).change();
        isEur = true;
      }
    }
    $("#search-button").click()
  });
});