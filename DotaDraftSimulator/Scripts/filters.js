$(document).ready(function () {
    $("#filters input[type='checkbox']").checkboxradio({ icon: false });
    var heroImages = $('#all-heroes-div .hero-img');
    var name = "";
    var nameTimeout;
    var launchFilterTimeout;

    function checkboxFilter() {
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
            if (attackOk && carryOk && midOk && offlaneOk && supportOk && img.css('opacity') !== 1 && !img.hasClass("gray")) img.fadeTo(500, 1);
            else if (img.css('opacity') !== 0.2 && !img.hasClass("gray")) img.fadeTo(500, 0.2);
        });

        heroImages.click(function() {
            var img = $(this);
            img.fadeTo(0, 1);
        })

    };

    function nameFilter() {
        var processedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        heroImages.not("[title^='" + processedName + "']").each(function() {
            if (!($(this).hasClass("gray"))) $(this).fadeTo(500, 0.2);
        });
        heroImages.filter("[title^='" + processedName + "']").each(function () {
            if (!($(this).hasClass("gray"))) $(this).fadeTo(500, 1);
        });
    }

    function showName()
    {
        $('#typed-hero-name').text(name).fadeTo(500, 0.7);
        clearTimeout(nameTimeout);
        nameTimeout = setTimeout(function () {
            $('#typed-hero-name').fadeTo(500, 0);
        }, 1000);
    };

    function setUpFiltering()
    {
        clearTimeout(launchFilterTimeout);
        launchFilterTimeout = setTimeout(function () {
            if (name.length === 0) checkboxFilter();
            else nameFilter();
        }, 400);
    }



    $(document).keydown(function(e) {
        if (e.which === 8) {
            if (name.length > 0) {
                name = name.substr(0, name.length - 1);
                showName();
                setUpFiltering();
            }
        }
    });

    $(document).keypress(function (e) {
        name += String.fromCharCode(e.which);
        name = name.charAt(0).toUpperCase() + name.slice(1);
        showName();
        setUpFiltering();
    });

    function attackRadioFunctionality(event) {
        if ($(this).is(':checked')) {
            event.data.other.prop('checked', false).checkboxradio('refresh');
        }
    };

    $('#melee-checkbox').change({ other: $('#ranged-checkbox')}, attackRadioFunctionality);
    $('#ranged-checkbox').change({ other: $('#melee-checkbox')}, attackRadioFunctionality);
    $("#filters input[type='checkbox']").change(setUpFiltering);

    
});