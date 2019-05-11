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
@Controller("/user")
public class UserController {

    @Autowired
    private UserService userService;

    //测试进入首页
    @RequestMapping("/index")
    public String index(){
        System.out.println("有人登陆");
        return "index";
    }

    @RequestMapping("/login")
    public String userLogin(User user, Model model){
        User user1 = userService.userLogin(user);
        if(user1 == null){
            //用户名或密码错误
        }else{
            model.addAttribute("user", user1);
        }
        return "index";
    }
}
