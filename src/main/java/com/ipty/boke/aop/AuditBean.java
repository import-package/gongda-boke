package com.ipty.boke.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AuditBean {
    public AuditBean() {
    }

    @Around("within(com.ipty.boke.service..*)")
    public Object audit(ProceedingJoinPoint point) throws Throwable {
        Object obj = null;

        try {
            long timeStart = System.currentTimeMillis();
            obj = point.proceed();
            long timeEnd = System.currentTimeMillis();
            String str = point.getSignature().toString();
            System.out.println(str + "耗时:" + (timeEnd - timeStart));
            return obj;
        } catch (Throwable var8) {
            var8.printStackTrace();
            throw var8;
        }
    }
}
