$(function () {

	console.log('jquery installed');
	
    $('#mybtn').on('click', function () {
        $('.myheader').toggleClass('bg-dark');
    });
});