import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotoService{

    private http: HttpClient;
    contructor(http){

    }

    getPhoto(){
        return [
            {"title":"Kuroko no Basket","description":"Kuroko é um membro do time de basquete colegial lendário conhecido como “Geração dos Milagres”, e embora ninguém saiba, os cinco principais jogadores o consideram o melhor jogador de basquete. Quando ele se junta à equipe, todos se surpreendem ao descobrir que Kuroko é pequeno, magro e fraco..qual é o segredo que o faz tão famoso, e quais de suas habilidades são capazes de ajudar a sua equipe?","url":"https://image.tmdb.org/t/p/w185/ThmospzX4BjLKCsvRFhgImirKn.jpg"},
            {"title":"One Piece","description":"Desesperados por dinheiro, os Chapéus de Palha entram numa corrida secreta entre tripulações piratas conhecidos como o Concurso beco sem saída. Lá, eles devem lutar contra os poderosos, incluindo um Ex-Marinheiro que se Tornou um Pirata, (Capitão Gasparde), e o caçador de recompensas que quer matá-lo. No entanto, com o esquema mortal de Gasparde, todos os seus adversários foram condenados desde o início?","url":"https://image.tmdb.org/t/p/w185/tS8alvl1PtJQIR3eBMhQ2lqZCuf.jpg"},
            {"title":"Death Note","description":"Light Yagami é um genial estudante entediado com a vida que leva. Mas tudo está prestes a mudar. Light encontra um misterioso caderno chamado Death Note e descobre que com ele é possível matar quem quiser. O rapaz então decide varrer a escória da sociedade do planeta. Dotado de grande senso de justiça, ele começa a usar o caderno maldito para eliminar criminosos do mundo inteiro e começa a ganhar notoriedade na internet e nos demais meios de comunicação.","url":"https://image.tmdb.org/t/p/w185/nhIkKuOpOXOE6ud0naCHTjRoOwq.jpg"}
        ]
    }
}