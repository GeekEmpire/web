<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<style>
		.hq{
			text-align:center;
			
		}
	</style>
	<script type="text/javascript">
		function require(){ 
			var xmlHttp;
			if(window.XMLHttpRequest){
				xmlHttp = new XMLHttpRequest(); //报错
			} else {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlHttp.onreadystatechange=function(){
				if(xmlHttp.readyState==4&&xmlHttp.status==200){
					var dataobj = eval("("+xmlHttp.responseText+")");
					console.log(dataobj.age);
					document.getElementById("in").value = xmlHttp.responseText;
				}
			}
			xmlHttp.open("get", "test", true);
			
			xmlHttp.send();
		}
	</script>
  </head>
  
  <body>
    <div class="hq">
    	<input type="button" value="获取ajax" onclick="require()"/>
    	<input type="text" id="in">
    </div>
  </body>
</html>
