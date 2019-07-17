package com.ipty.boke.pojo;

import java.io.Serializable;

public class Great implements Serializable {
    private String cn_post_id;
    private String cn_user_id;

    public Great() {
    }

    public String getCn_post_id() {
        return this.cn_post_id;
    }

    public void setCn_post_id(String cn_post_id) {
        this.cn_post_id = cn_post_id;
    }

    public String getCn_user_id() {
        return this.cn_user_id;
    }

    public void setCn_user_id(String cn_user_id) {
        this.cn_user_id = cn_user_id;
    }

    public String toString() {
        return "Great [cn_post_id=" + this.cn_post_id + ", cn_user_id=" + this.cn_user_id + "]";
    }
}
