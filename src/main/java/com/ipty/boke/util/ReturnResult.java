package com.ipty.boke.util;

import java.io.Serializable;

public class ReturnResult<T> implements Serializable {
    private int status;
    private String msg;
    private T data;

    public ReturnResult() {
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMsg() {
        return this.msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return this.data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String toString() {
        return "NoteResult [status=" + this.status + ", msg=" + this.msg + ", data=" + this.data + "]";
    }
}

