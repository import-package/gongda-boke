package com.ipty.boke.controller;

import com.ipty.boke.pojo.Post;
import com.ipty.boke.service.PostService;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/post"})
public class PostController {
    @Autowired
    private PostService postService;

    @RequestMapping({"/findPostDetail.do"})
    public ReturnResult<Post> findPostDetail(String postId) {
        ReturnResult<Post> result = this.postService.findPostByPostId(postId);
        return result;
    }

    @RequestMapping({"/byCreateTime.do"})
    public ReturnResult<List<Post>> postByCreatTime(Integer page) {
        ReturnResult<List<Post>> result = this.postService.PostByCreateTime(page);
        return result;
    }

    @RequestMapping({"/byLikes.do"})
    public ReturnResult<List<Post>> postByLikes(Integer page) {
        ReturnResult<List<Post>> result = this.postService.PostByLikes(page);
        return result;
    }

    @RequestMapping({"/delete.do"})
    public ReturnResult<Object> deletePost(String postId) {
        ReturnResult<Object> result = this.postService.delete(postId);
        return result;
    }

    @RequestMapping({"/update.do"})
    public ReturnResult<Object> updatePost(String postId, String postBody, Long likes, Long looks) {
        ReturnResult<Object> result = this.postService.updatePost(postId, postBody, likes, looks);
        return result;
    }

    @RequestMapping({"/searchPost.do"})
    public ReturnResult<List<Post>> searchPost(String keyword, int page) {
        ReturnResult<List<Post>> result = this.postService.serchPost(keyword, page);
        return result;
    }

    @RequestMapping({"/addPost.do"})
    public ReturnResult<Object> addPost(String noteId) {
        ReturnResult<Object> result = this.postService.shareNote(noteId);
        return result;
    }
}
