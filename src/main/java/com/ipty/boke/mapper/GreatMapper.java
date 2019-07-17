package com.ipty.boke.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ipty.boke.pojo.Great;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GreatMapper extends BaseMapper<Great> {
    Great checkUserIfGreat(String var1, String var2);

    void add(Great var1);

    int delete(Great var1);

    int deleteNumber(String var1);

    int addNumber(String var1);
}
