package com.ipty.boke.pojo;

import java.io.Serializable;

public class Post implements Serializable {
    private String cn_post_id;
    private String cn_post_title;
    private String cn_post_body;
    private String cn_note_id;
    private Long cn_post_looks;
    private Long cn_post_likes;
    private Long cn_post_replys;
    private Long cn_post_modify_time;
    private Long cn_post_create_time;
    private String cn_user_nick;
    private String cn_user_id;

    public Post() {
    }

    public String getCn_user_nick() {
        return this.cn_user_nick;
    }

    public void setCn_user_nick(String cn_user_nick) {
        this.cn_user_nick = cn_user_nick;
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

    public String getCn_post_title() {
        return this.cn_post_title;
    }

    public void setCn_post_title(String cn_post_title) {
        this.cn_post_title = cn_post_title;
    }

    public String getCn_post_body() {
        return this.cn_post_body;
    }

    public void setCn_post_body(String cn_post_body) {
        this.cn_post_body = cn_post_body;
    }

    public String getCn_note_id() {
        return this.cn_note_id;
    }

    public void setCn_note_id(String cn_note_id) {
        this.cn_note_id = cn_note_id;
    }

    public Long getCn_post_looks() {
        return this.cn_post_looks;
    }

    public void setCn_post_looks(Long cn_post_looks) {
        this.cn_post_looks = cn_post_looks;
    }

    public Long getCn_post_likes() {
        return this.cn_post_likes;
    }

    public void setCn_post_likes(Long cn_post_likes) {
        this.cn_post_likes = cn_post_likes;
    }

    public Long getCn_post_replys() {
        return this.cn_post_replys;
    }

    public void setCn_post_replys(Long cn_post_replys) {
        this.cn_post_replys = cn_post_replys;
    }

    public Long getCn_post_modify_time() {
        return this.cn_post_modify_time;
    }

    public void setCn_post_modify_time(Long cn_post_modify_time) {
        this.cn_post_modify_time = cn_post_modify_time;
    }

    public Long getCn_post_create_time() {
        return this.cn_post_create_time;
    }

    public void setCn_post_create_time(Long cn_post_create_time) {
        this.cn_post_create_time = cn_post_create_time;
    }

    public String toString() {
        return "Post [cn_post_id=" + this.cn_post_id + ", cn_post_title=" + this.cn_post_title + ", cn_post_body=" + this.cn_post_body + ", cn_note_id=" + this.cn_note_id + ", cn_post_looks=" + this.cn_post_looks + ", cn_post_likes=" + this.cn_post_likes + ", cn_post_replys=" + this.cn_post_replys + ", cn_post_modify_time=" + this.cn_post_modify_time + ", cn_post_create_time=" + this.cn_post_create_time + "]";
    }
}
