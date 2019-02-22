layui.use('table', function(){
    var table = layui.table;


    // table.render({
    //     elem: '#detail_table'
    //     ,url:'1111.json'
    //     ,height: 400
    //     , cellMinWidth: 160
    //     ,cols: [[ //表头
    //         {field: 'meet', title: '会议室', width:150}
    //         ,{field: 'time0', title: '00:00-1:00',colspan: 4}
    //         ,{field: 'time4', title: '04:00-5:00',colspan: 4}
    //         ,{field: 'time5', title: '05:00-6:00',colspan: 4}
    //         ,{field: 'time6', title: '00:00-8:00',colspan: 4}
    //         ,{field: 'time7', title: '08:00-9:00',colspan: 4}
    //         ,{field: 'time0', title: '00:00-1:00',colspan: 4}
    //         ,{field: 'time1', title: '01:00-2:00',colspan: 4}
    //         ,{field: 'time2', title: '02:00-3:00',colspan: 4}
    //         ,{field: 'time3', title: '03:00-4:00',colspan: 4}
    //         ,{field: 'time4', title: '04:00-5:00',colspan: 4}
    //         ,{field: 'time5', title: '05:00-6:00',colspan: 4}
    //         ,{field: 'time6', title: '07:00-8:00',colspan: 4}
    //     ]]
    //     ,page: true
    // });
    table.render({
        elem: '#detail_table'
        ,url:'./1.json'
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,cols: [[
            {field: 'meet', title: '会议室', width:150}
            ,{field: 'id', title: '00:00-1:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
            ,{field: 'id', title: '04:00-5:00',colspan: 4}
        ]]
    });
});