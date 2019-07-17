package com.ipty.boke.service.serviceImpl;

import com.ipty.boke.mapper.ReplyMapper;
import com.ipty.boke.mapper.UserMapper;
import com.ipty.boke.pojo.Reply;
import com.ipty.boke.service.ReplyService;
import com.ipty.boke.util.NoteUtil;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService {
    @Autowired
    private ReplyMapper replyMapper;
    @Autowired
    private UserMapper userMapper;

    public ReplyServiceImpl() {
    }

    public ReturnResult<List<Reply>> serchReply(String postId, int replyPage) {
        int begin = (replyPage - 1) * 10;
        List<Reply> list = this.replyMapper.findByPostId(postId, begin);
        ReturnResult<List<Reply>> result = new ReturnResult();
        if (list.size() > 0) {
            result.setData(list);
            result.setMsg("搜寻回复成功！");
            result.setStatus(0);
        } else {
            result.setMsg("还没有回复哦。");
            result.setStatus(1);
        }

        return result;
    }

    public ReturnResult<Object> saveReply(String replyBody, String userId, String postId) {
        ReturnResult<Object> result = new ReturnResult();
        this.replyMapper.addReplysNumber(postId);
        Reply reply = new Reply();
        reply.setCn_post_id(postId);
        reply.setCn_reply_body(replyBody);
        reply.setCn_reply_create_time(System.currentTimeMillis());
        reply.setCn_reply_id(NoteUtil.createId());
        reply.setCn_user_id(userId);
        reply.setCn_reply_likes(0L);
        reply.setCn_user_nick(this.userMapper.findNickByUserId(userId));
        this.replyMapper.save(reply);
        result.setMsg("回复成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Object> deleteReply(String replyId) {
        ReturnResult<Object> result = new ReturnResult();
        int ReturnNumber = this.replyMapper.delete(replyId);
        if (ReturnNumber == 1) {
            result.setMsg("删除成功！");
            result.setStatus(0);
        } else {
            result.setMsg("删除未成功！");
        }

        return result;
    }
}
