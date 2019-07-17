package com.ipty.boke.service.serviceImpl;

import com.ipty.boke.mapper.GreatMapper;
import com.ipty.boke.pojo.Great;
import com.ipty.boke.service.GreatService;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GreatServiceImpl implements GreatService {
    @Autowired
    private GreatMapper greatMapper;

    public GreatServiceImpl() {
    }

    public ReturnResult<Object> checkUserIfGreat(String postId, String userId) {
        ReturnResult<Object> result = new ReturnResult();
        Great great = this.greatMapper.checkUserIfGreat(postId, userId);
        if (great != null) {
            this.greatMapper.delete(great);
            this.greatMapper.deleteNumber(postId);
            result.setMsg("删除点赞成功!");
            result.setStatus(1);
        } else {
            great = new Great();
            great.setCn_post_id(postId);
            great.setCn_user_id(userId);
            this.greatMapper.add(great);
            this.greatMapper.addNumber(postId);
            result.setMsg("点赞成功!");
            result.setStatus(2);
        }

        return result;
    }
}
