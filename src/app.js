(function(){
    var version = '1.0.0' + new Date().getTime()
    require.config({
        urlArgs: version
    });
})();
require(["config"], function(config){
    function loadStyle(){
        var cssArr = [
            './src/styles/index.css'
        ];
        var head = document.getElementsByTagName('head')[0];
        function createNode(href) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href + "?v=" + new Date().getTime() ;
            return link;
        }
        cssArr.forEach(function (href) {
            head.appendChild(createNode(href));
        });
    }
    loadStyle();
    require(['page1']);
});