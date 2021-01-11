


function 问候(who = 30) {
    let hi = "hello"

    console.log(hi + "," + who)
}

window.onload = () => {
    问候("A")
    问候("B")
    问候()
    问候()

    let mask = document.querySelector("#mask")
    //    mask.style.top = e.clientX

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("click" , changeLight)
    

    function changeLight(){
        mask.style.opacity = 0
        // if(mask.style.opacity == 0){
        //     mask.style.opacity = 1
        // }else{
        //     mask.style.opacity = 0
        // }
        
       

        setTimeout(()=>{
            document.querySelector("#homeDef1").style.opacity = 1
        },1500)
        setTimeout(()=>{
            document.querySelector("#homeDef2").style.opacity = 1
        },1500)  
        
        setTimeout(function(){
            //...
            document.querySelector("#video").style.opacity = 1
        },3600)

        document.querySelector("#video video").play()

    }



    function mouseMove(e) {
        console.log(e.clientX);
        mask.style.left = -e.clientX / 2 + "px"
        mask.style.top = -e.clientY / 2 + "px"
    }

    function trailer(){

    }

}