var hyokawinX = 0;
var hyokawinY = 0;
var X_offset = 0; // 横軸位置の調整
var Y_offset = 0; // 縦軸位置の調整
var ua = navigator.userAgent;

function set_position(event, contents_type, id = null) {
    if (!event) var event = window.event;
    if (!event.pageX) event.pageX = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
    if (!event.pageY) event.pageY = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop);

    // メッセージの縦軸・横軸位置の調整
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        X_offset = 45;
        Y_offset = 170;
    } else {
        X_offset = $('.contents').offset().left + 50;
        Y_offset = $('.primary').offset().top + 70;
    }

    hyokawinX = event.pageX - X_offset;
    hyokawinY = event.pageY - Y_offset;
}

function sendGoodUpTbCtDetail(project_id, id, nuserid, type, event) {
    set_position(event, 'detail');
    ajax_url = "/detail/ajax_goodup_tbct.php?pjtid=" + project_id + "&tbctid=" + id + "&type=" + type + "&nuserid=" + nuserid;
    return goodup_ajax_exe(ajax_url, id);
}

function goodup_ajax_exe(ajax_url, id, good_type = null) {
    $.ajax({
        type: "GET",
        url: ajax_url,
        dataType: "json",
        cache: true,
        success: function(data) {
            if ($("div#msgwindow" + id).length) {
                var msgwin = $("div#msgwindow" + id);
            } else {
                var msgwin = $("div#msgwindow");
            }

            if (data.res == true) {
                if ($("span#goodnum" + id).length) {
                    var gnum = $("span#goodnum" + id);
                } else {
                    var gnum = $("span#goodnum");
                }

                var now_gnum = parseInt(gnum.text());

                if (isNaN(now_gnum)) {
                    now_gnum = 0;
                }

                if (data.del == false) {
                    if (now_gnum == 0) {
                        gnum.text('1');
                    } else {
                        gnum.text(now_gnum + 1);
                    }
                } else {
                    gnum.text(now_gnum - 1);
                }
            }
            msgwin.text(data.msg);

            var msgwidth = msgwin.width();
            var msgheight = msgwin.height();

            msgwin.css("top", hyokawinY);
            msgwin.css("left", hyokawinX);

            var msgtid = setTimeout(function() {
                clearTimeout(msgtid);
                msgwin.fadeOut(500);
            }, 3000);

            msgwin.fadeIn(500);

        },
        dataFilter: function(data, type) {
            return data;
        },
        complete: function() {
        }
    });

}