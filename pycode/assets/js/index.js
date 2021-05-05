var $B = __BRYTHON__;
var _b_ = __BRYTHON__.builtins;
var $locals = $locals___main__
$locals___main__.__package__ = ""
$locals.__annotations__ = $B.empty_dict()
var $top_frame = ["__main__", $locals___main__, "__main__", $locals___main__]
$locals.$f_trace = $B.enter_frame($top_frame)
var $stack_length = $B.frames_stack.length;
try{
    ;$locals.$line_info = "1,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["alphabet"] = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ;$locals.$line_info = "2,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["toencrypt"] = $B.$call(_b_.input)("enter a message to encrypt: ");
    ;$locals.$line_info = "3,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["toencrypt"] = $B.$call($B.$getattr($locals___main__["toencrypt"],"upper"))();
    ;$locals.$line_info = "4,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["shift"] = $B.$call(_b_.int)($B.$call(_b_.input)("a whole number from 1-25."));
    ;$locals.$line_info = "5,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["encrypted"] = ".";
    ;$locals.$line_info = "6,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var $iter409 = $locals___main__["toencrypt"];$locals["$next409"] = $B.$getattr($B.$iter($iter409),"__next__")
    while(true){
        try{
            $locals___main__["character"] = $locals["$next409"]();
        }
        catch($err){if($B.is_exc($err, [_b_.StopIteration])){break;}else{throw($err)}}
        ;$locals.$line_info = "7,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        $locals___main__["pos"] = $B.$call($B.$getattr($B.$check_def("alphabet",$locals___main__["alphabet"]),"find"))($B.$check_def("character",$locals___main__["character"]));
        ;$locals.$line_info = "8,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        $locals___main__["newpos"] = $B.add($B.$check_def("pos",$locals___main__["pos"]), $B.$check_def("shift",$locals___main__["shift"]));
        ;$locals.$line_info = "9,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        if($B.$bool($B.$is_member($B.$check_def("character",$locals___main__["character"]),$B.$check_def("alphabet",$locals___main__["alphabet"])))){
            ;$locals.$line_info = "10,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main__["encrypted"] = $B.add($B.$check_def("encrypted",$locals___main__["encrypted"]), $B.$getitem($B.$check_def("alphabet",$locals___main__["alphabet"]),$B.$check_def("newpos",$locals___main__["newpos"])));
        }
        else{
            ;$locals.$line_info = "12,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main__["encrypted"] = $B.add($B.$check_def("encrypted",$locals___main__["encrypted"]), $B.$check_def("character",$locals___main__["character"]));
        }
        $locals.$line_info = "6,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    }
    ;$locals.$line_info = "13,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call(_b_.print)("message is", $locals___main__["encrypted"]);
    $B.leave_frame({$locals, value: _b_.None})
}
catch(err){
    $B.leave_frame({$locals, value: _b_.None})
    throw err
}
