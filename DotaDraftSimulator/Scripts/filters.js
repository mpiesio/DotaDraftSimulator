﻿$(document).ready(function () {
    $("#filters input[type='checkbox']").checkboxradio({ icon: false });
    var heroImagesAll = $('#all-heroes-div .hero-img');
    var name = "";

    var filterFunc = function () {
        var heroImages = heroImagesAll;
        var attackOk = false;
        var attackTmp = $("#attack-type-checkbox-div .ui-checkboxradio-checked").length === 0;
        var attackName = $("#attack-type-checkbox-div .ui-checkboxradio-checked").prev().attr('name');

        var carryOk = false;
        var carryBoxes = $("#carry-checkbox-div .ui-checkboxradio-checked");
        var carryTmp = carryBoxes.length === 0;

        var midOk = false;
        var midBoxes = $("#mid-checkbox-div .ui-checkboxradio-checked");
        var midTmp = midBoxes.length === 0;

        var offlaneOk = false;
        var offlaneBoxes = $("#offlane-checkbox-div .ui-checkboxradio-checked");
        var offlaneTmp = offlaneBoxes.length === 0;

        var supportOk = false;
        var supportBoxes = $("#support-checkbox-div .ui-checkboxradio-checked");
        var supportTmp = supportBoxes.length === 0;

        if (name.length !== 0) {
            heroImages.not("#all-heroes-div .hero-img[title^='" +
                name.charAt(0).toUpperCase() +
                name.slice(1).toLowerCase() +
                "']").fadeTo(500, 0.2);

            heroImages = $("#all-heroes-div .hero-img[title^='" +
                name.charAt(0).toUpperCase() +
                name.slice(1).toLowerCase() +
                "']");
        }

        heroImages.each(function () {
            var img = $(this);
            attackOk = attackTmp;
            carryOk = carryTmp;
            midOk = midTmp;
            offlaneOk = offlaneTmp;
            supportOk = supportTmp;
            if (!attackTmp) attackOk = img.attr('data-attack-type') === attackName;
            if (!carryTmp) carryBoxes.each(function () {
                if ($(this).prev().attr('id').slice(-1) === img.attr('data-carry')) carryOk = true;
            });
            if (!midTmp) midBoxes.each(function () {
                if ($(this).prev().attr('id').slice(-1) === img.attr('data-mid')) midOk = true;
            });
            if (!offlaneTmp) offlaneBoxes.each(function () {
                if ($(this).prev().attr('id').slice(-1) === img.attr('data-offlane')) offlaneOk = true;
            });
            if (!supportTmp) supportBoxes.each(function () {
                if ($(this).prev().attr('id').slice(-1) === img.attr('data-support')) supportOk = true;
            });
            if (attackOk && carryOk && midOk && offlaneOk && supportOk && img.css('opacity') !== 1) img.fadeTo(500, 1);
            else if (img.css('opacity') !== 0.2) img.fadeTo(500, 0.2);
        });

    };

    $(document).keydown(function(e) {
        if (e.which === 8) {
            if (name.length > 0) {
                name = name.substr(0, name.length - 1);
                filterFunc();
            }
        }
    });

    $(document).keypress(function (e) {
        name += String.fromCharCode(e.which);
        filterFunc();
    });

    var filterAttack = function (event) {
        if ($(this).is(':checked')) {
            event.data.other.prop('checked', false).checkboxradio('refresh');
        }
    };

    

    $('#melee-checkbox').change({ other: $('#ranged-checkbox')}, filterAttack);
    $('#ranged-checkbox').change({ other: $('#melee-checkbox')}, filterAttack);
    $("#filters input[type='checkbox']").change(filterFunc);

    
});