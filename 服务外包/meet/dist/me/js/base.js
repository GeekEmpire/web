layui.use('table', function(){
    var table = layui.table;


    table.render({
        elem: '#detail_table'
        ,url:'1.json'
        ,height: 400
        ,cols: [[ //表头
            {field: 'meet', title: '会议室', width:150, fixed: 'left'}
            ,{field: 'time0', title: '00:00-1:00', width:120}
            ,{field: 'time1', title: '1:00-2:00', width:120}
            ,{field: 'time2', title: '2:00-3:00', width:120}
            ,{field: 'time3', title: '3:00-4:00', width: 120}
            ,{field: 'time4', title: '4:00-5:00', width: 120}
            ,{field: 'time5', title: '5:00-6:00', width: 120}
            ,{field: 'time6', title: '7:00-8:00', width: 120}
            ,{field: 'time7', title: '8:00-9:00', width: 120}
            ,{field: 'time0', title: '00:00-1:00', width:120}
            ,{field: 'time1', title: '1:00-2:00', width:120}
            ,{field: 'time2', title: '2:00-3:00', width:120}
            ,{field: 'time3', title: '3:00-4:00', width: 120}
            ,{field: 'time4', title: '4:00-5:00', width: 120}
            ,{field: 'time5', title: '5:00-6:00', width: 120}
            ,{field: 'time6', title: '7:00-8:00', width: 120}
            ,{field: 'time7', title: '8:00-9:00', width: 120}
        ]]
        ,page: true
    });
});