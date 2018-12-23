package cn.xmz.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

public class AjaxServletTest extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.addHeader("Access-Control-Allow-Origin", "*");// 允许所有的域名
		//response.addHeader("Access-Control-Allow-Origin", "http://camnpr.com");// 允许指定的域名
		response.setContentType("text/html;charset=utf-8");
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("name", "lisi");
		jsonObject.put("age", 30);
		JSONObject j1 = new JSONObject();
		j1.put("math", 90);
		j1.put("english", 80);
		jsonObject.put("score", j1);
		System.out.println(jsonObject);
		PrintWriter out = response.getWriter();
		out.println(jsonObject);
		out.flush();
		out.close();
	}

}
