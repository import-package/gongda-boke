package com.ipty.boke.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
@Getter
@Setter
@ToString
@TableName("cn_reply")
public class Reply implements Serializable {
    private String cn_user_nick;
    private String cn_user_id;
    private String cn_reply_id;
    private String cn_post_id;
    private String cn_reply_body;
    private long cn_reply_create_time;
    private Long cn_reply_likes;

    public Reply() {
    }

}
