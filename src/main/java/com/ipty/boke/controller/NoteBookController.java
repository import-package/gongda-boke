package com.ipty.boke.controller;

import com.ipty.boke.pojo.NoteBook;
import com.ipty.boke.service.NoteBookService;
import com.ipty.boke.util.BookReturnResult;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping({"/noteBook"})
public class NoteBookController {
    @Autowired
    private NoteBookService noteBookService;

    @RequestMapping({"/add.do"})
    @ResponseBody
    public ReturnResult<BookReturnResult> add(String userId, String bookName) {
        ReturnResult<BookReturnResult> result = this.noteBookService.addNoteBook(userId, bookName);
        return result;
    }

    @RequestMapping({"/delete.do"})
    public ReturnResult<Object> delete(String bookId, String userId) {
        ReturnResult<Object> result = this.noteBookService.deleteNoteBook(bookId, userId);
        return result;
    }

    @RequestMapping({"/load.do"})
    public ReturnResult<List<NoteBook>> Load(String userId) {
        ReturnResult<List<NoteBook>> result = this.noteBookService.loadNoteBooks(userId);
        return result;
    }
}
