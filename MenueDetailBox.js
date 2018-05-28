var m_strAuswahlDisable = 'divAuswahlDisable';
var m_strIAuswahlBox = 'iAuswahlBox';
var m_strDivAuswahlClose = 'divAuswahlClose';
var m_strAuswahlAdd = '<div id="' + m_strAuswahlDisable + '" style="display: none;"></div><iframe id="' + m_strIAuswahlBox + '"  style="display: none;" frameborder="no"></iframe><div id="' + m_strDivAuswahlClose + '" style="display: none;"></div>';
var doreload = true
$(document).ready(function () {

    if ($('#' + m_strAuswahlDisable).length == 0) {
        $('form').append(m_strAuswahlAdd);
    }
});

function endeAuswahl() {
    $('#' + m_strAuswahlDisable).hide(600);
    $('#' + m_strIAuswahlBox).hide(400);
    $('#' + m_strDivAuswahlClose).hide()
    $('body').css({ 'overflow': 'auto' });
    if (doreload) { window.location = window.location; }
}

function showMenueBox(pv_strURL) {
    doreload = false;
    $('body').css({ 'overflow': 'hidden' });

    if ($('#' + m_strAuswahlDisable).length == 0) {
        $('form').append(m_strAuswahlAdd);
    }

    var intStandardWidth = 500;
    var intStandardHeight = 500;
    var objAuswahlDisable = $('#' + m_strAuswahlDisable);
    var objAuswahlBox = $('#' + m_strIAuswahlBox);
    var objAuswahlClose = $('#' + m_strDivAuswahlClose);
    var objPos, intLeft, intTop, relHeight, relWidth;
    var intWidth = $(document).outerWidth();

    //Beide deaktivieren zur Vorbereitung auf die späetereDarstellung
    objAuswahlDisable.hide();
    objAuswahlBox.hide();

    objAuswahlBox.attr('src', pv_strURL);

    //CSS-Eigenschaften für den deaktivierten Bereich setzen.
    if (intWidth < intStandardWidth) { intWidth = intStandardWidth; }
    var intHeight = $(document).outerHeight();

    objAuswahlDisable.css({ 'width': intWidth + 'px',
        'height': intHeight + 'px'
    });

    //CSS-Eigenschaften für das Haupt-Div setzen.
    relHeight = objAuswahlDisable.height() - 50;
    relWidth = objAuswahlDisable.width() - 50;

    objPos = objAuswahlBox.position();
    if (relWidth > intStandardWidth) { relWidth = intStandardWidth; }
    
    intTop2 = objPos.top + 10;

    objAuswahlBox.css({ 'min-height': '560px',
        'width': relWidth + 'px',
        'top': intTop2 + 'px',
        'left': '20px'
    });

    //Eigenschaften für den Schliessen-Knopf

    intLeft = (objAuswahlBox.outerWidth() + objPos.left) + 5;
    intTop = objPos.top + 10;

    objAuswahlClose.css({
        'left': intLeft + 'px',
        'top': intTop + 'px'
    });

    //click-Ereignisse
    objAuswahlDisable.click(endeAuswahl);
    objAuswahlClose.click(endeAuswahl);

    //alles anzeigen.
    objAuswahlDisable.show(800);
    objAuswahlBox.show(1000);
    objAuswahlClose.show(1500);

    $(window).resize(function () {

        var intSWidth = 810;
        var intNWidth = $(document).outerWidth();

        if (intNWidth < intStandardWidth) { intNWidth = intStandardWidth; }

        $('#' + m_strAuswahlDisable).css('width', (intNWidth + '') + 'px');
        $('#' + m_strAuswahlDisable).css('height', ($(document).height() + '') + 'px');

        var relHeight = $('#' + m_strAuswahlDisable).height() - 50;
        var relWidth = $('#' + m_strAuswahlDisable).width() - 50;

        if (relWidth > intStandardWidth) { relWidth = intStandardWidth; }
        if (intStandardHeight > relHeight) { intStandardHeight = relHeight; }

        $('#' + m_strIAuswahlBox).css('height', (intStandardHeight + '') + 'px');
    });
}

function showMemoryBox(pv_strURL) {

    $('body').css({ 'overflow': 'hidden' });

    if ($('#' + m_strAuswahlDisable).length == 0) {
        $('form').append(m_strAuswahlAdd);
    }

    var intStandardWidth = 705;
    var intStandartdHeight = 630;
    var objAuswahlDisable = $('#' + m_strAuswahlDisable);
    var objAuswahlBox = $('#' + m_strIAuswahlBox);
    var objAuswahlClose = $('#' + m_strDivAuswahlClose);
    var objPos, intLeft, intTop, relHeight, relWidth;
    var intWidth = $(document).outerWidth();

    //Beide deaktivieren zur Vorbereitung auf die späetereDarstellung
    objAuswahlDisable.hide();
    objAuswahlBox.hide();

    objAuswahlBox.attr('src', pv_strURL);

    //CSS-Eigenschaften für den deaktivierten Bereich setzen.
    if (intWidth < intStandardWidth) { intWidth = intStandardWidth; }
    var intHeight = $(document).outerHeight();

    objAuswahlDisable.css({ 'width': intWidth + 'px',
        'height': intHeight + 'px'
    });

    //CSS-Eigenschaften für das Haupt-Div setzen.
    relHeight = objAuswahlDisable.height() - 50;
    relWidth = objAuswahlDisable.width() - 50;

    if (relWidth > intStandardWidth) { relWidth = intStandardWidth; }
    if (relHeight > intStandartdHeight) { relHeight = intStandartdHeight; }

    objAuswahlBox.css({ 'height': relHeight + 'px',
        'width': relWidth + 'px',
        'top': '20px',
        'left': '20px'
    });

    //Eigenschaften für den Schliessen-Knopf
    objPos = objAuswahlBox.position();

    intLeft = (objAuswahlBox.outerWidth() + objPos.left) + 5;
    intTop = objPos.top + 10;

    objAuswahlClose.css({
        'left': intLeft + 'px',
        'top': intTop + 'px'
    });

    //click-Ereignisse
    objAuswahlDisable.click(endeAuswahl);
    objAuswahlClose.click(endeAuswahl);

    //alles anzeigen.
    objAuswahlDisable.show(800);
    objAuswahlBox.show(1000);
    objAuswahlClose.show(1500);

    $(window).resize(function () {

        var intSWidth = 705;
        var intNWidth = $(document).outerWidth();

        if (intNWidth < intStandardWidth) { intNWidth = intStandardWidth; }

        $('#' + m_strAuswahlDisable).css('width', (intNWidth + '') + 'px');
        $('#' + m_strAuswahlDisable).css('height', ($(document).height() + '') + 'px');

        var relHeight = $('#' + m_strAuswahlDisable).height() - 50;
        var relWidth = $('#' + m_strAuswahlDisable).width() - 50;

        if (relWidth > intStandardWidth) { relWidth = intStandardWidth; }

        $('#' + m_strIAuswahlBox).css('height', (relHeight + '') + 'px');
    });
}