var x = document.getElementById('count');
document.getElementById('subtract').addEventListener
('click',function(e){
    x.innerHTML = parseInt(x.innerHTML) - 1;
    
})

document.getElementById('add').addEventListener
('click',function(e){
    
    x.innerHTML = parseInt(x.innerHTML) + 1;
    
})
