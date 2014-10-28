(function($) {
    var blinkState = {};

    function makeBg(sel) {
        $(sel)
            .text('')
            .css({
                overflow: 'hidden'
            });

        var imgboxSrcs = [
            'img/imgbox (1).gif',
            'img/imgbox (2).gif',
            'img/imgbox (3).gif',
            'img/imgbox (4).gif',
            'img/imgbox (5).gif',
            'img/imgbox (6).gif',
            'img/imgbox (7).gif',
            'img/imgbox (8).gif',
            'img/imgbox (9).gif',
            'img/imgbox (10).gif',
            'img/imgbox (11).gif',
            'img/imgbox (12).gif',
            'img/imgbox (13).gif',
            'img/imgbox (14).gif',
            'img/imgbox (15).gif',
            'img/imgbox (16).gif',
            'img/imgbox (17).gif',
            'img/imgbox (18).gif',
            'img/imgbox (19).gif',
            'img/imgbox (20).gif',
            'img/imgbox (21).gif',
            'img/imgbox (22).gif',
            'img/imgbox (23).gif',
            'img/imgbox (24).gif',
            'img/imgbox (25).gif',
            'img/imgbox (26).gif',
            'img/imgbox (27).gif',
            'img/imgbox (28).gif',
            'img/imgbox (29).gif',
            'img/imgbox (30).gif',
            'img/imgbox (31).gif',
            'img/imgbox (32).gif',

        ];

        function makeQuadNode(depth) {
            var max = 2 + Math.floor(Math.random() * 3);

            var imgboxIndex = Math.floor(Math.random() * imgboxSrcs.length)
            if(depth >= max)
                return '<div class="imgbox" style="background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (0.35 + Math.random() / 2) + '"></div>';
            if(Number(new Date()) % 4 == 0 && depth > 1)
                return '<div class="imgbox" style="background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (0.35 + Math.random() / 2) + '"></div>';

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
