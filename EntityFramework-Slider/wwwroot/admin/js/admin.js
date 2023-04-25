$(function () {

    $(document).on("click", ".slider-status", function () {

        let sliderId = $(this).parent().attr("data-id");
        let changeElem = $(this);
        let data = { id: sliderId }



        $.ajax({
            url: "slider/setstatus",
            type: "Post",
            data: data,
            success: function (res) {

                if (res) {
                    $(changeElem).removeClass("active-status");
                    $(changeElem).addlass("deActive-status");
                } else {
                    $(changeElem).addlass("active-status");
                    $(changeElem).removeClass("deActive-status");
                }
            }

        })
    })
})