let newtask = $('#newtask')
let btnadd = $('#btnadd')
let btnreset = $('#btnreset')
let btnsort = $('#btnsort')
let btnclean = $('#btnclean')
let list = $('#list')

function clear() {
    $('#list .disabled').remove()
}

function addItem() {
    // console.log(newtask.val())
    // console.log(newtask.length)
    if (newtask.val() != '') {
        let listitem = $('<li>', {
            'class': 'list-group-item',
            text: newtask.val()
        })
        listitem.click((event) => {
            // console.log('clicked', $(event.target))
            listitem.toggleClass('disabled')
        })


        list.append(listitem)
        newtask.val(' ')
    } else
        alert('Enter Task ')

}


function sort() {
    $('#list .disabled').appendTo(list)
}

//code so that when enter ets pressed it automatically add task

newtask.keypress((e) => {
    if (e.which == 13) {
        addItem()

    }
})


btnadd.click(() => {
    addItem()

})

btnreset.click(() => {
    newtask.val(' ')
})



btnclean.click(() => {
    clear()
})


btnsort.click(() => {
    sort()
})