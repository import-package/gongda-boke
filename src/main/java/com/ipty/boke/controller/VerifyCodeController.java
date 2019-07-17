package com.ipty.boke.controller;

import com.ipty.boke.util.ReturnResult;
import com.ipty.boke.util.VerifyCode;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;

@RestController
@RequestMapping({"/VerifyCode"})
public class VerifyCodeController {
    String msg = null;

    public VerifyCodeController() {
    }

    @RequestMapping({"/verify.do"})
    public byte[] doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        new ReturnResult();
        VerifyCode verifyCode = new VerifyCode();
        BufferedImage image = verifyCode.getImage();
        byte[] imageData = VerifyCode.getImageData(image);
        this.msg = verifyCode.getText();
        return imageData;
    }

    @RequestMapping({"/right.do"})
    public ReturnResult<Object> getRight() {
        ReturnResult result = new ReturnResult();

        try {
            Thread.sleep(600L);
        } catch (InterruptedException var3) {
            var3.printStackTrace();
        }

        result.setMsg(this.msg);
        return result;
    }
}
