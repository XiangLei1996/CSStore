<%--
  Created by IntelliJ IDEA.
  User: hasee
  Date: 2019/5/18
  Time: 19:42
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>个人信息表</title>
</head>
<body>
    <table>
        <tr>
            <td>用户名</td>
            <td>邮箱</td>
        </tr>
        <tr>
            <td>${user.username}</td>
            <td>${user.email}</td>
        </tr>
    </table>
</body>
</html>
