$(document).ready(function () {
    var decisionButton = $("#decision-button");
    var phasePicks = false;
    var banNumber = 1;
    var pickNumber = 1;


    function direBan(val)
    {
        var availableHeroes = $(".hero-img").not(".gray");
        var ban = availableHeroes.eq(Math.floor(Math.random() * availableHeroes.length));
        decisionButton.prop("disabled", true);
        setTimeout(function() {
                $(".hero-img[title='" + ban.attr('title') + "']").addClass('gray');
                $("#dire-ban-" + val + " img").attr('src', ban.attr('src')).css('visibility', 'visible');
                $("#dire-ban-" + val).addClass('gray');
                decisionButton.prop("disabled", false);
            },
            Math.random() * 5000 + 1000);
    }

    function direPick(val) {
        var availableHeroes = $(".hero-img").not(".gray");
        var ban = availableHeroes.eq(Math.floor(Math.random() * availableHeroes.length));
        decisionButton.prop("disabled", true);
        setTimeout(function () {
                $(".hero-img[title='" + ban.attr('title') + "']").addClass('gray');
                $("#dire-pick-" + val + " img").attr('src', ban.attr('src')).css('visibility', 'visible');
                decisionButton.prop("disabled", false);
            },
            Math.random() * 5000 + 1000);
    }

    decisionButton.click(function () {
        var imgSrc = $("#selectedHeroImg").attr('src');
        if (phasePicks) {
            if (pickNumber === 3) direPick(3);
            if (pickNumber === 4) direPick(4);
            $("#radiant-pick-" + pickNumber + " img").attr('src', imgSrc).css('visibility', 'visible');
            if (pickNumber === 5) {
                decisionButton.prop("disabled", true);
                direPick(5);
            }
            if (pickNumber === 4) direBan(6);
            if (pickNumber === 1) {
                direPick(1);
                direPick(2);
            }
            pickNumber++;
        }
        else {
            
            $("#radiant-ban-" + banNumber + " img").attr('src', imgSrc).css('visibility', 'visible');
            $("#radiant-ban-" + banNumber).addClass('gray');
            if (banNumber !== 6) direBan(banNumber);
            banNumber++;

        }
        $(".hero-img[title='" + $("#selectedHeroName").text() + "']").addClass('gray');
        $("#selectedHero").hide('slide', { direction: 'right' }, 500, function() {
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