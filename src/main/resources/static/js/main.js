function get (){
    $.ajax({
        url :   "/user",
        type:   "GET",
        datatype:   "JSON",
        success:(data) => {
            $("#user").html(data.name);
            $(".unauthenticated").hide();
            $(".authenticated").show();    
            document.title = "Inicio"
        }
    });
}

function logout(){
    $.ajax({
        url: "/logout",
        type: "POST",
        success: () =>{
            location.href = "http://localhost:8080";
        }
    });
    return true;        
}

get()


$("#close-session").click(() => {
    logout()
})