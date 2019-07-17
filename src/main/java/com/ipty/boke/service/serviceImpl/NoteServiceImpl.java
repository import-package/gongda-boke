package com.ipty.boke.service.serviceImpl;

import com.ipty.boke.mapper.NoteMapper;
import com.ipty.boke.pojo.Note;
import com.ipty.boke.service.NoteService;
import com.ipty.boke.util.NoteUtil;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Service("noteService")
public class NoteServiceImpl implements NoteService {
    @Autowired
    private NoteMapper noteMapper;

    public NoteServiceImpl() {
    }

    public ReturnResult<List<Map>> loadListNotes(String bookId) {
        ReturnResult<List<Map>> result = new ReturnResult();
        List<Map> NotesList = this.noteMapper.findListByBookId(bookId);
        Iterator<Map> iterator = NotesList.iterator();
        String key = "cn_note_status_id";

        while(iterator.hasNext()) {
            Map map = (Map)iterator.next();
            int value = (Integer)map.get(key);
            if (value != 1 && value != 3) {
                iterator.remove();
            }
        }

        result.setData(NotesList);
        result.setMsg("加载笔记列表成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Note> loadNote(String noteId) {
        ReturnResult<Note> result = new ReturnResult();
        Note note = this.noteMapper.findByNoteId(noteId);
        result.setData(note);
        result.setMsg("加载笔记成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Note> addNote(String userId, String bookId, String title, String body, int typeId) {
        ReturnResult<Note> result = new ReturnResult();
        Note note = new Note();
        note.setCn_note_body(body);
        Long createTime = System.currentTimeMillis();
        note.setCn_note_create_time(createTime);
        String id = NoteUtil.createId();
        note.setCn_note_id(id);
        note.setCn_note_last_modify_time(createTime);
        note.setCn_note_status_id(1);
        note.setCn_note_title(title);
        note.setCn_note_type_id(typeId);
        note.setCn_notebook_id(bookId);
        note.setCn_user_id(userId);
        List<Map> list = this.noteMapper.findListByBookId(bookId);
        int AfterNameNumber = 0;
        Iterator var13 = list.iterator();

        while(var13.hasNext()) {
            Map map = (Map)var13.next();
            if (title.equals(map.get("cn_note_title"))) {
                ++AfterNameNumber;
                note.setCn_note_title(note.getCn_note_title() + AfterNameNumber);
            }
        }

        this.noteMapper.save(note);
        result.setMsg("增加笔记成功！");
        result.setStatus(0);
        result.setData(note);
        return result;
    }

    public ReturnResult<Object> updateNote(String noteId, String title, String body, String noteBookId) {
        ReturnResult<Object> result = new ReturnResult();
        Map map = new HashMap();
        map.put("noteId", noteId);
        map.put("title", title);
        map.put("body", body);
        map.put("noteBookId", noteBookId);
        Long modifyTime = System.currentTimeMillis();
        map.put("time", modifyTime);
        result.setData(this.noteMapper.updateNoteByMap(map));
        result.setMsg("更新笔记成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Object> recycle(String noteId) {
        ReturnResult<Object> result = new ReturnResult();
        Long modifyTime = System.currentTimeMillis();
        int ReturnNumber = this.noteMapper.recycle(noteId, modifyTime);
        if (ReturnNumber != 1) {
            result.setMsg("放入回收站失败！");
            result.setStatus(1);
        }

        result.setStatus(0);
        result.setMsg("放入回收站成功！");
        return result;
    }

    public ReturnResult<Object> deleteNotes(String noteId) {
        ReturnResult<Object> result = new ReturnResult();
        int ReturnNumber = this.noteMapper.delete(noteId);
        if (ReturnNumber != 1) {
            result.setMsg("删除失败！");
            result.setStatus(1);
        }

        result.setMsg("删除成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<List<Map>> loadRecycleNotes(String userId) {
        ReturnResult<List<Map>> result = new ReturnResult();
        List<Map> NotesList = this.noteMapper.findListByStatusId(userId);
        result.setData(NotesList);
        result.setMsg("加载回收站笔记成功！");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Object> leaveRecycle(String noteId) {
        ReturnResult<Object> result = new ReturnResult();
        Long modifyTime = System.currentTimeMillis();
        int ReturnNumber = this.noteMapper.LeaveRecycle(noteId, modifyTime);
        if (ReturnNumber != 1) {
            result.setMsg("取回回收站笔记失败！");
            result.setStatus(1);
        }

        result.setStatus(0);
        result.setMsg("取回回收站笔记成功！");
        return result;
    }

    public ReturnResult<List<Note>> serchNote(String keyword, int page) {
        ReturnResult<List<Note>> result = new ReturnResult();
        String title = "%" + keyword + "%";
        int begin = (page - 1) * 5;
        Map map = new HashMap();
        map.put("title", title);
        map.put("begin", begin);
        List<Note> list = this.noteMapper.findLikeTitle(map);
        result.setData(list);
        result.setMsg("搜索笔记成功！");
        result.setStatus(0);
        return result;
    }
}
