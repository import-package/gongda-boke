package com.ipty.boke.controller;

import com.ipty.boke.pojo.Note;
import com.ipty.boke.service.NoteService;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping({"/note"})
public class NoteController {
    @Autowired
    private NoteService noteService;

    @RequestMapping({"/add.do"})
    public ReturnResult<Note> add(String userId, String bookId, String title, String body, int typeId) {
        ReturnResult<Note> result = this.noteService.addNote(userId, bookId, title, body, typeId);
        return result;
    }

    @RequestMapping({"/delete.do"})
    public ReturnResult<Object> delete(String noteId) {
        ReturnResult<Object> result = this.noteService.deleteNotes(noteId);
        return result;
    }

    @RequestMapping({"/leaveRecycle.do"})
    public ReturnResult<Object> leaveRecycle(String noteId) {
        ReturnResult<Object> result = this.noteService.leaveRecycle(noteId);
        return result;
    }

    @RequestMapping({"/loadNote.do"})
    public ReturnResult<Note> loadNote(String noteId) {
        ReturnResult<Note> result = this.noteService.loadNote(noteId);
        return result;
    }

    @RequestMapping({"/loadNotesList.do"})
    public ReturnResult<List<Map>> loadNotes(String bookId) {
        ReturnResult<List<Map>> result = this.noteService.loadListNotes(bookId);
        return result;
    }

    @RequestMapping({"/loadRecycleNotes.do"})
    public ReturnResult<List<Map>> loadRecycleNotes(String userId) {
        ReturnResult<List<Map>> result = this.noteService.loadRecycleNotes(userId);
        return result;
    }

    @RequestMapping({"/loadSearchNote.do"})
    public ReturnResult<Note> loadSearchNote(String noteId) {
        ReturnResult<Note> result = this.noteService.loadNote(noteId);
        return result;
    }

    @RequestMapping({"/recycle.do"})
    public ReturnResult<Object> recycle(String noteId) {
        ReturnResult<Object> result = this.noteService.recycle(noteId);
        return result;
    }

    @RequestMapping({"/search.do"})
    public ReturnResult<List<Note>> searchNote(String keyword, int page) {
        ReturnResult<List<Note>> result = this.noteService.serchNote(keyword, page);
        return result;
    }

    @RequestMapping({"/update.do"})
    public ReturnResult<Object> update(String noteId, String title, String body, String noteBookId) {
        ReturnResult<Object> result = this.noteService.updateNote(noteId, title, body, noteBookId);
        return result;
    }
}
