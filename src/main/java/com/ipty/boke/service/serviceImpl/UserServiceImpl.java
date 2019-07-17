package com.ipty.boke.service.serviceImpl;

import com.ipty.boke.mapper.NoteBookMapper;
import com.ipty.boke.mapper.UserMapper;
import com.ipty.boke.pojo.NoteBook;
import com.ipty.boke.pojo.User;
import com.ipty.boke.service.UserService;
import com.ipty.boke.util.NoteUtil;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private NoteBookMapper noteBookMapper;

    public UserServiceImpl() {
    }

    public ReturnResult<User> checkLogin(String adminCode, String password) {
        ReturnResult<User> result = new ReturnResult();
        User user = this.userMapper.findByAdminCode(adminCode);
        if (user == null) {
            result.setStatus(1);
            result.setMsg("没有该用户");
            return result;
        } else {
            String md5PassWord = NoteUtil.md5(password);
            if (!user.getCn_user_password().equals(md5PassWord)) {
                result.setStatus(2);
                result.setMsg("密码不正确");
                return result;
            } else {
                result.setStatus(0);
                result.setMsg("登陆成功！");
                result.setData(user);
                return result;
            }
        }
    }

    public ReturnResult<Object> addUser(String adminCode, String password, String nick, int sex) {
        ReturnResult<Object> result = new ReturnResult();
        User hasUser = this.userMapper.findByAdminCode(adminCode);
        if (hasUser != null) {
            result.setStatus(1);
            result.setMsg("该用户名已存在！");
            return result;
        } else {
            User user = new User();
            user.setCn_user_admincode(adminCode);
            String md5Password = NoteUtil.md5(password);
            user.setCn_user_password(md5Password);
            user.setCn_user_nick(nick);
            String id = NoteUtil.createId();
            user.setCn_user_id(id);
            Long createTime = System.currentTimeMillis();
            user.setCn_user_create_time(createTime);
            user.setCn_user_sex(sex);
            user.setCn_user_state(1);
            user.setCn_user_last_visit_time(createTime);
            NoteBook noteBook = new NoteBook();
            noteBook.setCn_notebook_create_time(System.currentTimeMillis());
            noteBook.setCn_notebook_id(NoteUtil.createId());
            noteBook.setCn_notebook_name("我的笔记本");
            noteBook.setCn_notebook_status_id(1);
            noteBook.setCn_user_id(id);
            this.noteBookMapper.save(noteBook);
            this.userMapper.save(user);
            result.setStatus(0);
            result.setMsg("创建用户成功！");
            return result;
        }
    }

    public ReturnResult<Object> checkBeforePassword(String userId, String beforePassword) {
        ReturnResult<Object> result = new ReturnResult();
        String findPassword = this.userMapper.findPassword(userId);
        String M5beforPassword = NoteUtil.md5(beforePassword);
        if (findPassword.equals(M5beforPassword)) {
            result.setMsg("原始密码正确");
            result.setStatus(0);
            return result;
        } else {
            if (!findPassword.equals(beforePassword)) {
                result.setMsg("原始密码不正确");
                result.setStatus(1);
            } else {
                result.setMsg("密码错误");
                result.setStatus(2);
            }

            return result;
        }
    }

    public ReturnResult<Object> fixPassword(String userId, String newPassword) {
        ReturnResult<Object> result = new ReturnResult();
        String M5Password = NoteUtil.md5(newPassword);
        Map map = new HashMap();
        map.put("userId", userId);
        map.put("newPassword", M5Password);
        this.userMapper.fixPassword(map);
        System.out.println(M5Password);
        result.setMsg("密码修改成功");
        result.setStatus(0);
        return result;
    }

    public ReturnResult<Object> findUserNickByUserId(String userId) {
        ReturnResult<Object> result = new ReturnResult();
        result.setMsg(this.userMapper.findNickByUserId(userId));
        result.setStatus(0);
        return result;
    }
}
