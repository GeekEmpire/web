// 已审核数据表
layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#mz_meet_table'
        ,url:'/houtai/upload/2.json'
        ,title: '用户数据表'
        ,id:'tableReload'
        ,cols: [[
            {type: 'checkbox', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
            ,{field:'name', title:'姓名', width:80}
            ,{field:'job', title:'职位', width:80}
            ,{field:'time', title:'提交时间', width:120}
            ,{field:'useTime', title:'申请时间段', width:120, sort: true}
            ,{field:'room', title:'申请会议室', width:100}
            ,{field:'phone', title:'联系方式',width:120}
            ,{field:'other', title:'其他',width:120}
            ,{fixed: 'right', title:'操作', toolbar: '#barMeet', width:120}
        ]]
        ,page: true
    });
    //监听行工具事件
    table.on('tool(mz_meet_table)', function(obj){
        var data = obj.data;
        //console.log(obj)
        var re;
        if(obj.event === 'del'){

            layer.prompt({
                formType: 2
            }, function(value, index){
                obj.update({

                });
                layer.close(index);
            });
        } else if(obj.event === 'edit'){
            layer.confirm('确认？',function (index) {
                obj.del();
                layer.close(index);//向服务端发送删除指令
            })
        }
    });
    var $ = layui.$, active = {
        reload: function(){
            var searchReload = $('#searchReload');
            var searchWay = $('#mz_search_w');
            //执行重载
            table.reload('tableReload', {
                page: {
                    curr: 2//重新从第 1 页开始
                }
                ,where: {
                    key: {
                        id: searchReload.val(),
                        way: searchWay.val()
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
            "username": "贤心" // "name": "value"
            ,"sex": "女"
            ,"password": "123434"
            ,"check[write]": true
            ,"open": false
            ,"desc": "我爱layui"
        })
        //各种基于事件的操作，下面会有进一步介绍
    });
    layer.open({
        type: 1
        ,title: "添加会议室" //不显示标题栏
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
})

// 未审核
layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#mz_shenghed_table'
        ,url:'/houtai/upload/1.json'
        ,title: '用户数据表'
        ,id:'tableReload'
        ,cols: [[
            {field: 'num',title:'#', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
            ,{field:'name', title:'姓名', width:80}
            ,{field:'job', title:'职位', width:80}
            ,{field:'time', title:'提交时间', width:120}
            ,{field:'useTime', title:'申请时间段', width:120, sort: true}
            ,{field:'room', title:'申请会议室', width:100}
            ,{field:'phone', title:'联系方式',width:120}
            ,{field:'other', title:'其他',width:120}
            ,{field:'other', title:'状态',width:120}
        ]]
        ,page: true
    });
    //监听行工具事件
    table.on('tool(mz_meet_table)', function(obj){
        var data = obj.data;
        //console.log(obj)
        var re;
        if(obj.event === 'del'){

            layer.prompt({
                formType: 2
            }, function(value, index){
                obj.update({

                });
                layer.close(index);
            });
        } else if(obj.event === 'edit'){
            layer.confirm('确认？',function (index) {
                obj.del();
                layer.close(index);//向服务端发送删除指令
            })
        }
    });
    var $ = layui.$, active = {
        reload: function(){
            var searchReload = $('#searchReload');

            //执行重载
            table.reload('tableReload', {
                page: {
                    curr: 2//重新从第 1 页开始
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