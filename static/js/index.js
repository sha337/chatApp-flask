

function getResponse() {
    
    let userText = $("#textInput").val();
    let userHtml = '<p>' + userText + '</p>';

    $("#textInput").val("");
    $(".chat-messages").append(userHtml);
    
    
    $.get("/get", { msg: userText }).done(function(data) {
    var bHtml = '<p>' + data + '</p>';
    $(".chat-messages").append(bHtml);
    });
    $(".chat-messages").scrollTop($(".chat-messages").outerHeight());
    
}


$("#textInput").keypress(function(e) {
    if(e.which == 13) {
        getResponse();
    }
    
});
$("#buttonInput").click(function() {
    getResponse();
});

