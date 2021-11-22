let removes = document.getElementsByClassName('remove')
let hearts = document.getElementsByClassName('heart')
let pluses = document.getElementsByClassName('plus')
let minuses = document.getElementsByClassName('minus')


//console.log([...hearts])
let arr = [...hearts]

arr.map(function (s) {
    s.addEventListener("click", function () {

        if (s.style.color == "red") {
            s.style.color = "gray"
        }
        else {
            s.style.color = "red"
        }
    })

})
let rem = [...removes]
rem.map(function (s) {
    s.addEventListener("click", function () {
        s.parentNode.parentNode.remove()
        console.log(s.parentNode.parentNode)

    })
})


let a = [...pluses]

a.map(function (z) {
    z.addEventListener("click", function () {

        let max = 30; /// max number
        let mynumber = z.parentNode.querySelector('.mynumber')
        let number = +mynumber.innerText /// number value


        if (number < max) {
            number = number + 1;
            mynumber.innerText = number
        }
    })
})

let d = [...minuses]

d.map(function (r) {
    r.addEventListener("click", function () {

        let min = 0 /// min number
        let mynumber = r.parentNode.querySelector('.mynumber')
        let number = +mynumber.innerText // 3


        if (number > min) {
            number = number - 1;
            mynumber.innerText = number
        }
    })
})
