class animes {
    constructor(nome, tema, protagonista, personagem, nota, recomenda){
        //propriedade - variavél
        this.nome = nome;
        this.tema  = tema;
        this.protagonista = protagonista;
        this.personagem = personagem;
        this.nota = nota;
        this.recomenda = recomenda;
    }
}

function montarTabela(lista){
    let auxHtml = '';
    for (let i = 0; i < lista.length; i++){
        auxHtml += '<tr>'+
                   '<td>'+ lista[i].nome + '</td>'+
                   '<td>'+ lista[i].tema + '</td>'+
                   '<td>'+ lista[i].protagonista + '</td>'+
                   '<td>'+ lista[i].personagem + '</td>'+
                   '<td>'+ lista[i].nota + '</td>'+
                   '<td>'+ lista[i].recomenda + '</td>'+
                   '<td>'+
                     '<a href="#" class="btn btn-outline-success" rel="'+ i + '">' +
                       '<img src="editbutton.png" width="20" rel="'+ i + '"/>'+
                     '</a>' + 
                    '<td>'+
                     '<a href="#" class="btn btn-outline-danger" rel="'+ i + '">' +
                       '<img src="lixeira.png" width="20" rel="'+ i + '"/>'+
                     '</a>' + 
                    '</td>'+
                   '</tr>';
    }
    return auxHtml;
}

function validar(nota) {
    if (!isNaN(nota) && nota != ''){
        return true;
    }else{
        return false;
    }
}

auxPosicao = '';
listaAnimes = [];
let anime1 = new animes('Re: Zero', 'isekai', 'Subaru', 'Rem', 7.1, "Sim");
listaAnimes.push(anime1);

$(document).ready(function(){
    $('#tabela').html(montarTabela(listaAnimes));

    $('#btnSalvar').click(function() {
        let nome = $('#nome').val();
        let tema = $('#tema').val();
        let protagonista = $('#protagonista').val();
        let personagem = $('#personagem').val();
        let nota =$('#nota').val();
        let recomenda = $('#recomenda').val();
        if (nome != '' && tema != '' && isNaN(tema) && protagonista != '' && isNaN(protagonista) && personagem != '' && isNaN(personagem) && validar(nota) && recomenda != '' && isNaN(recomenda)) {
            nota = parseFloat(nota);
            
            let novoAnime = new animes(nome, tema, protagonista, personagem, nota, recomenda);
            if(auxPosicao == ''){
            listaAnimes.push(novoAnime);}
            else{
                listaAnimes[auxPosicao] = novoAnime;
                auxPosicao = '';
            }
            document.getElementById('tabela').innerHTML = montarTabela(listaAnimes);

            $('#tabela').html(montarTabela(listaAnimes));
            $('input').val('');
        }else{
            alert("Informe a parada certa!")
        }
    });
    $('#tabela').on('click','.btn-outline-success', (evento) => {
        auxPosicao = evento.target.getAttribute('rel');
         $('#nome').val(listaAnimes[auxPosicao].nome);
         $('#tema').val(listaAnimes[auxPosicao].tema);
         $('#protagonista').val(listaAnimes[auxPosicao].protagonista);
         $('#personagem').val(listaAnimes[auxPosicao].personagem);
         $('#nota').val(listaAnimes[auxPosicao].nota);
         $('#recomenda').val(listaAnimes[auxPosicao].recomenda);
        
        })

    $('#tabela').on('click','.btn-outline-danger', (evento) => {
     if(confirm('Tu quer isso mesmo?')){
        listaAnimes.splice(evento.target.getAttribute('rel'), 1);
        $('#tabela').html(montarTabela(listaAnimes));
      }
    });
    //$('table').DataTable();

    $('#btnJson').click(() => {
        let animesJson = JSON.stringify(listaAnimes);
        alert(animesJson);
    });

    $('#btnAjax').click(() => {
        $.ajax({
            url: 'http://date.jsontest.com/',
            method: 'GET',
            dataType: 'json'
        }).done(function(dados){
            $('#data').html(dados.date);
        });
    });
    
    $('#btnCancelar').click(() => {
        $('input').val('');
        auxPosicao = '';
    });

    $('#recomenda').keypress((evento) => {
       if(evento.which == 13){
        $('#btnSalvar').trigger('click');
       };
    });

const imagens = [
    'animesnovo.png',
    'animes2novo.png',
    'animes3novo.png'
  ];
  
  
  const botao = document.getElementById('alterar-btn');
  
  let contador = 0;
  
  botao.addEventListener('click', function() {
    const corpo = document.querySelector('body');
  
    corpo.style.backgroundImage = `url('${imagens[contador]}')`;
  
    contador++;
  
    if (contador === imagens.length) {
      contador = 0;
    }
  });
  
});


  