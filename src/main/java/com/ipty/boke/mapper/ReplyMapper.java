package com.ipty.boke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ipty.boke.pojo.Reply;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface ReplyMapper extends BaseMapper<Reply> {
    void save(Reply var1);

    int delete(String var1);

    List<Reply> findByPostId(@Param("postId") String postId, @Param("page") int page);

    void addReplysNumber(String var1);
}
