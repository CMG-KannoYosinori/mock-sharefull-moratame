$(document).ready(function () {
    $("#errmsgfil").css("display", "none");
    $("#syserrmsgfil").css("display", "none");
});

function ajax_auth_confirm() {
    var authcode;

    $("#errmsgfil").css("display", "none");
    $("#errmsg").text("");

    authcode = $("#authcode").val();

    $.ajax({
        type: "POST",
        url: "/ajax/ajax_sms_auth_confirm.php",
        data: { "authcode": authcode },
        dataType: "json",
        cache: false,
        success: function (data) {

            if (!data.res) {
                if (data.cautionFlg) {
                    location.href = data.isSp ? "/s/caution.php" : "/caution.php";
                } else {
                    $("#errmsgfil").css("display", "");
                    $("#errmsg").html(data.msg);
                }
            } else {
                $("#authform").attr("onsubmit", "");
                $("#authform").submit();
            }

        },
        error: function () {
            $("#syserrmsgfil").css("display", "");      
        },
        dataFilter: function (data, type) {
            return data;
        },
        complete: function () {

        }
    });

    return false;

}

function returnInput() {
    $("#authform").attr("method", "get");
    $("#authform").attr("action", $("#smsInputUrl").val());
    $("#authform").attr("onsubmit", "");
    $("#authform").submit();
}