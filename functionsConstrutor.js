function Calcularora (){

    this.display = document.querySelector('.display');


    this.CapturaCliques = () => {
        document.addEventListener('click',(e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')) this.AddNumDisplay(el);
        });
        this.AddNumDisplay = el => this.display.value += el.innerText
        
        this.inicia = () => {
            this.CapturaCliques();
        } 

    }}

    const calculadora = new Calcularora();
    calculadora.inicia();