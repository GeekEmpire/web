layui.use('element', function(){
    var element = layui.element;

    //…
});
layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1'
        ,width: '100%' //设置容器宽度
        ,arrow: 'always' //始终显示箭头
        // ,anim: 'updown' //切换动画方式
        ,height:'70%'
    });
});
layui.use('laydate', function(){
    var laydate = layui.laydate;

    //执行一个laydate实例
    laydate.render({
        elem: '#start_day' //指定元素
        ,min: 0 //7天前
        ,max: 14 //7天后
    });
});
layui.use('laydate', function(){
    var laydate = layui.laydate;

    //执行一个laydate实例
    laydate.render({
        elem: '#start_time' //指定元素
        ,type: 'time'
    });
});
layui.use('laydate', function(){
    var laydate = layui.laydate;

    //执行一个laydate实例
    laydate.render({
        elem: '#end_time' //指定元素
        ,type: 'time'
    });
});
