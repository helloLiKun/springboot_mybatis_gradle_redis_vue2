package example.user.controller;

import example.user.entity.User;
import example.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Administrator on 2018/6/10 0010.
 */
@Controller
public class UserController {
    @RequestMapping("/test")
    public String userList(){
        List<User> list=userService.getList();
        for(User user:list){
            System.out.println("username--->"+user.getName());
        }
        return "user/list";
    }


    @Autowired
    UserService userService;
}
