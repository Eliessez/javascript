const sizeText = document.querySelector('#sizeText')

sizeText.addEventListener('click', function (e) {

    if (e.target.style.fontSize == '16px') {
        e.target.style.fontSize = '50px'
    }
    else { e.target.style.fontSize = '16px' }
});





const secondList = document.querySelector('#second-list')
const newTitle = document.createElement('h2')

secondList.addEventListener('dblclick', function (e) {
    secondList.prepend(newTitle)
    newTitle.textContent = e.target.textContent
 })
