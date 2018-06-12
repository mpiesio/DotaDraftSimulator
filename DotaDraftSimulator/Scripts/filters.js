$(document).ready(function () {
    $("input[type='checkbox']").checkboxradio({ icon: false });
    var heroImages = $('#all-heroes-div .hero-img');

    $('#melee-checkbox').change(function () {
        if ($(this).is(':checked')) {
            $('#ranged-checkbox').prop('checked', false).checkboxradio('refresh');
            heroImages.each(function () {
                if ($(this).attr('data-attack-type') !== "Melee") {
                    $(this).addClass('filtered-out');
                }
                else {
                    $(this).removeClass('filtered-out');
                }
            });
        }
        else {
            heroImages.removeClass('filtered-out');
        }
    });

    $('#ranged-checkbox').change(function () {
        if ($(this).is(':checked')) {
            $('#melee-checkbox').prop('checked', false).checkboxradio('refresh');
            heroImages.each(function () {
                if ($(this).attr('data-attack-type') !== "Ranged") {
                    $(this).addClass('filtered-out');
                }
                else {
                    $(this).removeClass('filtered-out');
                }
            });
        }
        else {
            heroImages.removeClass('filtered-out');
        }
    });

});