
//############### "Beginn des Dokuments" ###############
$(document).ready(function () {

    var arrNamen = new Array();
    arrNamen[0] = 'btnSpeichern';
    arrNamen[1] = 'btnSave';
    arrNamen[2] = 'btnUebernehmen';
    //arrNamen[3] = 'btnDrucken';
    arrNamen[4] = 'btnRechnung';
    arrNamen[5] = 'Button1';
    arrNamen[6] = 'btnSaveFoto';
    arrNamen[7] = 'btnPWSpeichern';
    arrNamen[8] = 'btnUploadDoc';
    arrNamen[9] = 'btnAktualisieren';
    arrNamen[10] = 'btnCheck';
    arrNamen[11] = 'btnCalc';
    arrNamen[12] = 'btnSuchen';
    for (var i = 0; i < arrNamen.length; i++) {
        var btnSpeichern = $('#' + arrNamen[i]);
        if (btnSpeichern.length > 0) {
            var strOnClick = btnSpeichern.attr('onclick') + '';
            var strOnBlur = btnSpeichern.attr('onblur') + '';
            btnSpeichern.attr('onclick', 'showBitteWarten();' + strOnClick);

            try {
                if (Page_Validators.length > 0) {

                    btnSpeichern.attr('onblur', 'ende();' + strOnBlur);
                }
            } catch (exception) {

            }
        }
    }

});

function ende() {
    $('#divDisable').hide();
    $('#divBitteWarten').hide();
}

function start() {
    $('#divDisable').show();
    $('#divBitteWarten').show();
}

function showBitteWarten() {
    if ($("#divDisable").length == 0) {
        var strBitteWarten = '<div id="divDisable"></div><div id="divBitteWarten"><b><center>Bitte warten <blink>...</blink></center></b></div>';
        $('form').append(strBitteWarten);
    }


    //CSS-Eigenschaften f�r den deaktivierten Bereich setzen.
    $("#divDisable").hide();
    $('#divDisable').css('position', 'absolute');
    $('#divDisable').css('width', $(document).innerWidth() + 'px');
    $('#divDisable').css('height', $(document).innerHeight() + 'px');
    $('#divDisable').css('left', '0px');
    $('#divDisable').css('top', '0px');
    $('#divDisable').css('opacity', '0.5');
    $('#divDisable').css('background-color', '#606060');
    $('#divDisable').css('z-index', '999');
    $('#divDisable').attr('onclick', 'start();');
    //CSS-Eigenschaften f�r das Haupt-Div setzen.
    $('#divBitteWarten').hide();
    $('#divBitteWarten').css('font-family', 'Arial, Helvetica, sans-serif');
    $('#divBitteWarten').css('line-height', '40px');
    $('#divBitteWarten').css('background-color', '#F0F0FF');
    $('#divBitteWarten').css('text-decoration:blink');
    $('#divBitteWarten').css('border-radius', '10px');
    $('#divBitteWarten').css('box-shadow', '0px 0px 10px black');
    $('#divBitteWarten').css('height', '44px');
    $('#divBitteWarten').css('width', '164px');
    $('#divBitteWarten').css('position', 'absolute');
    $('#divBitteWarten').css('z-index', '999');
    var relHeight = $(document).innerHeight();
    var relWidth = $(document).innerWidth();
    var top = (($(document).innerHeight() / 2) - ($('#divBitteWarten').height() / 2));
    var left = (($(document).innerWidth() / 2) - ($('#divBitteWarten').width() / 2));
    if ($('#MainTable').length != 0) {
        var pos = $('#MainTable').position();
        top = pos.top;
        left = pos.left;

        var relHeight = $('#MainTable').innerHeight();
        var relWidth = $('#MainTable').innerWidth();
        top = top + ((relHeight / 2) - ($('#divBitteWarten').height() / 2));
        left = left + ((relWidth / 2) - ($('#divBitteWarten').width() / 2))
    }
    $('#divBitteWarten').css('top', (top) + 'px');
    $('#divBitteWarten').css('left', (left) + 'px');
    //$('#divBitteWarten').css('top', (($(document).innerHeight() / 2) - ($('#divBitteWarten').height() / 2)) + 'px');
    //$('#divBitteWarten').css('left', (($(document).innerWidth() / 2) - ($('#divBitteWarten').width() / 2)) + 'px');
    $('#divBitteWarten').css('padding', '5px');
    $('#divBitteWarten').css('vertical-align', 'middle');
    $('#divBitteWarten').attr('onclick', 'start();');

    //Div's anzeigen.
    $('#divDisable').show();
    $('#divBitteWarten').show();

    /*if (Page_ClientValidate()) {
        start();
    } else {
        ende();
    }*/
}


//############### "Blink" Funktion" ###############
blink(0.5);

function blink(speed) {
    if (speed) {
        if (document.all)
            setInterval("blink()", speed * 1000)
        return;
    }
    var blink = document.all.tags("BLINK")
    for (var i = 0; i < blink.length; i++)
        blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : ""
}
/**
function validierung() {
var arrNamen = new Array();
arrNamen = Page_Validators();
if (arrNamen.length > 0) {
if (Page_ClientValidate()) {
} else {
return false;
}
}
// arrNamen[0] = 'RequiredFieldValidator';
//  arrNamen[1] = 'revGrabstellengroesse'
//  arrNamen[2] = 'revGrabstellengroesse'
// arrNamen[3] = 'regEinlieferungsdatum'
for (var j = 0; j < arrNamen.length; j++) {
//   for (var i = 0; i < 1; i++) {
var Validator = $('#' + arrNamen[j] + i);
if (Validator.length > 0) {
if (Page_ClientValidate()) {
} else {
return false;
}
}
//   }
}
return true;
}*/