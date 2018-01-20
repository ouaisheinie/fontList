/**
 * Created by Administrator on 2018/1/19.
 */
var zNodes=[{"menu_id":"535da2d1e10b4b38bb2b7a2548998cfc","doMethod":"{}","sort":0,"remark":"备注","name":"名称1","pid":"0","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"82543a60c87840879c2d6f4685528f62","doMethod":"{}","sort":0,"remark":"备注","name":"名称2","pid":"0","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"8329d494f10f4a7183910e06ab5739af","doMethod":"{}","sort":0,"remark":"备注","name":"名称3","pid":"0","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"c22efb70d5e642b78997ef802924713e","doMethod":"{}","sort":0,"remark":"备注","name":"名称4","pid":"82543a60c87840879c2d6f4685528f62","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"c22efb70d5e642b78997ef8029247131e","doMethod":"{}","sort":0,"remark":"备注","name":"名称5","pid":"82543a60c87840879c2d6f4685528f62","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"c22efb70d5e642b78997ef8029247113e","doMethod":"{}","sort":0,"remark":"备注","name":"名称6","pid":"82543a60c87840879c2d6f4685528f62","murl":"admin/add.shtml","depth":"0"},

    {"menu_id":"2222","doMethod":"{}","sort":0,"remark":"备注","name":"名称7","pid":"82543a60c87840879c2d6f4685528f62","murl":"admin/add.shtml","depth":"0"},

    {"menu_id":"22222","doMethod":"{}","sort":0,"remark":"备注","name":"名称8","pid":"2222","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"222222","doMethod":"{}","sort":0,"remark":"备注","name":"名称9","pid":"2222","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"2122222","doMethod":"{}","sort":0,"remark":"备注","name":"名称10","pid":"2222","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"23212222","doMethod":"{}","sort":0,"remark":"备注","name":"名称11","pid":"2222","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"22321321222","doMethod":"{}","sort":0,"remark":"备注","name":"名称12","pid":"2222","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"22232132122","doMethod":"{}","sort":0,"remark":"备注","name":"名称13","pid":"2222","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"c22efb70d5e642b78997ef8029247113e","doMethod":"{}","sort":0,"remark":"备注","name":"名称14","pid":"82543a60c87840879c2d6f4685528f62","murl":"admin/add.shtml","depth":"0"},
    {"menu_id":"c22efb70d5e642b78997ef802924713e","doMethod":"{}","sort":0,"remark":"备注","name":"名称15","pid":"82543a60c87840879c2d6f4685528f62","murl":"admin/add.shtml","depth":"0"},
    { "menu_id": "83fc16a3ee1f47139e2f4c055aa9f460", "doMethod": "{}", "sort": 1, "remark": "备注1", "name": "名称16", "pid":"82543a60c87840879c2d6f4685528f62","murl":"admin/add.shtml","depth":"0"}];

//console.log(menulist);


//分左右
function toTow() {
    for (var i in zNodes) {
        zNodes[i].l = toL(zNodes[i].menu_id);
        zNodes[i].r = toR(zNodes[i].pid, i);
    }
    // ftTree(0);
    // console.log(n);
}
//left子树
function toL(id) {
    for (var i in zNodes) {
        if (zNodes[i].pid == id) {
            return i;
        }
    }
    return null;
}
//right子树
function toR(pId, l) {
    for (var i = l; i < zNodes.length; i++) {
        if (zNodes[i].pid == pId && i != l) {
            return i;
        }
    }
    return null;
}

var n="";
function ftTree(w) {
    if (zNodes[w].l == null) {
        n = n + '<li><a>' + zNodes[w].name + '</a></li>';
        if (zNodes[w].r != null) {
            ftTree(zNodes[w].r);
        }
    } else {
        n = n + '<li class="">';
        n = n + zNodes[w].name;
        n = n + '<ul class="submenu">';
        ftTree(zNodes[w].l);
        n = n + '</ul></li>';
        if (zNodes[w].r != null) {
            ftTree(zNodes[w].r);
        }
    }
    return;
}


toTow();


 ftTree(0);
console.log(n);
console.log(zNodes);
