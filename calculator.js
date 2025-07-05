function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel : document.querySelector('.btn-del'),

        clearDisplay() {
            this.display.value = '';
        },

        inicia() {
            this.cliqueBotoes();
        },
        apagarUm(){
         this.display.value = this.display.value.slice(0,-1)
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagarUm();

                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();


//funcoes construtoras

function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome +' é um método' + this.sobrenome)
    }

}

const p1 = new Pessoa('maria','joaquina')
const p2 = new Pessoa('paulo','ricardo')
p1.metodo()
p2.metodo()