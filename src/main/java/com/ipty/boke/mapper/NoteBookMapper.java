package com.ipty.boke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ipty.boke.pojo.NoteBook;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface NoteBookMapper extends BaseMapper<NoteBook> {
    List<NoteBook> findByUserId(String var1);

    void save(NoteBook var1);

    int deleteNoteBook(String var1);

    int recycleAllSonNotes(String var1);

    int changeBookId(@Param("newBookId") String var1, @Param("oldBookId") String var2);
}
