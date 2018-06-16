$(document).ready(function () {
    var decisionButton = $("#decision-button");
    var phasePicks = false;
    var banNumber = 1;
    var pickNumber = 1;

    decisionButton.click(function () {
        var imgSrc = $("#selectedHeroImg").attr('src');
        if (phasePicks) {
            $("#radiant-pick-" + pickNumber + " img").attr('src', imgSrc).css('visibility', 'visible');
            if (pickNumber === 5) decisionButton.prop("disabled", true);
            pickNumber++;
        }
        else {
            $("#radiant-ban-" + banNumber + " img").attr('src', imgSrc).css('visibility', 'visible');
            $("#radiant-ban-" + banNumber).addClass('gray');
            
            banNumber++;
        }
        $(".hero-img[title='" + $("#selectedHeroName").text() + "']").addClass('gray');
        $("#selectedHero").hide('slide', { direction: 'right' }, 750, function() {
            $(this).css("visibility", "hidden").css("display", "block");
            if (!phasePicks && (banNumber === 4 || banNumber === 6 || banNumber === 7)) {
                phasePicks = true;
                decisionButton.toggleClass("btn-danger").toggleClass("btn-success").html("Pick");
            }
            else if (phasePicks && (pickNumber === 3 || pickNumber === 5)) {
                phasePicks = false;
                decisionButton.toggleClass("btn-danger").toggleClass("btn-success").html("Ban");
            }
        });
    });
});