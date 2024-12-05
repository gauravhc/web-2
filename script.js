$(document).ready(function () {
    $("#submitButton").on("click", function () {
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            address: $("#address").val()
        };

        $.ajax({
            url: "process.php",
            type: "POST",
            data: formData,
            success: function (response) {
                $("#result").html(response).removeClass("hidden");
            },
            error: function () {
                $("#result").html("An error occurred. Please try again.").removeClass("hidden");
            }
        });
    });
});
