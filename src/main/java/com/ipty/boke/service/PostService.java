package com.ipty.boke.service;

import com.ipty.boke.pojo.Post;
import com.ipty.boke.util.ReturnResult;

import java.util.List;

public interface PostService {
    ReturnResult<Object> shareNote(String var1);

    ReturnResult<List<Post>> serchPost(String var1, int var2);

    ReturnResult<List<Post>> PostByLikes(int var1);

    ReturnResult<List<Post>> PostByCreateTime(int var1);

    ReturnResult<Object> delete(String var1);

    ReturnResult<Object> updatePost(String var1, String var2, Long var3, Long var4);

    ReturnResult<Post> findPostByPostId(String var1);
}

