let height, width, color, reset;
function makeGrid() {
    $("#pixel").html("");
    height = $("#input_height").val();
    width = $("#input_width").val();
    if (height > 50 || width > 50 || height < 1 || width < 1) {
        if (!error.classList.contains("error")) {
            error.classList.toggle("error");
            error.innerText = "the dimension has to be smaller than 50 and bigger than 0";
            backUp();
        }
    } else {
        error.innerText = "";
        $("div").removeClass("error");
        for (let x = 0; x < height; x++) {
            $('#pixel').append('<tr></tr>');
        }
        for (let y = 0; y < width; y++) {
            $('#pixel tr').each(function () {
                $(this).append('<td></td>');
            });
        }
    }
}
color = $('#colorselector');
$(document).on("mousedown", "tr td", function () {
    let colorValue = color.val();
    $(this).css('background-color', colorValue);
    $('tr td').bind("mousemove", function () {
        let colorValue = color.val();
        $(this).css('background-color', colorValue);
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#FFFFFF")
    })
});
reset = $("#pixel").html();
function backUp() {
    $("#pixel").html(reset);
}
