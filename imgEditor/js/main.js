function addImage(e) {
    var imgUrl = $("#imgUrl").val();
    if (imgUrl.length) {
        $("#imageContainer img").attr("src", imgUrl);
    }
    e.preventDefault();
}



$("#urlBox").submit(addImage);
$("input[type=range]").mousemove(editImage).change(editImage);

function editImage() {
    var gs = $("#gs").val();
    var blur = $("#blur").val(); 
    var br = $("#br").val();
    var ct = $("#ct").val(); 
    var huer = $("#huer").val(); 
    var opacity = $("#opacity").val();
    var invert = $("#invert").val();
    var saturate = $("#saturate").val();
    var sepia = $("#sepia").val(); 

    $("#imageContainer img").css("filter", 'grayscale(' + gs+
                                                     '%) blur(' + blur +
                                                     'px) brightness(' + br +
                                                     '%) contrast(' + ct +
                                                     '%) hue-rotate(' + huer +
                                                     'deg) opacity(' + opacity +
                                                     '%) invert(' + invert +
                                                     '%) saturate(' + saturate +
                                                     '%) sepia(' + sepia + '%)');

    $("#imageContainer img").css("-webkit-filter", 'grayscale(' + gs+
                                                     '%) blur(' + blur +
                                                     'px) brightness(' + br +
                                                     '%) contrast(' + ct +
                                                     '%) hue-rotate(' + huer +
                                                     'deg) opacity(' + opacity +
                                                     '%) invert(' + invert +
                                                     '%) saturate(' + saturate +
                                                     '%) sepia(' + sepia + '%)'); 

}

$('#imageEditor').on('reset', function () {
    setTimeout(function() {
        editImage();
    },0);
});