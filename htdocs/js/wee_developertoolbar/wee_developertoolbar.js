var Cookie = {
    all: function() {
        var pairs = document.cookie.split(';');
        var cookies = {};
        pairs.each(function(item, index) {
            var pair = item.strip().split('=');
            cookies[unescape(pair[0])] = unescape(pair[1]);
        });

        return cookies;
    },
    read: function(cookieName) {
        var cookies = this.all();
        if(cookies[cookieName]) {
            return cookies[cookieName];
        }
        return null;
    },
    write: function(cookieName, cookieValue, cookieLifeTime) {
        var expires = '';
        if (cookieLifeTime) {
            var date = new Date();
            date.setTime(date.getTime()+(cookieLifeTime*1000));
            expires = '; expires='+date.toGMTString();
        }
        var urlPath = '/';
        document.cookie = escape(cookieName) + "=" + escape(cookieValue) + expires + "; path=" + urlPath;
    },
    clear: function(cookieName) {
        this.write(cookieName, '', -1);
    }
};

jq = jQuery.noConflict();

jq(function($){


  if (Cookie.read("wee_developertoolbar") == 0)    {
      $("#weeDeveloperToolbar").hide();
      $("#weeDeveloperToolbarPoweredBy").hide();
  }

  $("#weeDeveloperToolbarContainer img:first").click(function() {
    $(".weeDeveloperToolbarDetails").hide();
    var toolbar = $("#weeDeveloperToolbar").toggle();
    $("#weeDeveloperToolbarPoweredBy").toggle();
    var display = toolbar.attr("style");
    var toolbarHiddenExpression = /(none)/;
    if (toolbarHiddenExpression.exec(display)) {
      Cookie.write("wee_developertoolbar", 0);
    } else {
      Cookie.write("wee_developertoolbar", 1);    
    }
  });    
  
  $("ul.tabContainer li").click(function() {
    var id = $(this).attr("id").split("_");
    id = id[1];
    var parent = $(this).parent().parent();
    parentContainerId = $(parent).attr("id");
    $("#"+parentContainerId+ " ul.tabContainer li").removeClass("active");
    $(this).addClass("active");
    var index = $("#"+parentContainerId+ " ul.tabContainer li").index(this);
    $("#"+parentContainerId+ " .tabContent").hide();
    $("#tabContent_"+id).show();
  });
    
  $("#weeDeveloperToolbar li.content").click(function() {
    var id = $(this).attr("id").split("_");
    id = id[1];
    $(".weeDeveloperToolbarDetails").each(function(e) {
      var toolbarDetailContainer = $(".weeDeveloperToolbarDetails").get(e);
      if ($(toolbarDetailContainer).attr("id") != "weeDeveloperToolbarDetails_"+id) {
        $(toolbarDetailContainer).hide();
      }
    });
    if ($("#weeDeveloperToolbarDetails_"+id)) {
      $("#weeDeveloperToolbarDetails_"+id).toggle();
    }
  });
  
  $("#tabContent_blocks a.toggleBlogProperties").click(function() {
    $(this).next("ul.blockProperties").toggle();
  });
  
  $("#tabContent_blocks a.toggleBlogProperties").click(function() {
	    $(this).next("ul.eventProperties").toggle();
  });
  
  $("#tabContent_events a.toggleBlogProperties").click(function() {
	    $(this).next("ul.events").toggle();
  });
  
});


