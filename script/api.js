//clase 14
const URLPost ="https://jsonplaceholder.typicode.com/posts";
$(".clase14").append('<button id="btn"> obtener post</button>');

$("#btn").click(function (e) { 
  $.get(URLPost, function (response, status) {
    console.log(response);
    console.log(status);
  })
  
});

