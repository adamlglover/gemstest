$(document).ready(function() {
  $(".jq-signup-form").submit(function(event) {
    var zip = $(".jq-zip").val();
    if (zip) {
      geocoder(zip);
      return false; 
    } else {
      return true;
    }
  });
});

function geocoder(address) {
  var form$ = $(".jq-signup-form");
  $.ajax({
    dataType: "json",
    url: "https://maps.googleapis.com/maps/api/geocode/json?sensor=false",
    data: { "address": address },
    success: function(data, textStatus){
      var formatedLocation = data.results[0].address_components[1].long_name + ", " + data.results[0].address_components[3].short_name;
      form$
        .append("<input type='hidden' name='user[longitude]' value='"+data.results[0].geometry.location.lng+"' />")
        .append("<input type='hidden' name='user[latitude]' value='"+data.results[0].geometry.location.lat+"' />")
        .append("<input type='hidden' name='user[location]' value='"+formatedLocation+"' />");
      // submit
      form$.get(0).submit();
    }, 
    error: function(){
      $(".submit-button").removeAttr("disabled");
      $(".jq-geocode-error").html("An error occured determining your location. Please try again.");
    }
  });
};



