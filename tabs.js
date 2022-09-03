
const tabsArray = document.querySelectorAll('#select_tab');
const contentArray = document.querySelectorAll('#content_tab');


tabsArray.forEach((cadaLi,i) => {
tabsArray[i].addEventListener('click',() => {
    tabsArray.forEach((cadaLi,i) => {
        tabsArray[i].classList.remove('text-indigo-600');
        tabsArray[i].classList.remove('bg-gray-100');
        contentArray[i].classList.remove('visible');
        contentArray[i].classList.add('hidden');
    })
    
    tabsArray[i].classList.add('bg-gray-100');
    tabsArray[i].classList.add('text-indigo-600');
    tabsArray[i].classList.add('rounded-t-lg');
    contentArray[i].classList.remove('hidden');
    contentArray[i].classList.add('visible');
})
}) 