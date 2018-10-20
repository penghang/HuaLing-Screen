define(['jquery', 'tool'], function ($, Tool) {
    var $page = $('#page1');
    var $doms = {};
    return {
        init: function() {
            $doms = {
                total: $page.find('.js-total'),
                online: $page.find('.js-online'),
                offline: $page.find('.js-offline'),
                activePer: $page.find('.js-active-per')
            };
        },
        update: function(data) {
            ['total', 'online', 'offline'].forEach(function(key) {
                $doms[key].html(Tool.formatNumber(data[key]));
            });
            $doms.activePer.html(Math.round(data.active / data.total * 100));
        }
    };
});