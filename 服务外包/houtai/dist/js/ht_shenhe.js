function show_people(id){
    layui.use('form', function(){
        var form = layui.form;

        form.val("initForm", {
            // "username": "贤心" // "name": "value"
            // ,"sex": "女"
            // ,"password": "123434"
            // ,"check[write]": true
            // ,"open": false
            // ,"desc": "我爱layui"
        })
        //各种基于事件的操作，下面会有进一步介绍
    });
    layer.open({
        type: 1
        ,title: ['发起人信息查看', 'font-size:18px;']
        ,area: ['600px','500px']
        ,id: 'show_people_detail' //设定一个id，防止重复弹出
        // ,btn: ['确定', '取消']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: $('#people_detail')
    });
}
// 数据表
layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#mz_shenhe_table'     //未审核
        ,url:'http://localhost:63342/服务外包/houtai/upload/2.json'
        ,title: '未审核数据表'
        ,id:'shenheTable'
        ,cols: [[
            {type: 'checkbox', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
            ,{field:'name', title:'申请人', width:80, unresize: true}
            ,{field:'attendance', title:'人数', width:60, unresize: true}
            ,{field:'applay_time', title:'提交时间', width:120, unresize: true}
            ,{field:'useTime', title:'申请时间段', width:120, sort: true, unresize: true}
            ,{field:'room', title:'申请会议室', width:100, unresize: true}
            ,{field:'topic', title:'会议主题',width:90, unresize: true}
            ,{field:'price', title:'费用',width:90, unresize: true}
            ,{field:'other', title:'其他',width:90, unresize: true}
            ,{fixed: 'right', title:'操作111', toolbar: '#barMeet', width:115, unresize: true}
        ]]
        ,page: true
    });
    table.render({
        elem: '#mz_shenghed_table'
        ,url:'http://localhost:63342/服务外包/houtai/upload/2.json'
        ,title: '已审核数据表'
        ,id:'shenhedTable'
        ,cols: [[
            {type: 'checkbox', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
            ,{field:'name', title:'申请人', width:80, unresize: true,
                templet: '<div><a href="#" onclick=show_people("{{d.id}}") class="layui-table-link">{{d.name}}</a></div>'}
            ,{field:'attendance', title:'人数', width:50, unresize: true}
            ,{field:'applay_time', title:'提交时间', width:120, unresize: true}
            ,{field:'useTime', title:'申请时间段', width:120, sort: true, unresize: true}
            ,{field:'room', title:'申请会议室', width:100, unresize: true}
            ,{field:'topic', title:'会议主题',width:90, unresize: true}
            ,{field:'price', title:'费用',width:90, unresize: true}
            ,{field:'other', title:'其他',width:90, unresize: true}
            ,{field:'state', title: '状态', width: 100, templet: '#stateTp'} //这里的templet值是模板元素的选择器
        ]]
        ,page: true
    });

    //监听行工具事件
    table.on('tool(mz_shenhe_table)', function(obj){
        var data = obj.data;
        //console.log(obj)
        var re;
        if(obj.event === 'del'){

            layer.prompt({
                formType: 2,
                title: '请输入拒绝理由'
            }, function(value, index){
                obj.update({

                });
                table.reload('shenheTable', {
                    url: 'http://localhost:63342/服务外包/houtai/upload/1.json',
                    page: {
                        curr: 1//重新从第 1 页开始
                    }
                    ,where: {
                        key: {
                            id: searchReload.val(),
                            way: searchWay.val()
                        }
                    }
                });
                obj.del();
                layer.close(index);
            });
        } else if(obj.event === 'edit'){
            layer.confirm('确认？',function (index) {
                obj.del();
                layer.close(index);//关闭弹出层
            })
        }
    });
    table.on('tool(mz_shenhed_table)', function(obj){
        var data = obj.data;
        //console.log(obj)
        var re;
        if(obj.event === 'del'){

            // layer.prompt({
            //     formType: 2,
            //     title: '请输入拒绝理由',
            // }, function(value, index){
            //     obj.update({
            //
            //     });
            //     console.log(value);
            //     layer.close(index);
            // });
        } else if(obj.event === 'edit'){
            layer.confirm('确认？',function (index) {
                obj.del();
                layer.close(index);//向服务端发送删除指令
            })
        }
    });

    //搜索监听，重载
    var $ = layui.$, active = {
        reload: function(){
            var searchReload = $('#searchReload');
            var searchWay = $('#mz_search_w');
            //执行重载
            table.reload('shenheTable', {
                url: 'http://localhost:63342/服务外包/houtai/upload/1.json',
                page: {
                    curr: 1//重新从第 1 页开始
                }
                ,where: {
                    key: {
                        id: searchReload.val(),
                        way: searchWay.val()
                    }
                }
            });
            table.reload('shenhedTable', {
                url: 'http://localhost:63342/服务外包/houtai/upload/1.json',
                page: {
                    curr: 1//重新从第 1 页开始
                }
                ,where: {
                    key: {
                        id: searchReload.val()
                    }
                }
            });
        }
    };
    $('.searchTable .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });
});


// 添加会议室
$('#mz_add_meet').on("click", function () {
    layui.use('form', function(){
        var form = layui.form;

        form.val("initForm", {
            // "username": "贤心" // "name": "value"
            // ,"sex": "女"
            // ,"password": "123434"
            // ,"check[write]": true
            // ,"open": false
            // ,"desc": "我爱layui"
        })
        //各种基于事件的操作，下面会有进一步介绍
    });
    layer.open({
        type: 1
        ,title: "添加预约" //不显示标题栏
        ,closeBtn: true
        ,area: '500px'
        ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
        ,btn: ['确定', '取消']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: $('#mz_add_info')
        ,yes:function (index, layero) {
            console.log(layero);
        }
        ,btn2:function (index, layero) {
            console.log(1);
        }
    });
});


function changeSearchWay() {
    var i =document.getElementById("mz_search_w").value;
    console.log(i)
}

$(function () {

});