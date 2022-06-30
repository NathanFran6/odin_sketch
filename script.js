const container = document.querySelector('.container')

function gridCreator (grid) {
    console.log(amt)
    for (let i=0; i<amt;i++) {
        const div = document.createElement('div')
        div.className= 'div'
        document.getElementById('container').appendChild(div) 
        
    }
}



document.getElementById('pop-up').onclick = function () {
    let num =prompt('How Many Squraes on Each Side?')
    if (num <= 100) {
        amt = num*num
        gridCreator(amt)
    }else {
        alert('Too High! Choose Again')
    }
}
