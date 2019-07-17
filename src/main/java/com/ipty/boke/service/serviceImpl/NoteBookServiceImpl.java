package com.ipty.boke.service.serviceImpl;

import com.ipty.boke.mapper.NoteBookMapper;
import com.ipty.boke.pojo.NoteBook;
import com.ipty.boke.service.NoteBookService;
import com.ipty.boke.util.BookReturnResult;
import com.ipty.boke.util.NoteUtil;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service("noteBookService")
public class NoteBookServiceImpl implements NoteBookService {
    Boolean index = false;
    @Autowired
    private NoteBookMapper noteBookMapper;

    public NoteBookServiceImpl() {
    }

    public ReturnResult<BookReturnResult> addNoteBook(String userId, String bookName) {
        NoteBook noteBook = new NoteBook();
        noteBook.setCn_notebook_status_id(1);
        Long createTime = System.currentTimeMillis();
        noteBook.setCn_notebook_create_time(createTime);
        String bookId = NoteUtil.createId();
        noteBook.setCn_notebook_id(bookId);
        noteBook.setCn_notebook_name(bookName);
        noteBook.setCn_user_id(userId);
        ReturnResult<BookReturnResult> result = new ReturnResult();
        this.noteBookMapper.findByUserId(userId);
        BookReturnResult bResult = new BookReturnResult();
        bResult.setBookId(bookId);
        bResult.setTitle(bookName);
        this.noteBookMapper.save(noteBook);
        result.setData(bResult);
        result.setStatus(0);
        result.setMsg("创建笔记成功！");
        return result;
    }

    public ReturnResult<List<NoteBook>> loadNoteBooks(String userId) {
        ReturnResult<List<NoteBook>> result = new ReturnResult();
        List<NoteBook> NoteBookList = this.noteBookMapper.findByUserId(userId);
        Iterator iterator = NoteBookList.iterator();

        while(iterator.hasNext()) {
            NoteBook noteBook = (NoteBook)iterator.next();
            if (noteBook.getCn_notebook_status_id() != 1) {
                iterator.remove();
            }
        }

        result.setData(NoteBookList);
        result.setMsg("加载笔记列表成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Object> deleteNoteBook(String noteBookId, String userId) {
        ReturnResult<Object> result = new ReturnResult();
        this.noteBookMapper.recycleAllSonNotes(noteBookId);
        List<NoteBook> list = this.noteBookMapper.findByUserId(userId);
        Long time = 0L;
        String maxBookId = null;
        Iterator var9 = list.iterator();

        while(var9.hasNext()) {
            NoteBook book = (NoteBook)var9.next();
            if (book.getCn_notebook_create_time() > time) {
                time = book.getCn_notebook_create_time();
                maxBookId = book.getCn_notebook_id();
            }
        }

        this.noteBookMapper.changeBookId(maxBookId, noteBookId);
        this.noteBookMapper.deleteNoteBook(noteBookId);
        result.setMsg("删除笔记本成功！");
        result.setStatus(0);
        return result;
    }
}
