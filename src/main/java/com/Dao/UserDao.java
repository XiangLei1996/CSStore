package com.Dao;

import com.Pojo.User;

/**
 * Author: XiangL
 * Date: 2019/5/11 21:04
 * Version 1.0
 */
public interface UserDao {

    /**
     * 查询用户
     */
    public User selectUser(User user);

    /**
     * 插入用户
     */
    public Integer insertUser(User user);

    /**
     * 查看个人信息
     */
    public User selectUserInfo(User user);
}
