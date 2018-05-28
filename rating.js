$(document).ready(function () {
    try {
          $('div[id^="divOuterRating_"]').each(
                        function () {
                            var name = this.id;
                            name = name.replace('divOuterRating_', 'divBewertung_')
                            $(this).mouseenter(function () { $('#' + name).show(); }
                                ).mouseleave(function () {
                                    $('#' + name).hide();
                                })
                                                 });
    }catch(err){
        alert(err.message);
    }
});


function setRating(KettID, menueid, speiseid, speise, rate, depth) {
    try {
        //Klasse zurücksetzen
        $('#ul_' + speiseid).removeClass('onestar');
        $('#ul_' + speiseid).removeClass('twostar');
        $('#ul_' + speiseid).removeClass('threestar');
        $('#ul_' + speiseid).removeClass('fourstar');
        $('#ul_' + speiseid).removeClass('fivestar');

        //Auswahl anzeigen
        if (rate == '20') {
            if ($('#V2').hasClass('onestar')) {
                $('#ul_' + speiseid).addClass('nostar');
            } else {
                $('#ul_' + speiseid).addClass('onestar');
            }
        }
        else if (rate == '40') {
            if ($('#V2').hasClass('twostar')) {
                $('#ul_' + speiseid).addClass('nostar');
            } else {
                $('#ul_' + speiseid).addClass('twostar');
            }
        }
        else if (rate == '60') {
            if ($('#V2').hasClass('threestar')) {
                $('#ul_' + speiseid).addClass('nostar');
            } else {
                $('#ul_' + speiseid).addClass('threestar');
            }
        }
        else if (rate == '80') {
            if ($('#V2').hasClass('fourstar')) {
                $('#ul_' + speiseid).addClass('nostar');
            } else {
                $('#ul_' + speiseid).addClass('fourstar');
            }
        }
        else if (rate == '100') {
            if ($('#V2').hasClass('fivestar')) {
                $('#ul_' + speiseid).addClass('nostar');
            } else {
                $('#ul_' + speiseid).addClass('fivestar');
            }
        }

        //Reload hinzufügen
        $('#divOuterRating_' + menueid).mouseleave(function () {
            UpdatePage(menueid);
        });

        var such = { 'pv_strKETTID': KettID, 'pv_strSpeise': speise, 'pv_strRating': rate };
        var path = "../Webservice/MensaMax_Tools.asmx/SaveRating";
        if (depth == 2) {
            path = "../../Webservice/MensaMax_Tools.asmx/SaveRating";
            console.log("depth = 2");
        }
        $.ajax(
        {
            type: "POST",
            async: false,
            url: path,
            data: JSON.stringify(such),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                result = msg.d;
            },
            error: function (e) {
                alert('1' + e);
            }
        });
    } catch (ex) {
        alert(ex.message);
    }
   
}

function UpdatePage(menueid) {
    //alert('Leave');
    //window.location = window.location;
    $('#divBewertung_' + menueid).hide();
    console.log(document.location.toString())
    var page = document.location.toString();
    if (page.indexOf("#") == -1) {
        page = page;
    } else {
        page = page.replace("#", "");
    }
    //document.location.reload(true);
    document.location = page;
}