<%--
  Created by IntelliJ IDEA.
  User: hasee
  Date: 2019/5/12
  Time: 8:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>CSSWarehouse</title>
    <link rel="stylesheet" href="styles/default.css">
    <link rel="stylesheet" href="styles/main.css" />
</head>

<body>
    <c:if test="${user == null}">
        <p>登录失败</p>
    </c:if>
    <c:if test="${user != null}">
        <table>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
        </table>
    </c:if>
<div class="mainPage">
    <nav>
        <div class="navbar_container vertical-center">
            <div class="navbar_header">
                <button class="navbar_header_button" type="button" onclick="toggleNavgation()" onblur="closeNavgation()">
                    <span></span>
                    <span class="span-middle"></span>
                    <span></span>
                </button>
                <div class="navbar_header_icon vertical-center">
                    <img src="images/underconstruction.png" alt="Web icon">
                    <span>图标位置</span>
                </div>
            </div>
            <div id="navbar_div" class="navbar_nav">
                <ul class="navbar_nav_ul">
                    <li class="active">
                        <a class="" href="#home">首页</a>
                    </li>
                    <li>
                        <a class="" href="#tentative">暂定</a>
                    </li>
                    <li>
                        <a class="" href="#tentative">暂定</a>
                    </li>
                    <li>
                        <a class="" href="#team">团队</a>
                    </li>
                    <li>
                        <a class="" href="#contact">联系我们</a>
                    </li>
                    <li>
                        <a class="" href="login.html" target="_blank">注册/登录</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="search">
        <div class="search_container horizontal-center">
            <div class="search_icon">
                <img class="" src="images/underconstruction.png" alt="search icon" />
            </div>
            <div class="search_title">
                <h1>Loading...</h1>
            </div>
            <form class="search_bar">
                <input type="text" placeholder="Search something">
                <button type="submit">搜索</button>
            </form>
        </div>
    </div>
</div>

<script type="text/javascript" src="scripts/index.js">

</script>
</body>

</html>

