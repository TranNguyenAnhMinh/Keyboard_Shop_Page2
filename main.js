let lists = document.querySelectorAll('.lists .items');
lists.forEach(items => {
    items.addEventListener('click', function (event) {
        if (event.target.classList.contains('add')) {
            var itemNew = items.cloneNode(true);
            let checkIsset = false;

            let listCart = document.querySelectorAll('.cart .items');
            listCart.forEach(cart => {
                if (cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                   checkIsset = true;
                   cart.classList.add('danger');
                   setTimeout(function(){
                    cart.classList.remove('danger');
                   },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }

        }
    })
})

function Remove($key){
    let listCart = document.querySelectorAll('.cart .item' );
    listCart.forEach(items =>{
        if(items.getAttribute('data-key') == $key){
            items.remove();
            return;
        }
    })
}