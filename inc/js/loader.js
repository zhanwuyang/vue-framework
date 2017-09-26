/**
 * Created by vtm2k7 on 16/8/24.
 * @desc Happy-Share Wechat HTML5 FrameWork Loader v1.0
 * @author stupidchen@gmail.com
 * @version 1.1
 * +配置文件预加载图片支持数组方式 ['360/i{i}.png', 1, 20, 1], 地址,起始,结束,步频
 */
var Loader = function (callback, isCache) {
    this.that = this;
    // 回掉函数
    this.done = callback;
    // 资源地址头
    this.baseUrl = ROOT_URL || "";
    // 图片资源池
    this.imageArr = [];
    // 同步队列
    this.syncArr = [];
    // 异步队列
    this.asyncArr = [];
    // 加载队列
    this.queues = new Array();
    // 场景计数
    this.loadedPages = 0;
    // 是否动态加载资源（增加版本号）
    this.nocache = !isCache;
    // 初始化
    this.init();
};

Loader.prototype = {
    init: function () {
        var that = this;
        this.load("script", "config.js", function () {
            that.loadConfig(
                page_config,
                function (total, index, pindex, real_index, real_total) {
                    rate = real_index / real_total;
                    document.getElementById("loader_data").innerHTML = Math.floor(rate * 100) + "%";
                },
                function (pindex) {
                    page_config.pages[pindex].finished = true;
                    ++that.loadedPages;
                    // 所有场景加载完毕
                    if (that.loadedPages >= page_config.pages.length) {
                        that.done(page_config);
                    }
                },
                0
            );
        });
    },
    // 创建脚本
    createJs: function (src) {
        var script = document.createElement("script");
        script.async = false;
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.src = this.fmtUrl(src, 'js');
        return script;
    },
    // 创建样式
    createCss: function (src) {
        var link = document.createElement("link");
        link.async = false;
        link.rel = "stylesheet";
        link.href = this.fmtUrl(src, 'css');
        return link;
    },
    // 格式化地址
    fmtUrl: function (src, sub) {
        var url;
        sub = (sub) ? '/' + sub + '/' : '';
        if (src.indexOf("http://") >= 0) {
            url = src;
        } else {
            url = this.baseUrl + sub + src;
        }
        // 对于项目中的image资源,强制不添加版本号
        if (this.nocache && sub != '/image/')
            url = url + (/\?/.test(url) ? "&" : "?") + "_=" + (new Date()).getTime();
        return url;
    },
    // 追加到头部
    insertHead: function (obj) {
        var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement, script, options;
        head.insertBefore(obj, head.lastChild);
    },
    // 加载素材
    load: function (type, src, callback) {
        switch (type) {
            case "script":
                this.loadScript(src, callback);
                break;
            case "css":
                this.loadCSS(src, callback);
                break;
            case "image":
                this.loadImage(src, callback);
                break;
            default:
                break;
        }
    },
    // 加载脚本
    loadScript: function (src, callback) {
        var script = this.createJs(src);
        this.insertHead(script);
        if (callback) {
            document.addEventListener ? script.addEventListener("load", callback, false) : script.onreadystatechange = function () {
                if (/loaded|complete/.test(link.readyState)) {
                    script.onreadystatechange = null;
                    callback();
                }
            }
        }
    },
    // 加载样式
    loadCSS: function (src, callback) {
        var link = this.createCss(src);
        this.insertHead(link);
        if (callback) {
            document.addEventListener ? link.addEventListener("load", callback, false) : link.onreadystatechange = function () {
                if (/loaded|complete/.test(link.readyState)) {
                    link.onreadystatechange = null;
                    callback();
                }
            }
        }
    },
    // 加载图片
    loadImage: function (src, callback) {
        var image = new Image();
        image.src = this.fmtUrl(src, 'image');
        image.addEventListener('load', function (_src, _callback, _image, that) {
            return function (e) {
                _callback.apply(this, arguments);
                that.insertImage(_src, {
                    loaded: true,
                    img: _image
                });
            }
        }(src, callback, image, this));
        image.addEventListener('error', function (_src, _callback, _image, that) {
            return function (e) {
                _callback.apply(this, arguments);
                that.insertImage(_src, {
                    loaded: false,
                    img: _image
                });
            }
        }(src, callback, image, this));
    },
    // TODO 暂未使用
    insertImage: function (url, obj) {
        this.imageArr[url] = obj;
    },
    // 同步加载
    loadSync: function (configs, percentage, next, index) {
        if (configs.length > 0) {
            index = index || 0;
            var config = configs[index];
            var that = this;
            this.load(
                config[0],  // 加载类型
                config[1],  // 加载地址
                function () {
                    if (index < configs.length - 1) {
                        percentage(configs.length, index);
                        that.loadSync(configs, percentage, next, index + 1);
                    } else {
                        // 最后一个同步资源被加载
                        next.apply(this, arguments);
                    }
                }   // 回掉函数
            );
        } else {
            next();
        }

    },
    // 异步加载
    loadAsync: function (configs, percent, finish) {
        var index = 0;
        for (var i = 0; i < configs.length; i++) {
            var config = configs[i];
            this.load(
                config[0],
                config[1],
                function () {
                    index++;
                    percent(configs.length, index);
                    if (index == configs.length) {
                        finish.apply(this, arguments);
                    }
                })
        }
    },
    // 添加加载队列
    addQueue: function (type, url, sync, loader_index) {
        var config = [type, url];
        loader_index = loader_index || 0;
        if (sync) {
            // 同步列队
            this.queues[loader_index].syncArr.push(config);
        } else {
            // 异步队列
            this.queues[loader_index].asyncArr.push(config);
        }
    },
    // 当前场景加载数量
    getAlreadyCount: function (index) {
        var total_count = 0;
        for (var i = 0; i < index; i++) {
            var total = this.queues[i].asyncArr.length + this.queues[i].syncArr.length;
            total_count += total;
        }
        return total_count;
    },
    // 共加载数量
    getTotalCount: function () {
        var total_count = 0;
        for (var i = 0; i < this.queues.length; i++) {
            var total = this.queues[i].asyncArr.length + this.queues[i].syncArr.length;
            total_count += total;
        }
        return total_count;
    },
    // 读取配置文件
    loadConfig: function (config, percent, finish, page_index) {
        page_index = page_index || 0;
        this.queues.push({
            asyncArr: [],
            syncArr: [],
            finished: false
        });
        // 加载JS
        var js = config.basic.js;
        for (var i = 0; i < js.length; i++) {
            if (js[i].sync) { //同步列队
                this.addQueue("script", js[i].url, true, 0);
            } else {
                this.addQueue("script", js[i].url, false, 0);
            }
        }
        // 加载CSS
        var css = config.basic.css;
        for (var i = 0; i < css.length; i++) {
            if (css[i].sync) { //同步列队
                this.addQueue("css", css[i].url, true, 0);
            } else {
                this.addQueue("css", css[i].url, false, 0);
            }
        }
        // 加载图片
        var images = config.basic.images, tmpImage, tmpUrl;
        for (var i = 0; i < images.length; i++) {
            tmpImage = images[i];
            if (tmpImage instanceof Array) {
                for (var j = tmpImage[1]; j <= tmpImage[2]; j = j + tmpImage[3]) {
                    tmpUrl = tmpImage[0].replace('{i}', j);
                    this.addQueue("image", tmpUrl, false, 0);
                }
            } else {
                this.addQueue("image", tmpImage, false, 0);
            }

        }
        // 加载页面
        var pages = config.pages;
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (i > 0) {
                this.queues.push({
                    asyncArr: [],
                    syncArr: [],
                    finished: false
                });
            }
            for (var j = 0; j < page.dom.length; j++) {
                var _dom = page.dom[j]; //获取该dom元素的fill
                if (_dom.src) {
                    this.addQueue("image", _dom.src, false, i);
                }
            }
        }
        //执行loading
        this.execQueue(percent, finish, page_index);
    },
    // 开始加载队列
    execQueue: function (percent, finish, loader_index) {
        loader_index = loader_index || 0;
        var total = this.queues[loader_index].asyncArr.length + this.queues[loader_index].syncArr.length;
        var that = this;
        this.loadSync(
            // 同步资源列表
            this.queues[loader_index].syncArr,
            // 同步资源进行中
            function (a, index) {
                percent(
                    total,
                    index,
                    loader_index,
                    that.getAlreadyCount(loader_index) + index,
                    that.getTotalCount()
                );
            },
            // 同步资源加载完成
            function () {
                that.loadAsync(
                    // 异步资源列表
                    that.queues[loader_index].asyncArr,
                    // 异步资源加载中
                    function (a, index) {
                        var withSyncCnt = index + that.queues[loader_index].syncArr.length;
                        percent(
                            total,
                            withSyncCnt,
                            loader_index,
                            that.getAlreadyCount(loader_index) + withSyncCnt,
                            that.getTotalCount()
                        )
                    },
                    // 异步资源加载完成
                    function () {
                        //当前page全部执行完毕之后
                        finish(loader_index); //执行依次finish回调
                        if (loader_index < that.queues.length - 1) {
                            that.execQueue(percent, finish, loader_index + 1);
                        }
                    });
            },
            0
        );
    }
};
