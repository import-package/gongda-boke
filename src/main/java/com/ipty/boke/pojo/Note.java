package com.ipty.boke.pojo;

import java.io.Serializable;

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

    public NoteBook getNoteBook() {
        return this.noteBook;
    }

    public void setNoteBook(NoteBook noteBook) {
        this.noteBook = noteBook;
    }

    public String getCn_note_id() {
        return this.cn_note_id;
    }

    public void setCn_note_id(String cn_note_id) {
        this.cn_note_id = cn_note_id;
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

    public int getCn_note_status_id() {
        return this.cn_note_status_id;
    }

    public void setCn_note_status_id(int cn_note_status_id) {
        this.cn_note_status_id = cn_note_status_id;
    }

    public int getCn_note_type_id() {
        return this.cn_note_type_id;
    }

    public void setCn_note_type_id(int cn_note_type_id) {
        this.cn_note_type_id = cn_note_type_id;
    }

    public String getCn_note_title() {
        return this.cn_note_title;
    }

    public void setCn_note_title(String cn_note_title) {
        this.cn_note_title = cn_note_title;
    }

    public String getCn_note_body() {
        return this.cn_note_body;
    }

    public void setCn_note_body(String cn_note_body) {
        this.cn_note_body = cn_note_body;
    }

    public Long getCn_note_create_time() {
        return this.cn_note_create_time;
    }

    public void setCn_note_create_time(Long cn_note_create_time) {
        this.cn_note_create_time = cn_note_create_time;
    }

    public Long getCn_note_last_modify_time() {
        return this.cn_note_last_modify_time;
    }

    public void setCn_note_last_modify_time(Long cn_note_last_modify_time) {
        this.cn_note_last_modify_time = cn_note_last_modify_time;
    }

    public String getCn_note_imgs_url() {
        return this.cn_note_imgs_url;
    }

    public void setCn_note_imgs_url(String cn_note_imgs_url) {
        this.cn_note_imgs_url = cn_note_imgs_url;
    }

    public String toString() {
        return "Note [cn_note_id=" + this.cn_note_id + ", cn_notebook_id=" + this.cn_notebook_id + ", cn_user_id=" + this.cn_user_id + ", cn_note_status_id=" + this.cn_note_status_id + ", cn_note_type_id=" + this.cn_note_type_id + ", cn_note_title=" + this.cn_note_title + ", cn_note_body=" + this.cn_note_body + ", cn_note_create_time=" + this.cn_note_create_time + ", cn_note_last_modify_time=" + this.cn_note_last_modify_time + ", cn_note_imgs_url=" + this.cn_note_imgs_url + "]";
    }
}
