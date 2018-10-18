package example.multi_search_select;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by lk on 2018/10/18.
 */
@Controller
public class MultiSearchSelectController {

    @RequestMapping("/multiSearchSelect")
    public String multiSearchSelect(){
        return "/multi-search-select/multi-search-select";
    }

}
