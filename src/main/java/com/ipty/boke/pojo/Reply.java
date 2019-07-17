package com.ipty.boke.pojo;

import java.io.Serializable;

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

    public Long getCn_reply_likes() {
        return this.cn_reply_likes;
    }

    public void setCn_reply_likes(Long cn_reply_likes) {
        this.cn_reply_likes = cn_reply_likes;
    }

    public String getCn_user_nick() {
        return this.cn_user_nick;
    }

    public void setCn_user_nick(String cn_user_nick) {
        this.cn_user_nick = cn_user_nick;
    }

    public void setCn_reply_create_time(long cn_reply_create_time) {
        this.cn_reply_create_time = cn_reply_create_time;
    }

    public Long getCn_reply_create_time() {
        return this.cn_reply_create_time;
    }

    public void setCn_reply_create_time(Long cn_reply_create_time) {
        this.cn_reply_create_time = cn_reply_create_time;
    }

    public String getCn_reply_id() {
        return this.cn_reply_id;
    }

    public void setCn_reply_id(String cn_reply_id) {
        this.cn_reply_id = cn_reply_id;
    }

    public String getCn_user_id() {
        return this.cn_user_id;
    }

    public void setCn_user_id(String cn_user_id) {
        this.cn_user_id = cn_user_id;
    }

    public String getCn_post_id() {
        return this.cn_post_id;
    }

    public void setCn_post_id(String cn_post_id) {
        this.cn_post_id = cn_post_id;
    }

    public String getCn_reply_body() {
        return this.cn_reply_body;
    }

    public void setCn_reply_body(String cn_reply_body) {
        this.cn_reply_body = cn_reply_body;
    }

    public String toString() {
        return "Reply [cn_reply_id=" + this.cn_reply_id + ", cn_user_id=" + this.cn_user_id + ", cn_post_id=" + this.cn_post_id + ", cn_reply_body=" + this.cn_reply_body + "]";
    }
}
