package com.ipty.boke.service;

import com.ipty.boke.pojo.Note;
import com.ipty.boke.util.ReturnResult;

import java.util.List;
import java.util.Map;

public interface NoteService {
    ReturnResult<List<Map>> loadListNotes(String var1);

    ReturnResult<Note> loadNote(String var1);

    ReturnResult<Note> addNote(String var1, String var2, String var3, String var4, int var5);

    ReturnResult<Object> updateNote(String var1, String var2, String var3, String var4);

    ReturnResult<Object> recycle(String var1);

    ReturnResult<Object> leaveRecycle(String var1);

    ReturnResult<Object> deleteNotes(String var1);

    ReturnResult<List<Map>> loadRecycleNotes(String var1);

    ReturnResult<List<Note>> serchNote(String var1, int var2);
}
