package com.ipty.boke.aop;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.io.FileWriter;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
@Aspect
public class ExceptionBean {
    public ExceptionBean() {
    }

    @AfterThrowing(
            throwing = "e",
            pointcut = "within(com.ipty.boke.service..*)"
    )
    public void execute(Exception e) {
        try {
            FileWriter fw = new FileWriter("/message/newzeand.log", true);
            PrintWriter pw = new PrintWriter(fw);
            Date time = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String timeStr = sdf.format(time);
            pw.println("***********************************");
            pw.println("*发生错误:" + e);
            pw.println("*发生时间:" + timeStr);
            pw.println("***********完结****************");
            e.printStackTrace(pw);
            pw.close();
            fw.close();
        } catch (Exception var7) {
            System.out.println("发现未知的错误！");
        }

    }
}
