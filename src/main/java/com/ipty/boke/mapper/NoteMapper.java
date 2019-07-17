package com.ipty.boke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ipty.boke.pojo.Note;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;
@Mapper
public interface NoteMapper extends BaseMapper<Note> {
    List<Map> findListByBookId(String var1);

    Note findByNoteId(String var1);

    int updateNoteByMap(Map<String, Object> var1);

    void save(Note var1);

    int recycle(@Param("noteId") String var1, @Param("modifyTime") Long var2);

    int LeaveRecycle(@Param("noteId") String var1, @Param("modifyTime") Long var2);

    int delete(String var1);

    int share(String var1, Long var2);

    List<Map> findListByStatusId(String var1);

    List<Note> findLikeTitle(Map var1);

    String findUserIdByNoteId(String var1);
}
