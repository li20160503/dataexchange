/**
 * auikit - v0.0.2 by aliencode
 * Copyright 2014 http://aliencode.github.io/
 */

function initTabmanager() {
    var a = $("#tab-dropdown-menu");
    $("#tabmanager").on("click", "li.itab", function() {
        $("#tabmanager li.active").removeClass("min");
    }).on("mouseover", "li.itab", function() {
        var a = $(this).width(), b = $(this).position().left + 2 + "px";
        $(this).hasClass("active") || $("#tabmanager li.active").addClass("min"), $("#tabmanager>.tabcover").css("width", a).css("left", b);
    }).on("mouseleave", "li.itab", function() {
        var a = $("#tabmanager>li.active").width(), b = $("#tabmanager>li.active").position().left + 2 + "px";
        $("#tabmanager li.active").removeClass("min"), $("#tabmanager>.tabcover").css("width", a).css("left", b);
    }).on("contextmenu", "li.itab", function(b) {
        return a.css({
            display: "block",
            left: b.pageX,
            top: b.pageY
        }).find("a").data("key", $(this).data("key")), !1;
    }), $("body").on("click", function() {
        a.css({
            display: "none"
        });
    }), $(".main-menu-toggle").click(function() {
        $(".sidebar").toggleClass("hide");
    }), $("#tabmanager").on("shown.bs.tab", 'a[data-toggle="tab"]', function(a) {
        window.location.href = "#" + $(a.target).data("path");
    });
}

function initSidebar() {
    $(".scrollable-nav li").click(function(a) {
        a.stopPropagation(), $(a.target).is("li.active>a") ? $(this).removeClass("active") : ($(this).parent("ul").find(">li").removeClass("active"),
            $(this).addClass("active"));
    }), $(window).bind("resize ready", function() {
        var a = Number($(window).height());
        $(".tab-content").height(a - 95 + "px"), $(".sidebar .nav-primary .scrollable").height(a - 52 + "px"),
            $(".sidebar .nav-primary .scrollable .scrollable-nav").slimScroll({
                size: "5px",
                height: "auto"
            });
    });
}

function initLibsSettings() {
    PNotify.prototype.options.history = !1, PNotify.prototype.options.width = "300px",
        PNotify.prototype.options.type = "info", PNotify.prototype.options.delay = 2e3,
        PNotify.prototype.options.mouse_reset = !1, PNotify.prototype.options.animation = {
        effect_in: function(a, b, c) {
            c.css({
                "animation-duration": "1s",
                display: "block",
                "-webkit-animation-name": "flipInX"
            }), setTimeout(function() {
                b();
            }, 1e3);
        },
        effect_out: function(a, b, c) {
            c.css({
                "animation-duration": "1s",
                "-webkit-animation-name": "flipOutX"
            }), setTimeout(function() {
                c.hide(), b();
            }, 1e3);
        }
    }, PNotify.prototype.options.buttons.sticker = !1, window.alert = function(a) {
        new PNotify({
            text: a
        });
    }, BootstrapDialog.defaultOptions = {
        type: BootstrapDialog.TYPE_PRIMARY,
        size: BootstrapDialog.SIZE_NORMAL,
        cssClass: "from-below",
        title: null,
        message: null,
        nl2br: !0,
        closable: !0,
        spinicon: BootstrapDialog.ICON_SPINNER,
        autodestroy: !0,
        draggable: !1
    };
}

function BPDefaultOptions(a) {
    var a = {
        currentPage: a.currentPage,
        listContainerClass: "pagination",
        bootstrapMajorVersion: 3,
        totalPages: a.totalPages,
        numberOfPages: a.numberOfPages || 10,
        tooltipTitles: function(a, b) {
            switch (a) {
                case "first":
                    return "首页";

                case "prev":
                    return "上一页";

                case "next":
                    return "下一页";

                case "last":
                    return "尾页: " + this.totalPages;

                case "page":
                    return "第" + b + "页";
            }
        },
        itemTexts: function(a, b) {
            switch (a) {
                case "first":
                    return "首页";

                case "prev":
                    return "上一页";

                case "next":
                    return "下一页";

                case "last":
                    return "尾页: " + this.totalPages;

                case "page":
                    return b;
            }
        },
        onPageClicked: a.onPageClicked
    };
    return a;
}

function initGlobalEvents() {
    $(document).on("click", ".event-checklist, th.event-sorting", function() {
        $(this).hasClass("event-checklist") && tableCheck(this), $(this).hasClass("event-sorting") && tableSorting(this);
    });
}

function tableSorting(a) {
    $(a).parent("tr").find("th.sorting_asc,th.sorting_desc").not($(a)).removeClass("sorting_asc sorting_desc").addClass("sorting"),
        $(a).hasClass("sorting_asc") ? $(a).removeClass("sorting_asc").addClass("sorting_desc").trigger("sorting", {
            field: $(a).data("field"),
            dir: "desc"
        }) : ($(a).hasClass("sorting_desc") || $(a).hasClass("sorting")) && $(a).removeClass("sorting_desc").removeClass("sorting").addClass("sorting_asc").trigger("sorting", {
            field: $(a).data("field"),
            dir: "asc"
        });
}

function tableCheck(a) {
    $(a).data("table") ? $($(a).data("table")).find("tr input[type=checkbox]:nth-child(1):visible").prop("checked", $(a).prop("checked")) : $(a).parents(".table-wrap") ? $(a).parents(".table-wrap").find(" table:eq(1) tr input[type=checkbox]:nth-child(1):visible").prop("checked", $(a).prop("checked")) : $(a).parents("table").find("tr input[type=checkbox]:nth-child(1):visible").prop("checked", $(a).prop("checked"));
}

$(function() {
     initLibsSettings(), initGlobalEvents();
}), $.fn.getCheckedIds = function() {
    var a = "";
    $(this).find("tr input[type=checkbox]:nth-child(1):checked").filter(":visible").not($(".event-checklist")).each(function() {
        a += $(this).data("id") + ",";
    });
    var b = a.split(",");
    return b.pop(), b;
}, angular.module("auikit.controllers", []).controller("MainCtrl", [ "conf", "$scope", "utils", "$location", function(a, b, c, d) {
    b.TabManager = {
        maxtabsize: 6,
        tabs: {},
        addTab: function() {
            b.locationsearch = d.search();
            var a = this.getTabOrder(), e = d.url(), f = md5(e), g = a + f, h = d.path(), i = d.search();
            if (i.title) {
                var j = this.hasTab(f);
                if (j || "" == h) j && this.activeTab(j); else {
                    var k = c.objectSize(this.tabs) + 1;
                    if (k > this.maxtabsize) return void alert("您打开的窗口太多了，请先关闭几个！");
                    this.tabs[g] = {
                        key: g,
                        title: i.title,
                        path: h,
                        search: i,
                        url: e,
                        order: a
                    }, this.activeLast();
                }
            }
        },
        remove: function(a) {
            delete b.TabManager.tabs[a], 0 == c.objectSize(b.TabManager.tabs) ? window.location.href = "#" : b.TabManager.activeLast();
        },
        removeTab: function(a, c) {
            $("#" + a + " .page-scroll>div").addClass("fadeOut"), $(c.target).parents("li").addClass("fadeOutDown").one("webkitAnimationEnd oAnimationEnd animationEnd", function() {
                b.$apply(function() {
                    b.TabManager.remove(a);
                });
            });
        },
        removeOtherTab: function(a) {
            var c = "" == a || $(a.target).data("key");
            for (var d in this.tabs) d != c && delete b.TabManager.tabs[d];
            this.activeLast();
        },
        removeAllTab: function() {
            this.removeOtherTab(""), window.location.href = "#";
        },
        removeCurrentTab: function(a) {
            var b = $(a.target).data("key");
            this.remove(b);
        },
        activeLast: function() {
            setTimeout(function() {
                $("#tabmanager a:last").tab("show").trigger("mouseover");
            }, 300);
        },
        activeTab: function(a) {
            $('a[data-target="#' + a + '"]').tab("show").trigger("mouseover");
        },
        hasTab: function(a) {
            for (var b = this.getTabOrder() + 1, c = 0; b >= c; c++) if (this.tabs[c + a]) return c + a;
            return !1;
        },
        getTabOrder: function() {
            var a = Number(c.objectSize(this.tabs));
            if (0 == a) return 1e3;
            for (var b in this.tabs) {
                var d = Number(this.tabs[b].order);
                d > a && (a = d);
            }
            return a + 1;
        },
        getTabID: function() {
            var a = d.url();
            for (var b in this.tabs) if (this.tabs[b].url === a) return this.tabs[b].key;
            return "";
        }
    }, b.$watch(function() {
        return d.$$url;
    }, function(a) {
        "#" != a.base && b.TabManager.addTab();
    });
} ]), angular.module("auikit.directives", []).directive("auikitDraggable", function() {
    return function(a, b, c) {
        $(b).draggable({
            handle: $(b).find(c.handle)
        });
    };
}).directive("auikitTable", function() {
    return function(a, b) {
        var c = b.data("maxheight"), d = b.attr("class");
        b.wrap('<div class="table-wrap" style="position: relative"><div class="table-scroll"></div></div>');
        var e = b.parent().parent();
        e.prepend('<div style="width: 100%;position: absolute;top: 0;left: 0;height: 30px;z-index: 90"><table class="' + d + '" ><thead></thead></table></div>'),
            e.find("thead:eq(0)").html(b.find("thead").html()).find("th").click(function() {
                b.find("thead th").eq($(this).index()).trigger("click");
            }), e.find(".table-scroll").slimScroll({
            size: "5px",
            height: c + "px",
            alwaysVisible: !0
        });
    };
}).directive("auikitTooltip", function() {
    return function(a, b) {
        $(b).tooltip({
            container: "body"
        });
    };
}).directive("auikitDatepicker", function() {
    return function(a, b) {
        $(b).datepicker();
    };
}).directive("auikitEditor", function() {
    return {
        require: "^ngModel",
        scope: {
            ngModel: "="
        },
        link: function(a, b, c, d) {
            var e = KindEditor.create(b, {
                loadStyleMode: !1,
                width: "100%",
                afterBlur: function() {
                    this.sync();
                },
                items: [ "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "removeformat", "|", "justifyleft", "justifycenter", "justifyright", "insertorderedlist", "insertunorderedlist", "|", "image", "link" ]
            });
            d.$setViewValue(e);
        }
    };
}), angular.module("auikit.filters", []), angular.module("auikit.services", []).factory("RESTService", [ "$http", function(a) {
    var b = function(a) {
        this.setURL(a), this.get = function(a, b) {
            this.http("GET", a, b);
        }, this.create = function(a, b) {
            this.http("POST", a, b);
        }, this.update = function(a, b) {
            this.http("PUT", a, b);
        }, this.delete = function(a, b) {
            this.http("DELETE", a, b);
        };
    };
    return b.prototype = {
        constructor: b,
        setURL: function(a) {
            this.url = a;
        },
        getURL: function() {
            return this.url;
        },
        http: function(b, c, d) {
            var e = this.url;
            c.str && (e += c.str), c.headers = c.headers || {
                    "Content-Type": "application/json"
                }, a({
                method: b,
                url: e,
                params: c.params,
                data: c.data,
                headers: c.headers
            }).success(function(a, b) {
                d(a, b);
            });
        }
    }, b;
} ]), angular.module("auikit.utils", []).factory("utils", function() {
    function a(a, c) {
        return b(a).replace(c ? /\s+/g : / +/g, " ").replace(/^\s+/, "").replace(/\s+$/, "");
    }
    function b(a) {
        return c(a) ? "" : a + "";
    }
    function c(a) {
        return null === a || void 0 === a || a !== a;
    }
    function d(a) {
        var b, c = 0;
        for (b in a) a.hasOwnProperty(b) && c++;
        return c;
    }
    function e(a, b) {
        return -1 !== a.indexOf(b, a.length - b.length);
    }
    return {
        trim: a,
        isNull: c,
        toStr: b,
        objectSize: d,
        endWith: e
    };
}).service("base64", function() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(b) {
        for (var c, d, e, f, g, h = "", i = "", j = "", k = 0; k < b.length; ) c = b.charCodeAt(k++),
            d = b.charCodeAt(k++), i = b.charCodeAt(k++), e = c >> 2, f = (3 & c) << 4 | d >> 4,
            g = (15 & d) << 2 | i >> 6, j = 63 & i, isNaN(d) ? g = j = 64 : isNaN(i) && (j = 64),
            h = h + a.charAt(e) + a.charAt(f) + a.charAt(g) + a.charAt(j), c = d = i = "", e = f = g = j = "";
        return h;
    }, this.decode = function(b) {
        var c, d, e, f, g, h = "", i = "", j = "", k = 0;
        for (b = b.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < b.length; ) e = a.indexOf(b.charAt(k++)),
            f = a.indexOf(b.charAt(k++)), g = a.indexOf(b.charAt(k++)), j = a.indexOf(b.charAt(k++)),
            c = e << 2 | f >> 4, d = (15 & f) << 4 | g >> 2, i = (3 & g) << 6 | j, h += String.fromCharCode(c),
        64 != g && (h += String.fromCharCode(d)), 64 != j && (h += String.fromCharCode(i)),
            c = d = i = "", e = f = g = j = "";
    };
}), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };
    c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d.find("span")[e]()), d.find("span")[e](null == f[b] ? this.options[b] : f[b]),
        "loadingText" == b && d.attr("data-effeckt-type", d.attr("data-loading-type"));
        var g = d.data("timeout") || 2e3;
        setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : "successText" == b ? (this.isLoading = !0,
                d.addClass(c).attr(c, c).attr("data-effeckt-type", "3d-rotate-success"), setTimeout(function() {
                d.data("bs.button").setState("reset");
            }, g)) : "errorText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).attr("data-effeckt-type", "3d-rotate-error"),
                setTimeout(function() {
                    d.data("bs.button").setState("reset");
                }, g)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")),
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        }
        a && this.$element.toggleClass("active");
    };
    var d = a.fn.sbutton;
    a.fn.sbutton = b, a.fn.sbutton.Constructor = c, a.fn.sbutton.noConflict = function() {
        return a.fn.sbutton = d, this;
    };
}(jQuery);