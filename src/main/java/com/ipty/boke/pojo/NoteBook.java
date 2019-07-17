package com.ipty.boke.pojo;

import java.io.Serializable;
import java.util.List;

public class NoteBook implements Serializable {
    private String cn_notebook_id;
    private String cn_user_id;
    private String cn_notebook_name;
    private int cn_notebook_status_id;
    private Long cn_notebook_create_time;
    private List<Note> notes;

    public NoteBook() {
    }

    public int getCn_notebook_status_id() {
        return this.cn_notebook_status_id;
    }

    public void setCn_notebook_status_id(int cn_notebook_status_id) {
        this.cn_notebook_status_id = cn_notebook_status_id;
    }

    public List<Note> getNotes() {
        return this.notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

    public Long getCn_notebook_create_time() {
        return this.cn_notebook_create_time;
    }

    public void setCn_notebook_create_time(Long cn_notebook_create_time) {
        this.cn_notebook_create_time = cn_notebook_create_time;
    }

    public String getCn_notebook_id() {
        return this.cn_notebook_id;
    }

    public void setCn_notebook_id(String cn_notebook_id) {
        this.cn_notebook_id = cn_notebook_id;
    }

    public String getCn_user_id() {
        return this.cn_user_id;
    }

    public void setCn_user_id(String cn_user_id) {
        this.cn_user_id = cn_user_id;
    }

    public String getCn_notebook_name() {
        return this.cn_notebook_name;
    }

    public void setCn_notebook_name(String cn_notebook_name) {
        this.cn_notebook_name = cn_notebook_name;
    }

    public String toString() {
        return "NoteBook [cn_notebook_id=" + this.cn_notebook_id + ", cn_user_id=" + this.cn_user_id + ", cn_notebook_name=" + this.cn_notebook_name + ", cn_notebook_status_id=" + this.cn_notebook_status_id + ", cn_notebook_create_time=" + this.cn_notebook_create_time + ", notes=" + this.notes + "]";
    }
}
