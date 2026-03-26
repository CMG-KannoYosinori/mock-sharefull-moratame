$(function () {
    $("input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass("c-on");
        }else{
            $(this).parent().removeClass("c-on");
        }
    });
    $("input[type='radio']").change(function(){
        var radio_name = $(this).attr("name");
        var radio_obj_list = $("input[name='"+radio_name+"']");
        for(var i = 0; i < radio_obj_list.length; i++){
            var radio_obj = radio_obj_list[i];
            // var clss = $(radio_obj).parent().attr("class");
            // var cls = clss.split(" ");
            // var c = "."+cls[0];
            var set_c = "c-on2";
            if($(radio_obj).is(":checked")){
                // $(c).removeClass(set_c);
                $(this).parent().addClass(set_c);
            }else{
                $(radio_obj).parent().removeClass(set_c);
            }
        }
    });

});

function onFocus(control) {
            control.style.outline="3px solid #99c419"
};
function onBlur(control) {
            control.style.outline="none"
};
