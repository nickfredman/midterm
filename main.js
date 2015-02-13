var langs = ["javascript", "jquery"];
var diff, currentLang;


$(document).on('ready', function() {
    $(document).on('click', '.lang-box', function() {
        $('#modal').modal('show');
        currentLang = $(this).find('.language').text();
        console.log(currentLang);
    });
    $(document).on('click', '.easy-mode', function() {
        diff = 'easy';
    });
    $(document).on('click', '.medium-mode', function() {
        diff = 'medium';
    });
    $(document).on('click', '.hard-mode', function() {
        diff = 'hard';
    });
    $(document).on('click', '.signup', function(){
        $('#signup').modal('show');
    });
});
