package com.Service;

import com.Pojo.User;

/**
 * Author: XiangL
 * Date: 2019/5/11 21:25
 * Version 1.0
 */
public interface UserService {

    /**
     * 用户登录
     */
    public User userLogin(User user);

    /**
     * 用户注册
     */
    public Integer userRegister(User user);

    /**
     * 用户查看个人信息
     */
    public User userInfo(User user);
}
