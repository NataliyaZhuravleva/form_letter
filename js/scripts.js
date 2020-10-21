$(document).ready(function () {
  $("#form_one").submit(function (event) {
    const firstName = $("input#first_name").val();
    const lastName = $("input#last_name").val();
    
    $(".person").text(firstName);
    $(".person").append(" ");
    $(".person").append(lastName);
    $(".hidden").show();
    event.preventDefault();
  })
});