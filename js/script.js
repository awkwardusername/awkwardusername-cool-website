(function($) {
    var blinkState = {};
    var resizeTimeout = false;

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
            'img/imgbox (33).gif',
            'img/imgbox (34).gif',
            'img/imgbox (35).gif',
            'img/imgbox (36).gif',
            'img/imgbox (37).gif',
            'img/imgbox (38).gif',
            'img/imgbox (39).gif',
            'img/imgbox (40).gif',
            'img/imgbox (41).gif',
            'img/imgbox (42).gif',
            'img/imgbox (43).gif',
            'img/imgbox (44).gif',
            'img/imgbox (45).gif',
            'img/imgbox (46).gif',
            'img/imgbox (47).gif',
            'img/imgbox (48).gif',
            'img/imgbox (49).gif',
            'img/imgbox (50).gif',
            'img/imgbox (51).gif',
            'img/imgbox (52).gif',
            'img/imgbox (53).gif',
            'img/imgbox (54).gif',
            'img/imgbox (55).gif',
            'img/imgbox (56).gif',
            'img/imgbox (57).gif',
            'img/imgbox (58).gif',
            'img/imgbox (59).gif',
            'img/imgbox (60).gif',
            'img/imgbox (61).gif',
            'img/imgbox (62).gif',
            'img/imgbox (63).gif',
            'img/imgbox (64).gif',
            'img/imgbox (65).gif'
        ];

        function makeQuadNode(depth) {
            var max = 2 + Math.floor(Math.random() * 3);

            var imgboxIndex = Math.floor(Math.random() * imgboxSrcs.length)
            if(depth >= max)
                return '<div class="imgbox" style="background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (0.15 + Math.random() / 2) + '"></div>';
            if(Number(new Date()) % 4 == 0 && depth > 1)
                return '<div class="imgbox" style="background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (0.15 + Math.random() / 2) + '"></div>';

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
                height: 1200
            })
            .appendTo(sel);
    }

    function centerBg(sel) {
        var quadWrapper =  $(sel).children('.quad-wrapper');

        quadWrapper
            .css({
                position: 'absolute',
                left: ($(sel).width() - quadWrapper.width()) / 2,
                top: ($(sel).height() - quadWrapper.height()) / 2
            })
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
        centerBg("#homu");
        blinkSel("#main-content > *", 250);
    });

    $(window).on('resize', function() {
        centerBg("#homu");
    });

    /*
    $(window).on('resize', function() {
        makeBg("#homu");
    }, 250);
    */
})(window.jQuery);
