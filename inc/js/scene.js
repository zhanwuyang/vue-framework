var Scene = function (page_config, fixType) {
    this.page_config = page_config;
    this.act = new Action(page_config);
    this.render = new Render(this.act, page_config, (fixType === 'fixWidth') ? true : false);

    this.pages = page_config.pages;
    this.page_index = 0;
    this.page_id;

    this.cgIds = {};
    this.soundIds = [];
    this.init();

};

Scene.prototype = {
    init: function () {
        var that = this;
        $("#loader").hide();
        $("#block").hide();
        $('body').on('touchmove',function(e){
            e.preventDefault();
        })
        that.showPage('page_1');
        
    }, 
   
    showPage: function (page_id) {
        if (this.isOver) return;
        console.log('场景切换至[' + page_id + ']');
        this.page_id = page_id;
        var page = this.getPage(page_id);

        $('.container').hide();
        $('.layer').remove();
        if (!page.finished) {
            page.waiting = true;
        } else {
            page.isRender = false;
            this.render.renderPage(page);

        }
    },
    getPage: function (page_id) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].id == page_id) {
                return this.pages[i];
            }
        }
        return null;
    },
};
