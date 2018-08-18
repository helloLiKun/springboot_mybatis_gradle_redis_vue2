package example.user.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import example.user.entity.User;
import example.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Administrator on 2018/6/10 0010.
 */
@Controller
public class UserController {
    @RequestMapping("/test")
    public String userList(ModelMap map){
        List<User> list=userService.getList();
        map.put("users",list);
        map.put("userJSON",JSON.toJSONString(new User(), SerializerFeature.WriteMapNullValue));
        map.put("usersJSON", JSON.toJSONString(list));
        return "user/list";
    }

    @RequestMapping("/userSubmit")
    @ResponseBody
    public  String userSubmit(@RequestBody User user){
        System.out.println("user:"+user.toString());
        return "";
    }

    @Autowired
    UserService userService;
}
