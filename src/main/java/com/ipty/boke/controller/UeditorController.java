package com.ipty.boke.controller;

import com.baidu.ueditor.ActionEnter;
import org.json.JSONException;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

/**
 * Created by Noahhhhha
 * on 2019/12/23 16:54.
 */
@Controller
@Transactional
@RequestMapping("/res/ueditor")
public class UeditorController {
    @RequestMapping("/jsp/controller")
    @ResponseBody
    public void getConfigInfo(HttpServletRequest request,HttpServletResponse response){
        response.setContentType("application/json");
        String rootPath = request.getSession()
                .getServletContext()
                .getRealPath("/");
        try {
            String exec = new ActionEnter(request, rootPath).exec();
            PrintWriter writer = response.getWriter();
            writer.write(exec);
            writer.flush();
            writer.close();
        } catch (IOException | JSONException e) {
            e.printStackTrace();
        }
    }
}
