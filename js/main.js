// build time:Sat May 09 2020 17:22:27 GMT+0800 (GMT+08:00)
(function(e,s){var a=$("body, html"),o=$("#post-toc"),i=$("#header-menu"),n=$("#sidebar-top"),t=$("#sidebar-search"),c=$(".search-wrap"),r=$("#sidebar-menu-box-tags"),l=$("#mobile-header-container-tags"),d=$("#sidebar-menu-box-categories"),f=$("#sidebar-menu-box"),h=$("#mobile-header-menu-nav"),u=false,m=true,p=s.documentElement.clientHeight;var w={showHeaderMenu:function(e){if(e>p*.1){i.removeClass("slide-down");i.addClass("slide-up")}else{i.removeClass("slide-up");i.addClass("slide-down")}},showBackTop:function(e){n.css("display",e>p?"block":"none")},setTags:function(e){var s=e.find("a");s.css({"font-size":"15px"});for(var a=0,o=s.length;a<o;a++){var i=s.eq(a).html().length%5+1;s[a].className="";s.eq(a).addClass("color"+i)}},setCategories:function(){var e=d.find("a");e.css({"font-size":"15px"});for(var s=0,a=e.length;s<a;s++){var o=e.eq(s).html().length%5+1;e[s].className="";e.eq(s).addClass("color"+o)}},showSidebarBox:function(e){if(e){f.animate({height:"162px",opacity:"1"},300)}else{f.animate({height:"0px",opacity:"0"},300)}},showToc:function(e){if(e/p>=.4){o.removeClass("post-toc-top");o.addClass("post-toc-not-top")}else{o.removeClass("post-toc-not-top");o.addClass("post-toc-top")}},showMobileHeaderMenu:function(e){if(u){return false}if(e){h.addClass("mobile-header-menu-nav-in")}else{h.removeClass("mobile-header-menu-nav-in")}},hideMask:function(e){var s=$(".mask");s.removeClass("in");if(e){e.removeClass("in")}},share:function(){var e=$("#share-sub");if(e){var s=$("#share-list"),a=$("#wxFab"),o=$("#wxShare-close"),i=$(".mask");e.click(function(){if(s.hasClass("in")){s.removeClass("in")}else{s.addClass("in")}});a.click(function(){var e=$("#wxShare");e.addClass("in ready");i.addClass("in")});o.click(function(){w.hideMask($("#wxShare"))});i.click(function(){w.hideMask($("#wxShare"))})}},reward:function(){var e=$("#reward"),s=$("#reward-close"),a=$("#rewardCode"),o=$(".reward-select-item"),i=$(".mask");if(e){var n=$("#rewardBtn");n.click(function(){e.addClass("in ready");i.addClass("in")});o.click(function(){$(this).addClass("checked").siblings(o).removeClass("checked");a.attr("src",$(this).attr("data-id")==="wechat"?this.dataset.wechat:this.dataset.alipay)});s.click(function(){w.hideMask(e)});i.click(function(){w.hideMask(e)})}}};initSearch();t.click(function(){c.css("top","50%");c.css("marginTop","-80px");c.css("opacity","1")});$(".search-close").click(function(){c.css("top","0");c.css("opacity","0");$("#search-container").removeClass("search-container-show")});w.setTags(r);w.setTags(l);w.setCategories();$("#sidebar-category").click(function(e){r.css("display","none");d.css("display","block");e.stopPropagation();if(m){w.showSidebarBox(true);m=false}else{w.showSidebarBox(false);m=true}});$("#sidebar-tag").click(function(e){r.css("display","block");d.css("display","none");e.stopPropagation();if(m){w.showSidebarBox(true);m=false}else{w.showSidebarBox(false);m=true}});f.click(function(e){e.stopPropagation();if(m){return false}});$(".sidebar-menu-box-close").click(function(){w.showSidebarBox(false);m=true});n.click(function(){a.animate({scrollTop:0},500)});s.addEventListener("scroll",function(){var e=s.documentElement.scrollTop||s.body.scrollTop;w.showHeaderMenu(e);w.showBackTop(e);w.showToc(e)},false);$(".mobile-header-menu-button").click(function(){if(u){return false}w.showMobileHeaderMenu(true);u=true;window.setTimeout(function(){u=false},350)});if(e.mihoConfig.share){w.share()}if(e.mihoConfig.reward===1||e.mihoConfig.reward===2){w.reward()}a.click(function(){w.showSidebarBox(false);m=true;w.showMobileHeaderMenu(false)})})(window,document);
//rebuild by neat 