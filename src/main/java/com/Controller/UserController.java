package com.Controller;

import com.Pojo.User;
import com.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Author: XiangL
 * Date: 2019/5/11 21:36
 * Version 1.0
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    //测试进入首页
    @RequestMapping("/main")
    public String index(){
        System.out.println("有人访问主页");
//        return "/static/template/
        return "/WEB-INF/views/index.jsp";
    }

    @RequestMapping("/login")
    public String userLogin(User user, Model model){
        System.out.println("有人试图登录");
        User user1 = userService.userLogin(user);
        model.addAttribute("user", user1);
        if(user1 == null){
            //用户名或密码错误
            System.out.println("登录失败");
            return "/WEB-INF/views/index.jsp";
        }else{
            System.out.println("登录成功");
            return "/WEB-INF/views/index.jsp";
        }
    }

    @RequestMapping("/register")
    public String userRegister(User user, Model model){
        System.out.println("有人访问注册页面");
        Integer flag = userService.userRegister(user);
        if(flag == 1){
            model.addAttribute("user", user);
            return "/WEB-INF/views/register.html";
        }else{
            return "/WEB-INF/views/error.jsp";
        }
    }

    @RequestMapping("/info")
    public String userInfo(User user, Model model){
        System.out.println("查看个人信息");
        User userInfo = userService.userInfo(user);
        if(userInfo == null){
            return "error.jsp";
        }else{
            model.addAttribute("user", user);
            return "/WEB-INF/views/info.jsp";
        }
    }
}
