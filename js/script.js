(function($) {
    $(function() {
        function makeBg(sel) {
            $(sel).text('');

            function makeQuadNode(depth) {
                var max = 2 + Math.floor(Math.random() * 3);
                if(depth >= max)
                    return '<div class="imgbox" style="background-image: url(\'img/1411207249968.gif\'); opacity: ' + Math.random() / 2 + '"></div>';
                if(Number(new Date()) % 4 == 0 && depth > 1)
                    return '<div class="imgbox" style="background-image: url(\'img/1411207249968.gif\'); opacity: ' + Math.random() / 2 + '"></div>';

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
                .appendTo(sel);
        }

        makeBg("#homu");
    });
})(window.jQuery);
