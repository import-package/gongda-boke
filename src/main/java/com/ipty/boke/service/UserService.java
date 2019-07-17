package com.ipty.boke.service;

import com.ipty.boke.pojo.User;
import com.ipty.boke.util.ReturnResult;

public interface UserService {
    ReturnResult<User> checkLogin(String var1, String var2);

    ReturnResult<Object> addUser(String var1, String var2, String var3, int var4);

    ReturnResult<Object> checkBeforePassword(String var1, String var2);

    ReturnResult<Object> fixPassword(String var1, String var2);

    ReturnResult<Object> findUserNickByUserId(String var1);
}
