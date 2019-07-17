package com.ipty.boke.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ipty.boke.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;
@Mapper
public interface UserMapper extends BaseMapper<User> {
    User findByAdminCode(String var1);

    void save(User var1);

    String findPassword(String var1);

    void fixPassword(Map var1);

    String findNickByUserId(String var1);
}
