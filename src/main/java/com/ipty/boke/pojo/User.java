package com.ipty.boke.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
@Data
@TableName("cn_user")
public class User implements Serializable {
    @TableId
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
}
