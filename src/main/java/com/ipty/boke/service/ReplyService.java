package com.ipty.boke.service;

import com.ipty.boke.pojo.Reply;
import com.ipty.boke.util.ReturnResult;

import java.util.List;

public interface ReplyService {
    ReturnResult<List<Reply>> serchReply(String var1, int var2);

    ReturnResult<Object> saveReply(String var1, String var2, String var3);

    ReturnResult<Object> deleteReply(String var1);
}
