
    var cont = BancoDePerguntas.length / 6 - 1
    var contPremio = 0
    var Jogar=true;
var perguntaAtual;


function MostrarPerguntas(){
    var teste = PegarPergunta();
  
// document.getElementById("question").innerHTML=teste[0]
var l=document.getElementsByTagName("p")
// var v=document.getElementsByTagName("input")
document.getElementsByTagName("span")[0].innerHTML=Premios [contPremio++]

for(go=0;go<teste.length;go++){
   
  
  l[go].innerHTML=teste[go].replace("true","")








}

return teste;
}




    function PegarPergunta() {
        var t = getRandom(cont)
        var pergunt = BancoDePerguntas[t].slice();
        perguntaAtual=BancoDePerguntas[t].slice()
        cont--;
        BancoDePerguntas.splice(t, 1);
        
        return pergunt;
    }






    function getRandom(max) {
        return Math.floor(Math.random() * max + 1)
    }



    function VerResposta(Per, RespostaDoUsuario) {
        var pergunta1 = Per;
        var respostaCerta;
       
        for (i = 0; i < pergunta1.length; i++) {

            if (pergunta1[i].indexOf("true") != -1)
                respostaCerta = pergunta1[i].replace("true","")
        }
        if (RespostaDoUsuario == respostaCerta)
            return true
        else
       
            return false
    }


   

