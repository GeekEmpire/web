//添加会议室
$('#mz_add_meet').on("click", function () {
    layui.use('form', function(){
        var form = layui.form;

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
});


//table数据渲染
layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#mz_meet_table'
        ,url:'http://lsudjh.top:8081/meetingRoom/listEntity'
        ,method: 'post'
        ,contentType: 'application/json'
        ,toolbar: '#toolbarMeet'
        ,title: '用户数据表'
        ,id:'tableReload'
        ,cols: [[
            {type: 'checkbox', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
            ,{field:'imageUrl', title:'查看详情', width:120, templet: '#switchTpl', unresize: true}
            ,{field:'username', title:'名称', width:90}
            ,{field:'address', title:'位置', width:150}
            ,{field:'space', title:'容量', width:90, sort: true}
            ,{field:'detail', title:'描述', width:100}
            ,{field:'state', title:'状态', width:100}
            ,{field:'auto', title:'是否需要审核',width:120}
            ,{fixed: 'right', title:'操作', toolbar: '#barMeet', width:120}
        ]]
        ,page: true
        ,parseData: function(res){ //res 即为原始返回的数据
            return {
                "code": res.code, //解析接口状态
                "msg": res.message, //解析提示文本
                "count": res.data.total, //解析数据长度
                "data": res.data.data //解析数据列表
            };
        }
    });
    table.on('toolbar(mz_meet_table)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
                break;
            case 'isAll':
                layer.msg(checkStatus.isAll ? '全选': '未全选');
                break;
        };
    });

    //监听行工具事件
    table.on('tool(mz_meet_table)', function(obj){
        var data = obj.data;
        //console.log(obj)
        if(obj.event === 'del'){
            layer.confirm('真的删除行么', function(index){
                console.log(index);
                obj.del();
                layer.close(index);//向服务端发送删除指令
            });
        } else if(obj.event === 'edit'){  //修改
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
                ,title: "修改会议室"
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
            console.log(obj)
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