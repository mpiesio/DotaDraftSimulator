$(document).ready(function () {
    var selectedHero = $("#selectedHero");
    var selectedHeroName = $('#selectedHeroName');
    var selectedHeroImg = $('#selectedHeroImg');
    var mainAttributeImg = $('#main-attribute-img');
    var attackTypeImg = $('#attack-type-img');
    var carryImg = $('#carry-img');
    var midImg = $('#mid-img');
    var offlaneImg = $('#offlane-img');
    var supportImg = $('#support-img');
    var heroImages = $('#all-heroes-div .hero-img');
    var currentHero;


    heroImages.hover(function() {
        $(this).addClass('hero-hover');
    }, function () {
        $(this).removeClass('hero-hover');
    });

    heroImages.click(function () {
        var img = $(this);
        if (img.attr('title') !== currentHero) {
            currentHero = img.attr('title');
            selectedHero.hide('slide',
                { direction: 'right' },
                500,
                function() {
                    var src = img.attr('src');
                    var name = img.attr('title');
                    selectedHeroName.text(name);
                    selectedHeroImg.attr('src', src);
                    mainAttributeImg.attr('src', "../Images/Attributes/" + img.attr('data-main-attribute') + ".png");
                    attackTypeImg.attr('src', "../Images/Attack/" + img.attr('data-attack-type') + ".png");
                    carryImg.attr('src', "../Images/Stars/Star" + img.attr('data-carry') + ".png");
                    midImg.attr('src', "../Images/Stars/Star" + img.attr('data-mid') + ".png");
                    offlaneImg.attr('src', "../Images/Stars/Star" + img.attr('data-offlane') + ".png");
                    supportImg.attr('src', "../Images/Stars/Star" + img.attr('data-support') + ".png");
                    if (img.hasClass("gray")) {
                        $("#decision-button").prop("disabled", true);
                    }
                    selectedHero.stop().css('visibility', 'visible').hide().show('slide', { direction: 'right' }, 500);
                });
        }
        
    });
});