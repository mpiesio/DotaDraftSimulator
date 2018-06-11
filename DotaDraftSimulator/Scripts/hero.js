$(document).ready(function() {
    var selectedHeroName = $('#selectedHeroName');
    var selectedHeroImg = $('#selectedHeroImg');
    var mainAttributeImg = $('#main-attribute-img');
    var attackTypeImg = $('#attack-type-img');
    var carryImg = $('#carry-img');
    var midImg = $('#mid-img');
    var offlaneImg = $('#offlane-img');
    var supportImg = $('#support-img');


    $('.hero-img').click(function() {
        var img = $(this);
        $("#selectedHero").removeAttr('hidden');
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
    });
});