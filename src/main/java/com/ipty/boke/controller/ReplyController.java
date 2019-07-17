package com.ipty.boke.controller;

import com.ipty.boke.pojo.Reply;
import com.ipty.boke.service.ReplyService;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/reply"})
public class ReplyController {
    @Autowired
    private ReplyService replyService;

    @RequestMapping({"/add.do"})
    public ReturnResult<Object> add(String replyBody, String userId, String postId) {
        ReturnResult<Object> result = this.replyService.saveReply(replyBody, userId, postId);
        return result;
    }

    @RequestMapping({"/delete.do"})
    public ReturnResult<Object> delete() {
        ReturnResult<Object> result = new ReturnResult();
        return result;
    }

    @RequestMapping({"/show.do"})
    public ReturnResult<List<Reply>> show(String postId, int replyPage) {
        ReturnResult<List<Reply>> result = this.replyService.serchReply(postId, replyPage);
        return result;
    }
}
