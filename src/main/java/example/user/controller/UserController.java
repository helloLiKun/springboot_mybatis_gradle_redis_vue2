package example.user.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import example.user.entity.User;
import example.user.service.UserService;
import example.util.AjaxResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

/**
 * Created by Administrator on 2018/6/10 0010.
 */
@Controller
public class UserController {
    @RequestMapping("/test")
    public String userList(ModelMap map){
        List<User> list=userService.getList();
        map.put("usersJSON", JSON.toJSONString(list));
        return "user/list";
    }

    @RequestMapping("/userSubmit")
    @ResponseBody
    public  String userSubmit(@RequestBody User user){
        AjaxResponse.Body resp=AjaxResponse.FAILED.body();
        System.out.println("user:"+user.toString());
        resp=AjaxResponse.SUCCEEDED.body();
        return JSON.toJSONString(resp);
    }

    @RequestMapping("/formdataSubmit")
    @ResponseBody
    public String formDataSubmit(String id,String test,String userJSON,MultipartFile[] files){
        AjaxResponse.Body resp=AjaxResponse.FAILED.body();
        System.out.println("id:"+id);
        System.out.println("test:"+test);
        System.out.println("user:"+userJSON);
        User user=JSON.parseObject(userJSON,User.class);
        System.out.println("user..:"+user.toString());
        resp=AjaxResponse.SUCCEEDED.body();
        return JSON.toJSONString(resp);
    }
    @RequestMapping("/formMultiple")
    @ResponseBody
    public String formMultiple(String id,String userJSON,MultipartFile[] files){
        AjaxResponse.Body resp=AjaxResponse.FAILED.body();
        System.out.println("length:"+files.length);
        for(MultipartFile file:files){
            System.out.println(file.getOriginalFilename());
        }
        resp=AjaxResponse.SUCCEEDED.body();
        return JSON.toJSONString(resp);
    }

    @Autowired
    UserService userService;
}
