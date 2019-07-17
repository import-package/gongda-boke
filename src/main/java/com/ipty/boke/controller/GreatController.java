package com.ipty.boke.controller;

import com.ipty.boke.service.GreatService;
import com.ipty.boke.util.ReturnResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping({"/great"})
public class GreatController {
    @Autowired
    private GreatService greatService;

    @RequestMapping({"/great.do"})
    public ReturnResult<Object> great(String postId, String userId) {
        ReturnResult<Object> result = this.greatService.checkUserIfGreat(postId, userId);
        return result;
    }
}
