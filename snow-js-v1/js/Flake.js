class Flake{
    constructor(size , color){
       this.size = size;
       this.color = color
    }
    render(){
      var left = Math.random() * window.innerWidth;
      var delay = Math.random() * 10;
      var box = document.getElementById("box");
      box.innerHTML += ` <div class="Flake ${this.size} falling" style="
      background-image: radial-gradient(${this.color},transparent);
      left:${left}px;
      animation-delay: ${delay}s;
      top:-50px;
      "></div>`
      
    }


}
