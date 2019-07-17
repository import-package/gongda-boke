package com.ipty.boke.pojo;

import java.io.Serializable;

public class User implements Serializable {
    private String cn_user_id;
    private String cn_user_admincode;
    private String cn_user_password;
    private Long cn_user_create_time;
    private String cn_user_nick;
    private String cn_user_head_img_url;
    private int cn_user_sex;
    private int cn_user_state;
    private Long cn_user_last_visit_time;

    public User() {
    }

    public String getCn_user_id() {
        return this.cn_user_id;
    }

    public void setCn_user_id(String cn_user_id) {
        this.cn_user_id = cn_user_id;
    }

    public String getCn_user_admincode() {
        return this.cn_user_admincode;
    }

    public void setCn_user_admincode(String cn_user_admincode) {
        this.cn_user_admincode = cn_user_admincode;
    }

    public String getCn_user_password() {
        return this.cn_user_password;
    }

    public void setCn_user_password(String cn_user_password) {
        this.cn_user_password = cn_user_password;
    }

    public Long getCn_user_create_time() {
        return this.cn_user_create_time;
    }

    public void setCn_user_create_time(Long cn_user_create_time) {
        this.cn_user_create_time = cn_user_create_time;
    }

    public String getCn_user_nick() {
        return this.cn_user_nick;
    }

    public void setCn_user_nick(String cn_user_nick) {
        this.cn_user_nick = cn_user_nick;
    }

    public String getCn_user_head_img_url() {
        return this.cn_user_head_img_url;
    }

    public void setCn_user_head_img_url(String cn_head_img_url) {
        this.cn_user_head_img_url = cn_head_img_url;
    }

    public int getCn_user_sex() {
        return this.cn_user_sex;
    }

    public void setCn_user_sex(int cn_user_sex) {
        this.cn_user_sex = cn_user_sex;
    }

    public int getCn_user_state() {
        return this.cn_user_state;
    }

    public void setCn_user_state(int cn_user_state) {
        this.cn_user_state = cn_user_state;
    }

    public Long getCn_user_last_visit_time() {
        return this.cn_user_last_visit_time;
    }

    public void setCn_user_last_visit_time(Long cn_user_last_visit_time) {
        this.cn_user_last_visit_time = cn_user_last_visit_time;
    }

    public String toString() {
        return "User [cn_user_id=" + this.cn_user_id + ", cn_user_admincode=" + this.cn_user_admincode + ", cn_user_password=" + this.cn_user_password + ", cn_user_create_time=" + this.cn_user_create_time + ", cn_user_nick=" + this.cn_user_nick + ", cn_user_head_img_url=" + this.cn_user_head_img_url + ", cn_user_sex=" + this.cn_user_sex + ", cn_user_state=" + this.cn_user_state + ", cn_user_last_visit_time=" + this.cn_user_last_visit_time + "]";
    }
}
