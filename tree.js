function liMounld(data) {
    return `<li class="dd-item" data-id="${data.menu_id}" >
                        <div class="dd-handle">
                            ${data.name}<div class="btn3" style="float:right"><i class="iconfont icon-add" title="增加"></i><i class="iconfont icon-edit" title="修改"></i><i class="iconfont icon-delete" title="删除"></i></div>
                        </div>
                     </li>`;
}

function ulFront(data) {
    return `<li data-id="${data.menu_id}">  <div class="dd-handle"><i class="iconfont listIconF icon-forward"></i>${data.name}<div class="btn3" style="float:right"><i class="iconfont icon-add" title="增加"></i><i class="iconfont icon-edit" title="修改"></i><i class="iconfont icon-delete" title="删除"></i></div></div></li><ol class="dd-list dd-list1">`;
}

function ulAfter(data) {
    return `</ol></li>`;
};


var tree = {                   // list 列表数据    liMounld  无子集模板 ， ulFront 有子集前般部分， ulAfter 有子集后半部分模板 ，id 关键字, pid 父id
    init: function (para) {
        this.data = para;
        this.toTow();
        this.n = "";
        this.ftTree(0);
        return this.n;
    },
    data: null,
    n: "",
    toTow: function () {
        for (var i in this.data.list) {
            this.data.list[i].l = this.toL(this.data.list[i][this.data.id]);  //就是获取每个对象的menu_id
            this.data.list[i].r = this.toR(this.data.list[i][this.data.pid], i);//就是获取每个对象的pid
        }
    },
    toL: function (id) {
        for (var i in this.data.list) {
            if (this.data.list[i][this.data.pid] == id) {
                return i;
            }
        }
        return null;
    },
    toR: function (pId, l) {
        for (var i = l; i < this.data.list.length; i++) {
            if (this.data.list[i][this.data.pid] == pId && i != l) {
                return i;
            }
        }
        return null;
    },
    ftTree: function (w) {
        if (this.data.list[w].l == null) {
            var li = this.data.liMounld(this.data.list[w]);
            this.n = this.n + li;
            if (this.data.list[w].r != null) {
                this.ftTree(this.data.list[w].r);
            }
        } else {
            this.n = this.n + this.data.ulFront(this.data.list[w]);
            this.ftTree(this.data.list[w].l);
            this.n = this.n + this.data.ulAfter(this.data.list[w]);
            if (this.data.list[w].r != null) {
                this.ftTree(this.data.list[w].r);
            }
        }
        return;
    }
}