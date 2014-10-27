(function($) {
    var blinkState = {};

    function makeBg(sel) {
        $(sel)
            .text('')
            .css({
                overflow: 'hidden'
            });

        function makeQuadNode(depth) {
            var max = 2 + Math.floor(Math.random() * 3);
            if(depth >= max)
                return '<div class="imgbox" style="background-image: url(\'img/1411207249968.gif\'); opacity: ' + (0.35 + Math.random() / 2) + '"></div>';
            if(Number(new Date()) % 4 == 0 && depth > 1)
                return '<div class="imgbox" style="background-image: url(\'img/1411207249968.gif\'); opacity: ' + (0.35 + Math.random() / 2) + '"></div>';

            return [
                '<ul class="quad-wrapper">',
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '</ul>'
            ].join('');
        };

        var mainQuad = $('<ul>');

        for(var i = 1, depth = 0; i <= 4; i++) {
            $('<li>')
                .html(makeQuadNode(depth))
                .appendTo(mainQuad);
        }

        $(mainQuad)
            .addClass('quad-wrapper')
            .css({
                position: 'absolute',
                width: 1600,
                height: 1200,
                left: ($(sel).width() - 1600) / 2,
                top: ($(sel).height() - 1200) / 2
            })
            .appendTo(sel);
    }

    function blinkSel(sel, delay) {
        if(!blinkState[sel])
            blinkState[sel] = true;

        window.setInterval(function() {
            $(sel).css({ 'visibility': blinkState[sel] ? 'visible' : 'hidden' });
            blinkState[sel] = !blinkState[sel];
        }, delay);
    }

    $(function() {
        makeBg("#homu");
        blinkSel("#main-content > *", 250);
    });

    $(window).on('resize', function() {
        makeBg("#homu");
    })
})(window.jQuery);
