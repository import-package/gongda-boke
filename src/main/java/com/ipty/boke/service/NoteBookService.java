package com.ipty.boke.service;


import com.ipty.boke.pojo.NoteBook;
import com.ipty.boke.util.BookReturnResult;
import com.ipty.boke.util.ReturnResult;

import java.util.List;

public interface NoteBookService {
    ReturnResult<BookReturnResult> addNoteBook(String var1, String var2);

    ReturnResult<List<NoteBook>> loadNoteBooks(String var1);

    ReturnResult<Object> deleteNoteBook(String var1, String var2);
}