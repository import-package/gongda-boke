package com.ipty.boke.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
@Getter
@Setter
@ToString
@TableName("cn_note")
public class Note implements Serializable {
    private String cn_note_id;
    private String cn_notebook_id;
    private String cn_user_id;
    private int cn_note_status_id;
    private int cn_note_type_id;
    private String cn_note_title;
    private String cn_note_body;
    private Long cn_note_create_time;
    private Long cn_note_last_modify_time;
    private String cn_note_imgs_url;
    private NoteBook noteBook;

    public Note() {
    }
}
