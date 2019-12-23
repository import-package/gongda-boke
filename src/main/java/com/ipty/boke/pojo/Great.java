package com.ipty.boke.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Data
@TableName("cn_great")
public class Great implements Serializable {
    private String cn_post_id;
    private String cn_user_id;

    public Great() {
    }
}
