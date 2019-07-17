package com.ipty.boke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ipty.boke.pojo.Post;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface PostMapper extends BaseMapper<Post> {
    void save(Post var1);

    List<Post> findLikeTitle(Map var1);

    List<Post> findByLikes(Map var1);

    List<Post> findByTime(Map var1);

    Post findByPostId(String Id);

    int delete(String var1);

    int updatePost(Map var1);

    int addLooks(String var1);

    List<String> findGreatPostId(String var1);

    Post findGreatPostDetail(String var1);
}
