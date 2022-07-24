

$("#add_book").submit(function(event){
    alert("Data inserted Successfully!");
})
if(window.location.pathname == "/" ){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }
        if(confirm("Do you want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully!");
                location.reload()
            })
        }
    })
}