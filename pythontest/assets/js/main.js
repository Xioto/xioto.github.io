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
    $B.$import("random", [],{},$locals___main__, true);_b_.None;;
    ;$locals.$line_info = "2,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["alphabet"] = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ;$locals.$line_info = "3,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["toencrypt"] = $B.$call(_b_.input)("Enter a message to encrypt: ");
    ;$locals.$line_info = "4,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["toencrypt"] = $B.$call($B.$getattr($locals___main__["toencrypt"],"upper"))();
    ;$locals.$line_info = "5,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["shiftstr"] = $B.$list([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);
    ;$locals.$line_info = "6,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["shift"] = $B.$call(_b_.int)($B.$call($B.$getattr($locals___main__["random"],"choice"))($locals___main__["shiftstr"]));
    ;$locals.$line_info = "7,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["shiftdict"] = _b_.dict.$factory([[2,"B"],[3,"C"],[4,"D"],[5,"E"],[6,"F"],[7,"G"],[8,"H"],[9,"I"],[10,"J"],[11,"K"],[12,"L"],[13,"M"],[14,"N"],[15,"O"],[16,"P"],[17,"Q"],[18,"R"],[19,"S"],[20,"T"],[21,"U"],[22,"V"],[23,"W"],[24,"X"]]);
    ;$locals.$line_info = "8,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["encrypted"] = "";
    ;$locals.$line_info = "9,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var $iter136 = $locals___main__["toencrypt"];$locals["$next136"] = $B.$getattr($B.$iter($iter136),"__next__")
    while(true){
        try{
            $locals___main__["character"] = $locals["$next136"]();
        }
        catch($err){if($B.is_exc($err, [_b_.StopIteration])){break;}else{throw($err)}}
        ;$locals.$line_info = "10,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        $locals___main__["pos"] = $B.$call($B.$getattr($B.$check_def("alphabet",$locals___main__["alphabet"]),"find"))($B.$check_def("character",$locals___main__["character"]));
        ;$locals.$line_info = "11,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        $locals___main__["newpos"] = $B.add($B.$check_def("pos",$locals___main__["pos"]), $B.$check_def("shift",$locals___main__["shift"]));
        ;$locals.$line_info = "12,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        if($B.$bool($B.$is_member($B.$check_def("character",$locals___main__["character"]),$B.$check_def("alphabet",$locals___main__["alphabet"])))){
            ;$locals.$line_info = "13,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main__["encrypted"] = $B.add($B.$check_def("encrypted",$locals___main__["encrypted"]), $B.$getitem($B.$check_def("alphabet",$locals___main__["alphabet"]),$B.$check_def("newpos",$locals___main__["newpos"])));
        }
        else{
            ;$locals.$line_info = "15,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main__["encrypted"] = $B.add($B.$check_def("encrypted",$locals___main__["encrypted"]), $B.$check_def("character",$locals___main__["character"]));
        }
        $locals.$line_info = "9,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    }
    ;$locals.$line_info = "16,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call(_b_.print)("Encrypted:", $B.$getitem($locals___main__["shiftdict"],$locals___main__["shift"]), $locals___main__["encrypted"]);
    $B.leave_frame({$locals, value: _b_.None})
}
catch(err){
    $B.leave_frame({$locals, value: _b_.None})
    throw err
}
