package com.ipty.boke;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.ipty.boke.mapper")
public class BokeApplication {

    public static void main(String[] args) {
        SpringApplication.run(BokeApplication.class, args);
    }

}
