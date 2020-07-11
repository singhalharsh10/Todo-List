let newtask = document.getElementById('newtask')
let btnadd = document.getElementById('btnadd')
let btnreset = document.getElementById('btnreset')
let btnsort = document.getElementById('btnsort')
let list = document.getElementById('list')

btnadd.onclick = function() {

    let y = newtask.value;
    let a = ' '

    a += '<li class="list-group-item">' + y + '</li>'
    console.log(a)

    a.onclick = function() {
        console.log('clicked')
            // a.toggleClass('disabled')
    }

    list.innerHTML += a;

}

btnreset.onclick = function() {
    newtask.value = ' '

}

// btnreset.onclick = function() {
//     list.removeChild(list.childNodes[0])

// }