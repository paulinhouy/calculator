function Calcularora (){

    this.display = document.querySelector('.display');


    this.inicia = () => {
        this.CapturaCliques();
    } 
    this.CapturaCliques = () => {
        document.addEventListener('click',(e) => {
                let el = e.target;
                if(el.classList.contains('btn-num')) this.AddNumDisplay(el);
                if(el.classList.contains('btn-clear')) this.ApagarDisplay();
                if(el.classList.contains('btn-del')) this.DeletarUmEl();
            });
        }
            this.DeletarUmEl = () => {
                this.display.value = this.display.value.slice(0,-1);
            }

                this.ApagarDisplay = () => {
            this.display.value = "";
        }
        this.AddNumDisplay = (el) =>{

         this.display.value += el.innerText
        }
        
    }

    const e1 = 1;

    const calculadora = new Calcularora();
    calculadora.inicia();