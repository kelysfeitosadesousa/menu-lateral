var itemMenu=document.querySelectorAll('.item_menu')

function selectLink(){
    itemMenu.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
itemMenu.forEach((item)=>
    item.addEventListener('click',selectLink)
)
//expandir menu
var bntExp=document.querySelector('#btn_exp')
var menuSide = document.querySelector('.menu_lateral')

bntExp.addEventListener('click',function(){
    menuSide.classList.toggle('expandir')
})