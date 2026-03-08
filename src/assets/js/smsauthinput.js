$(document).ready(function () {
    $("#errmsgfil").css("display", "none");
    $("#syserrmsgfil").css("display", "none");
});

function ajax_auth_send() {

    $("#errmsgfil").css("display", "none");
    $("#errmsg").text("");

    var mobilenumber = $("#mobilenumber").val();
    var deliveryKind = $("input[name='deliveryKind']:checked").val();

    $.ajax({
        type: "POST",
        url: "/ajax/ajax_sms_auth_send.php",
        data: { "mobilenumber": mobilenumber, "deliveryKind": deliveryKind },
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
