(function($) {
	// state for blinking text
    var blinkState = {};
    
    var resizeTimeout = false;

	// the awesomesauce
    function makeBg(sel) {
		// remove those ugly scrollbars!
        $(sel)
            .text('')
            .css({
                overflow: 'hidden'
            });
            
        // the images we have <del>stolen</del>
        var imgCount = 107,
			imgboxSrcs = [];
        
        // super one-liner (technically) loop.
        for(var i = 1; i <= imgCount; imgboxSrcs.push(
			'img/imgbox (' + i++ + ').gif'
		));

		// WARNING: extreme computer science-y stuff below
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
