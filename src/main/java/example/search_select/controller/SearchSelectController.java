package example.search_select.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import example.user.entity.User;
import example.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Administrator on 2018/9/24 0024.
 */
@Controller
public class SearchSelectController {
    @RequestMapping("/searchSelect")
    public String toSearchSelect(ModelMap map){
        List<User> list=userService.getList();
        map.put("users",list);
        map.put("userJSON", JSON.toJSONString(new User(), SerializerFeature.WriteMapNullValue));
        map.put("usersJSON", JSON.toJSONString(list));
        return "/search_select/search-select-test";
    }


    @Autowired
    UserService userService;
}
