/**
 * Created by vtm2k7 on 16/8/24.
 * @desc Happy-Share Wechat HTML5 FrameWork Render v1.0
 * @author stupidchen@gmail.com
 */

var scale, css_width, css_height;
var Render = function (act, page_config, isFixWidth) {
    this.page_config = page_config;
    this.act = act;
    this.isFixWidth = isFixWidth;
    this.render();
};

Render.prototype = {
    renderPage: function (page) {
        if (page.isRender) {
            return;
        }
        var that = this;
        var container = $("<div></div>").addClass("container").attr("id", page.id);
        var superContainer = $("<div></div>").addClass('fix');
        var subContainer = $("<div></div>").addClass('camera');
        var inner_dom;
        for (var i = 0; i < page.dom.length; i++) {
            var item = page.dom[i];
            var type = item.type;
            var dom;

            switch (type) {
                case "mp4":
                    dom = $("<video poster='" + ROOT_URL + "/vod/" + item.poster + ".jpg' preload='none'></video>");
                    $(dom).attr("src", ROOT_URL + "/vod/" + item.src2);
                    if (item.rect) {
                        if (item.rect.w) $(dom).css("width", item.rect.w + "px");
                        if (item.rect.h) $(dom).css("height", item.rect.h + "px");
                    }
                    break;
                case "img":
                    if (item.realImg) {
                        // 实际图片
                        dom = $("<img>").attr("src", ROOT_URL + "/image/" + item.src);
                        if (item.rect) {
                            if (item.rect.w) $(dom).attr("width", item.rect.w);
                            if (item.rect.h) $(dom).attr("height", item.rect.h);
                        }
                    } else {
                        // 背景图片处理
                        dom = $("<div></div>");
                        if (item.src) {
                            $(dom).css("background", "url(" + ROOT_URL + "/image/" + item.src + ") left no-repeat")
                                .css("background-size", "100% 100%");
                        }
                        if (item.rect) {
                            if (item.rect.w) $(dom).css("width", item.rect.w + "px");
                            if (item.rect.h) $(dom).css("height", item.rect.h + "px");
                        }
                    }
                    break;
                case "div":
                    dom = $("<div></div>");
                    if (item.src) {
                        $(dom).css("background", "url(" + ROOT_URL + "/image/" + item.src + ") left no-repeat")
                            .css("background-size", "auto 100%");
                    }
                    if (item.html) $(dom).html(item.html);
                    if (item.rect) {
                        if (item.rect.w) $(dom).css("width", item.rect.w + "px");
                        if (item.rect.h) $(dom).css("height", item.rect.h + "px");
                    }
                    break;
                case "crop":
                    dom = $("<div></div>");
                    if (item.src) {
                        $(dom).css("background-image", "url(" + ROOT_URL + "/image/" + item.src + ")")
                            .css("background-repeat", "no-repeat")
                            .css("background-size", "cover");
                    }
                    if (item.html) $(dom).html(item.html);
                    if (item.rect) {
                        if (item.rect.w) $(dom).css("width", item.rect.w + "px");
                        if (item.rect.h) $(dom).css("height", item.rect.h + "px");
                        if (item.rect.xx) $(dom).css("background-position-x", item.rect.xx + "px");
                        if (item.rect.yy) $(dom).css("background-position-y", item.rect.yy + "px");
                    }
                    break;
                case "canvas":
                    dom = $("<canvas></canvas>");
                    if (item.src) $(dom).css("background", "url(" + ROOT_URL + "/image/" + item.src + ")")
                        .css("background-size", "100% 100%");
                    if (item.html) $(dom).html(item.html);
                    if (item.rect) {
                        if (item.rect.w) {
                            $(dom).css("width", item.rect.w + "px");
                            $(dom).attr("width", item.rect.w * 2);
                        }
                        if (item.rect.h) {
                            $(dom).css("height", item.rect.h + "px");
                            $(dom).attr("height", item.rect.h * 2);
                        }
                    }
                    break;
                case "input":
                    dom = $("<input />");
                    if(item.intpye) $(dom).attr('type',item.intpye);
                    if(item.maxlength) $(dom).attr('maxlength',item.maxlength);
                    if(item.placeholder) $(dom).attr('placeholder',item.placeholder);
                    $(dom).css('outline','none');//去除点击时的边框线
                    $(dom).css('background','transparent');//背景透明
                    if(item.rect){
                        if (item.rect.w) $(dom).css("width", item.rect.w + "px");
                        if (item.rect.h) $(dom).css("height", item.rect.h + "px");
                    }
                    break;
                case 'bg800':
                    dom = $('<div></div>');
                    if (item.src) {
                        $(dom).css("background", "url(" + ROOT_URL + "/image/" + item.src + ") left no-repeat")
                            .css("background-size", "auto 100%");
                    }
                    $(dom).css({width:'400px',height:'504px',left:'-200px',top:'0px'});
                    break;
                case 'bg900':
                    dom = $('<div></div>');
                    if (item.src) {
                        $(dom).css("background", "url(" + ROOT_URL + "/image/" + item.src + ") left no-repeat")
                            .css("background-size", "auto 100%");
                    }
                    $(dom).css({width:'450px',height:'603px',left:'-225px',top:'0px'});
                    break;
                default:
                    break;
            }
            if (item.rect) {
                if (item.rect.x) $(dom).css("left", item.rect.x);
                if (item.rect.y) $(dom).css("top", item.rect.y);
                if (item.fixRight) {
                    $(dom).css("left", ($(window).width() / 2 - item.rect.w) - 30);
                }
            }
            if (item.click) {
                var click = item.click;
                var args = item.args || false;
                $(dom).touch_click(function (_click, _args, _dom) {
                    return function () {
                        if (_args !== false) {
                            that.act[_click](_args, _dom);
                        } else {
                            that.act[_click](_dom);
                        }
                    };
                }(click, args, dom));
            }
            if (item.real_click) {
                var click = item.real_click;
                var args = item.args || false;
                $(dom).swip({
                    speed: function (_click, _args, _dom) {
                        return function (x, y) {
                            if (Math.abs(x) < 5) {
                                if (_args !== false) {
                                    that.act[_click](_args, _dom);
                                } else {
                                    that.act[_click](_dom);
                                }
                            }
                        };
                    }(click, args, dom)
                });
            }
            if (item.id) $(dom).attr("id", item.id);
            if (item.class) $(dom).addClass(item.class);
            if (item.animate) {
                $(dom).attr("animate", item.animate);
                $(dom).css("display", 'none');
            }
            if (item.css) {
                for (var k in item.css) {
                    var v = item.css[k];
                    dom.css(k, v);
                }
            }
                if (item.isSuper) {
                    $(dom).appendTo(superContainer);
                } else {
                    $(dom).appendTo(subContainer);
                }
        }
        subContainer.appendTo(container);
        superContainer.appendTo(container);

        // 支持定寛和定高
        // TODO 定高需要扩展一个支持 牺牲顶部或者牺牲底部的功能
        if (this.isFixWidth) {
            var screen_centre = css_height / 2;
            var distance = -screen_centre;
            var page_dom = $("<div></div>").addClass("layer").attr("id", page.id + "_bg");
            $(container).css("-webkit-transform", " scale(" + scale + ") translateY(" + -distance + "px)");
            $(container).appendTo(page_dom);
            $(page_dom).appendTo("#wrap");
        } else {
            var screen_centre = css_width / 2;
            var distance = -screen_centre;
            var page_dom = $("<div></div>").addClass("layer").attr("id", page.id + "_bg");
            $(container).css("-webkit-transform", " scale(" + scale + ") translateX(" + -distance + "px)");
            $(container).appendTo(page_dom);
            $(page_dom).appendTo("#wrap");
        }
        // 完成渲染
        page.isRender = true;
    },
    render: function () {
        var wrap = $("<div></div>").attr("id", "wrap").appendTo("body");
        var page_height = $(window).height();
        var page_width = $(window).width();
        //console.log(page_width, page_height);
        if (this.isFixWidth) {
            // 固定宽度,损失上下
            
                scale = page_width / 320;
            
            css_height = page_height / scale;
        } else {
            // 固定高度,损失左右
                scale = page_height / 504;
            
            css_width = page_width / scale;
        }
    },
    renderAll: function () {
        this.render();
        var pages = this.page_config.pages;
        for (var i = 0; i < pages.length; i++) {
            this.renderPage(pages[i]);
        }
    }
};
