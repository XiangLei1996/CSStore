package com.Service.impl;

import com.Dao.UserDao;
import com.Pojo.User;
import com.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Author: XiangL
 * Date: 2019/5/11 21:26
 * Version 1.0
 */

public class UserServiceImpl implements UserService {

    //MyBatis映射接口类已被整合扫描，直接使用
    @Autowired
    private UserDao userDao;

    @Override
    public User userLogin(User user) {
        return userDao.selUser(user);
    }
}
