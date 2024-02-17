
let navlist = document.querySelector('.navlist');

$('#mennu-icon').click(function () {
    $('#mennu-icon').hide();
    $('#close').show();
    navlist.style.display = "flex";
})
$('#close').click(function () {
$('#close').hide();
$('#mennu-icon').show();
navlist.style.display = "none"
})
