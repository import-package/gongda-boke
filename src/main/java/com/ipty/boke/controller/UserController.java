package com.ipty.boke.controller;

import com.ipty.boke.pojo.User;
import com.ipty.boke.service.UserService;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/user"})
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping({"/checkPassword.do"})
    public ReturnResult<Object> checkBeforePassworde(String userId, String beforePassword) {
        ReturnResult<Object> result = this.userService.checkBeforePassword(userId, beforePassword);
        return result;
    }

    @RequestMapping({"/fixPassword.do"})
    public ReturnResult<Object> fixPassword(String userId, String newPassword) {
        ReturnResult<Object> result = this.userService.fixPassword(userId, newPassword);
        return result;
    }

    @RequestMapping({"/findUserNickByUserId.do"})
    public ReturnResult<Object> findUserNick(String userId) {
        ReturnResult<Object> result = this.userService.findUserNickByUserId(userId);
        return result;
    }

    @RequestMapping({"/login.do"})
    public ReturnResult<User> loadUser(String adminCode, String password) {
        ReturnResult<User> result = this.userService.checkLogin(adminCode, password);
        return result;
    }

    @RequestMapping({"/regist.do"})
    public ReturnResult<Object> Regist(String adminCode, String password, String nick, int sex, String varify, String right) {
        ReturnResult<Object> result = new ReturnResult();
        if (varify.equalsIgnoreCase(right)) {
            result = this.userService.addUser(adminCode, password, nick, sex);
            result.setMsg("注册成功");
        } else {
            result.setStatus(2);
            result.setMsg("注册失败");
        }
        return result;
    }
}
