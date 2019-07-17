package com.ipty.boke.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;
@Getter
@Setter
@ToString
@TableName("cn_notebook")
public class NoteBook implements Serializable {
    private String cn_notebook_id;
    private String cn_user_id;
    private String cn_notebook_name;
    private int cn_notebook_status_id;
    private Long cn_notebook_create_time;
    private List<Note> notes;

    public NoteBook() {
    }
}
