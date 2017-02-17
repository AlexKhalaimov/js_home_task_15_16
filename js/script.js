$(function () {
    $("#searchForm").submit(function(){
            mySearch();

            return false;
        });


    function mySearch(){
    var $userInput = $("#dataInput").val();

        $.getJSON(

            "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag="+ $userInput +"&limit=10",
            function(data){
                
                 $("#res").empty();


                if (data.results.length > 0) {
                    parseInt(data.results);
                    $.each(data.results, function(i, tag) {

                        $('#res').append('<figure><img src="' + data.results[i].itemurl + '.gif"><figcaption> "' + data.results[i].title  + '"</figcaption></figure>');
                    });
                }

                else {
                    $('#res').append('<figure><img src="img/404.png"></figure>');
                }

            }
        );
    }

});
