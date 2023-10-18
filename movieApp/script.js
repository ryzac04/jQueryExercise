
$("form").on("submit", function (e) {
  e.preventDefault();
  let $movie = $("#movie").val();
  let $rating = $("#rating").val();
  let movieData = `${$movie} : ${$rating}/10`

  let $movieP = $("<p>").html(movieData).addClass("movie-data");
  $("<button>").text("X").addClass("rmvButton").appendTo($movieP);
  $("#movieContainer").append($movieP);

  $("#movieContainer").on("click", ".rmvButton", function () {
    $(this).parent().remove();
  }) 

  $('input').val('');
})

