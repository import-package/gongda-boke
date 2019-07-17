package com.ipty.boke.common;


import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 给Spring Boot web项目设置默认首页
 */
@Configuration
public class DefaultView extends WebMvcConfigurerAdapter {
    public void addViewControllers(ViewControllerRegistry registry)
    {
        registry.addViewController("/").setViewName("forward:/index.html");

        /*
        setOrder可以设置ViewController的优先级，强烈建议此处设置为最高，这样即使其他Controller中存在一样的映射（即/)，则仍会优先
         */
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);

        super.addViewControllers(registry);
    }
}
