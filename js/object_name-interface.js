
$(document).ready(function() {
  $('#bike-form').submit(function() {
    event.preventDefault();
    let manufacturer = $('#manufacturer').val();
    let distance = $('#distance').val();

    $('#manufacturer').val("");
    $('#distance').val("");
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacturer}&location=IP&distance=${distance}&stolenness=stolen`).then(function(response) {
        // $('#solution').text(`${Object.values(response)[0]}`);
        let bikeArray = response.bikes;
        $('#solution').text("");
        for(let i = 0; i <= bikeArray.length; i++) {
        $('#solution').append("<li>" + "Title: " + response.bikes[i].title + "</li>");
        $('#solution').append("<li>" + "Serial: " + response.bikes[i].serial + "</li>");
        $('#solution').append("<li>" + "Manufacturer: " + response.bikes[i].manufacturer_name + "</li>");
        $('#solution').append("<li>" + "Frame Model: " + response.bikes[i].frame_model + "</li>" + "<br>");
      }




        console.log(response.bikes);

    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
