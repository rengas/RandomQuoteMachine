$( "#getit" ).click(function() {
   console.log("dsad");
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', 
    type: 'POST', // The HTTP Method
    data: {}, // Additional parameters here
    datatype: 'json',
    success: function(data) { 
      var JSONObject = JSON.parse(data);
      var quote =JSONObject['quote'];
      var author =JSONObject['author'];
      $("#quote").empty();
      $("#author").empty();
      $("#quote").text(quote);
      $("#author").text("-"+author);
    },
    error: function(err) { console.log(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", ""); // Enter here your Mashape key
    }
});

 
});
