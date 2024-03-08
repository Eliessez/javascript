
const button = document.querySelector('#button')
const afficheList = document.querySelector('#list')


button.addEventListener('click', function(e){
    const input = document.querySelector('#input')
    const list = document.createElement('li');
    list.textContent = input.value
    afficheList.prepend(list)
});
afficheList.addEventListener('click',function(e) {
    e.target.style.textDecoration =('line-through')
});
afficheList.addEventListener('dblclick',function (e) {
    e.target.removeEventListener()
    
})

