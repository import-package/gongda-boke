package com.ipty.boke.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
@Data
@TableName("cn_post")

public class Post implements Serializable {
    @TableId(value = "cn_post_id")
    private String cn_post_id;

    @TableField("cn_post_title")
    private String cn_post_title;

    @TableField("cn_post_body")
    private String cn_post_body;

    @TableField("cn_note_id")
    private String cn_note_id;

    @TableField("cn_post_looks")
    private Long cn_post_looks;

    @TableField("cn_post_likes")
    private Long cn_post_likes;

    @TableField("cn_post_replys")
    private Long cn_post_replys;

    @TableField("cn_post_modify_time")
    private Long cn_post_modify_time;

    @TableField("cn_post_create_time")
    private Long cn_post_create_time;

    @TableField("cn_user_nick")
    private String cn_user_nick;

    @TableField("cn_user_id")
    private String cn_user_id;

    public Post() {
    }
}
