(function($) {
    var resizeId;
    var staticIntervalId;
    
    // the images we have <del>stolen</del>
    var imgCount = 123;
    var imgboxSrcs = [];
    var imgboxes;
    var mainQuad;
    
    function loadImages() {
		// super one-liner (technically) loop.
        for(var i = 1; i <= imgCount; imgboxSrcs.push(
			'img/imgbox (' + i++ + ').gif'
		));
    }
    
    function cssUrl(src) {
		return "url('" + src + "')";
    }
    
    function getRandomImage() {
		return imgboxSrcs[randInt(imgCount)];
    }

	// the awesomesauce
    function makeBg(sel) {
		// remove those ugly scrollbars!
        $(sel)
            .text('')
            .css({
                overflow: 'hidden'
            });

		// WARNING: extreme computer science-y stuff below
        function makeQuadNode(depth) {
            var max = 2 + Math.floor(Math.random() * 3);

            var imgboxIndex = Math.floor(Math.random() * imgboxSrcs.length)
            if(depth >= max)
				return '<div class="imgbox" style="border-width: 0 0 1px 1px; box-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5) inset, -1px -1px 0 rgba(255, 255, 255, 0.5) inset; border-style: solid; border-color: black; background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (1) + '"></div>';
                //return '<div class="imgbox" style="border: 3px solid; background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (0.15 + Math.random() / 2) + '"></div>';
            if(Number(new Date()) % 4 == 0 && depth > 1)
				return '<div class="imgbox" style="border-width: 0 0 1px 1px; box-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5) inset, -1px -1px 0 rgba(255, 255, 255, 0.5) inset; border-style: solid; border-color: black; background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (1) + '"></div>';
                //return '<div class="imgbox" style="border: 3px solid; background-image: url(\'' + imgboxSrcs[imgboxIndex] + '\'); opacity: ' + (0.15 + Math.random() / 2) + '"></div>';

            return [
                '<ul class="quad-wrapper">',
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '<li>' + makeQuadNode(depth + 1) + '</li>' +
                '</ul>'
            ].join('');
        };

        mainQuad = $('<ul>');

        for(var i = 1, depth = 0; i <= 4; i++) {
            $('<li>')
                .html(makeQuadNode(depth))
                .appendTo(mainQuad);
        }

		resizeMainQuad();
		
        mainQuad
            .addClass('quad-wrapper')
            .css({
                position: 'absolute',
                transform: 'rotate(0, 0, 0)'
            })
            .appendTo(sel);
		imgboxes = $(sel).find('.imgbox');
    }
    
    function makeStaticTitle() {
		function makeStaticText(width) {
			var staticTextBase = "░▒▓";
			var staticText = "";
			for(var i = 0; i < width; i++)
				staticText += staticTextBase.charAt(Math.floor(Math.random() * staticTextBase.length));
			return staticText;
		};
    
		staticIntervalId = window.setInterval(function() {
			$("title").text(makeStaticText(255));
		}, 5);
    }
    
    function stopStaticTitle(text) {
		window.clearInterval(staticIntervalId);
		$("title").text(text);
    }
    
    function resizeMainQuad() {
		mainQuad.css({
			width: window.screen.width * 1.5,
			height: window.screen.height * 1.5
		});
    }

    function centerBg(sel) {
        var quadWrapper =  $(sel).children('.quad-wrapper');

        quadWrapper
            .css({
                position: 'absolute',
                left: ($(sel).width() - quadWrapper.width()) / 2,
                top: ($(sel).height() - quadWrapper.height()) / 2
            });
    }
    
    function randInt(max) {
		return Math.floor(Math.random() * max);
    }
    
    function changeProgram() {
		window.setInterval(function() {
			$(imgboxes[randInt(imgboxes.length)])
				.css('background-image', cssUrl(getRandomImage()));
		}, 50);
    }
    
    $(function() {
		makeStaticTitle();
		$(["#peiji"])
			.each(function(i, x) {
				$(x).css({ 'visibility': 'hidden' });
			});
		loadImages();
        makeBg("#homu");
        centerBg("#homu");
        $('#homu').imagesLoaded()
			.done(function() {
				window.setTimeout(function() {
					stopStaticTitle("あ");
					$(["#peiji"])
						.each(function(i, x) {
							$(x).css({ 'visibility': 'visible' });
						});
					changeProgram();
				}, 3000);
			});
    });

    $(window).on('resize', function() {
		centerBg("#homu");
    });
})(window.jQuery);
