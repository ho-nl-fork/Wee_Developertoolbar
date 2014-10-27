var Cookie = {
    all: function () {
        var pairs = document.cookie.split(';');
        var cookies = {};
        pairs.each(function (item, index) {
            var pair = item.strip().split('=');
            cookies[unescape(pair[0])] = unescape(pair[1]);
        });

        return cookies;
    },
    read: function (cookieName) {
        var cookies = this.all();
        if (cookies[cookieName]) {
            return cookies[cookieName];
        }
        return null;
    },
    write: function (cookieName, cookieValue, cookieLifeTime) {
        var expires = '';
        if (cookieLifeTime) {
            var date = new Date();
            date.setTime(date.getTime() + (cookieLifeTime * 1000));
            expires = '; expires=' + date.toGMTString();
        }
        var urlPath = '/';
        document.cookie = escape(cookieName) + "=" + escape(cookieValue) + expires + "; path=" + urlPath;
    },
    clear: function (cookieName) {
        this.write(cookieName, '', -1);
    }
};

document.observe("dom:loaded", function() {
    if (Cookie.read("wee_developertoolbar") == 0) {
        $("weeDeveloperToolbar").hide();
    }

    $$("#weeDeveloperToolbarContainer img:first").each(function (element) {
        element.observe('click', function () {
            $$(".weeDeveloperToolbarDetails").each(function(e){e.hide();});
            var toolbar = $("weeDeveloperToolbar").toggle();
            var display = toolbar.readAttribute("style");
            var toolbarHiddenExpression = /(none)/;
            if (toolbarHiddenExpression.exec(display)) {
                Cookie.write("wee_developertoolbar", 0);
            } else {
                Cookie.write("wee_developertoolbar", 1);
            }
        });
    });

    $$("#weeDeveloperToolbar li.has-content").each(function (element) {
        element.observe('click', function (e) {
            var id = element.readAttribute('id').split("_");
            id = "weeDeveloperToolbarDetails_" + id[1];

            $$(".weeDeveloperToolbarDetails").each(function (element) {
                var elemId = element.readAttribute('id');
                if (id != elemId) {
                    $(elemId).hide();
                }
            });
            if ($(id)) {
                $(id).toggle();
            }
        });
    });

    $$("ul.tabContainer li").each(function (element) {
        element.observe('click', function () {
            var id = element.readAttribute('id').split("_");
            id = id[1];
            var parent = element.up(2);

            parentContainerId = parent.readAttribute("id");
            $$('#'+parentContainerId + " ul.tabContainer li").each(function(tabElem){
                tabElem.removeClassName('active');
            });
            $(element).addClassName("active");

            $$('#'+parentContainerId + " .tabContent").each(function(contentElem){
                contentElem.hide();
            });
            $("tabContent_" + id).show();
        });
    });

    $$("#tabContent_blocks a.toggleBlogProperties").each(function (element) {
        element.observe('click', function(){
            element.next("ul.blockProperties").toggle();
        });

    });

    $$("#tabContent_events a.toggleBlogProperties").each(function (element) {
        element.observe('click', function(){
            element.next("ul.events").toggle();
        });
    });
});
