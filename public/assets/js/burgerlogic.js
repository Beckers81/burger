$(".burgerButton").on("click",function(event){
   var burgerId = $(this).val()
$.ajax({
    method:"PUT",
    url:'/burger/eat/' + burgerId
}).then(function(data){
    
})
   console.log(burgerId)
   location.reload();
})


