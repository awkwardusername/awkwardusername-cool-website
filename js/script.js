(function($) {
    $(function() {
        function makeQuadNode() {
            if (Number(new Date()) % 4 != 0)
                return '<div class="imgbox" style="background-image: url(\'img/1411207249968.gif\')"></div>';
            return '<ul class="quad-wrapper"><li>' + makeQuadNode() + '</li><li>' + makeQuadNode() + '</li><li>' + makeQuadNode() + '</li><li>' + makeQuadNode() + '</li></ul>';
        };

        var mainQuad = $('<ul>');

        for(var i = 1; i <= 4; i++)
            $('<li>')
                .html(makeQuadNode())
                .appendTo(mainQuad);

        $(mainQuad)
            .addClass('quad-wrapper')
            .appendTo('#homu');
    });
})(window.jQuery);
