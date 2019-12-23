package com.ipty.boke.service.serviceImpl;

import com.ipty.boke.mapper.NoteMapper;
import com.ipty.boke.mapper.PostMapper;
import com.ipty.boke.mapper.UserMapper;
import com.ipty.boke.pojo.Note;
import com.ipty.boke.pojo.Post;
import com.ipty.boke.service.PostService;
import com.ipty.boke.util.NoteUtil;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Service("postService")
public class PostServiceImpl implements PostService {
    @Autowired
    private PostMapper postMapper;
    @Autowired
    private NoteMapper noteMapper;
    @Autowired
    private UserMapper userMapper;

    public PostServiceImpl() {
    }

    public ReturnResult<Object> shareNote(String noteId) {
        ReturnResult<Object> result = new ReturnResult();
        Note note = this.noteMapper.findByNoteId(noteId);
        this.noteMapper.share(noteId, System.currentTimeMillis());
        String userId = this.noteMapper.findUserIdByNoteId(noteId);
        String userNick = this.userMapper.findNickByUserId(userId);
        Post post = new Post();
        post.setCn_user_id(userId);
        post.setCn_user_nick(userNick);
        post.setCn_note_id(noteId);
        post.setCn_post_create_time(System.currentTimeMillis());
        post.setCn_post_id(NoteUtil.createId());
        post.setCn_post_likes(0L);
        post.setCn_post_looks(0L);
        post.setCn_post_replys(0L);
        post.setCn_post_modify_time(System.currentTimeMillis());
        post.setCn_post_title(note.getCn_note_title());
        post.setCn_post_body(note.getCn_note_body());
        this.postMapper.save(post);
        result.setMsg("分享成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<List<Post>> serchPost(String keyword, int page) {
        ReturnResult<List<Post>> result = new ReturnResult();
        String title = "%" + keyword + "%";
        int begin = (page - 1) * 5;
        Map map = new HashMap();
        map.put("title", title);
        map.put("begin", begin);
        List<Post> list = this.postMapper.findLikeTitle(map);
        result.setData(list);
        result.setMsg("搜寻帖子成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<List<Post>> PostByLikes(int page) {
        ReturnResult<List<Post>> result = new ReturnResult();
        int begin = (page - 1) * 5;
        Map map = new HashMap();
        map.put("begin", begin);

        List<Post> list = this.postMapper.findByLikes(map);
        if (list!=null){
            String limitBody = null;
            Iterator iterator = list.iterator();
            while(iterator.hasNext()) {
                Post p = (Post)iterator.next();
                if (p!=null){
                    if (p.getCn_post_body() != null) {
                        if (p.getCn_post_body().length() > 50){
                            limitBody = p.getCn_post_body().substring(0, 50);
                            p.setCn_post_body(limitBody + "...");
                        }
                    } else if (p.getCn_post_body() == null) {
                        p.setCn_post_body("这个帖子好像没有什么内容...");
                    }
                }
            }
        }else {
            System.out.println("目前还没有人发过帖子哦！");
        }


        if (list.size() > 0) {
            result.setData(list);
            result.setMsg("根据热度排序成功！");
            result.setStatus(0);
        } else {
            result.setMsg("没有下一页了~");
            result.setStatus(1);
        }

        return result;
        }

    public ReturnResult<List<Post>> PostByCreateTime(int page) {
        ReturnResult<List<Post>> result = new ReturnResult();
        int begin = (page - 1) * 5;
        Map map = new HashMap();
        map.put("begin", begin);
        List<Post> list = this.postMapper.findByTime(map);
        String limitBody = null;
        Iterator iterator = list.iterator();
        while(iterator.hasNext()) {
            Post p = (Post)iterator.next();
            if(p!=null){
                if (p.getCn_post_body() != null) {
                    if(p.getCn_post_body().length() > 1500){
                        limitBody = p.getCn_post_body().substring(0, 1500);
                        p.setCn_post_body(limitBody + "...");
                    }
                } else if (p.getCn_post_body() == null) {
                    p.setCn_post_body("这个帖子好像没有什么内容...");
                }
            }
        }

        if (list.size() > 0) {
            result.setData(list);
            result.setMsg("根据时间排序成功！");
            result.setStatus(0);
        } else {
            result.setMsg("没有下一页了~");
            result.setStatus(1);
        }

            return result;
    }

    public ReturnResult<Object> delete(String postId) {
        ReturnResult<Object> result = new ReturnResult();
        this.postMapper.delete(postId);
        result.setMsg("删除成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Object> updatePost(String postId, String postBody, Long likes, Long looks) {
        ReturnResult<Object> result = new ReturnResult();
        Post post = this.postMapper.findByPostId(postId);
        post.setCn_post_body(postBody);
        post.setCn_post_likes(likes);
        post.setCn_post_looks(looks);
        result.setMsg("更新帖子成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Post> findPostByPostId(String postId) {
        ReturnResult<Post> result = new ReturnResult();
        Post post = this.postMapper.findByPostId(postId);
        this.postMapper.addLooks(postId);
        result.setData(post);
        result.setMsg("查询帖子成功！");
        result.setStatus(0);
        return result;
    }
}
