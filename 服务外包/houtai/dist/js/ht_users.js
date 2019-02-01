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
        ,title: "添加员工" //不显示标题栏
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

layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#mz_meet_table'
        ,url:'/houtai/upload/user_table.json'
        ,toolbar: '#toolbarMeet'
        ,title: '用户数据表'
        ,id:'tableReload'
        ,cols: [[
            {type: 'checkbox', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
            ,{field:'name', title:'用户名', width:150}
            ,{field:'phone', title:'手机号', width:150}
            ,{field:'email', title:'邮箱', width:150}
            ,{field:'password', title:'密码', width:150, sort: true}
            ,{field:'avatar', title:'头像', width:150}
            ,{field:'role', title:'权限',width:120}
            ,{fixed: 'right', title:'操作', toolbar: '#barMeet', width:150}
        ]]
        ,page: true
    });
    //监听行单击事件（单击事件为：rowDouble）
    // table.on('row(mz_meet_table)', function(obj){
    //     var data = obj.data;
    //     console.log(data);
    //     layer.alert(JSON.stringify(data), {
    //         title: '当前行数据：'
    //     });
    //
    //     //标注选中样式
    //     obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
    // });
    //头工具栏事件
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
        } else if(obj.event === 'edit'){
            layer.prompt({
                formType: 2
                ,value: data.email
            }, function(value, index){
                obj.update({
                    email: value
                });
                layer.close(index);
            });
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