import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss'],
})
export class HistoriasComponent {
  historias = [
    {
      titulo: 'A Cigarra e a Formiga',
      imagem: 'assets/formiga.png',
      texto: `Era uma vez uma cigarra muito alegre e que vivia festejando e cantando, sem preocupações com o futuro.
      <br><br>
      Um dia, enquanto passeava e se divertia, encontrou uma formiguinha carregando uma folha muito pesada. Intrigada, disse: "Ei, formiga! Por que está fazendo tanto esforço? Por que trabalha tanto? Não quer se divertir enquanto ainda é verão?".
      <br><br>
      A formiguinha rapidamente respondeu: "Ora cigarra, não posso! Nós formiguinhas não temos tempo para nos divertir, precisamos trabalhar agora para podermos guardar comida para o inverno!".
      <br><br>
      Dito isso, a cigarra continuou o seu passeio. Durante aquele verão, ela se divertiu muito e, quando sentia fome, apenas coletava alguns alimentos do bosque e comia. Depois disso, voltava a cantar alegremente.
      <br><br>
      Então, dias depois, viu a formiguinha novamente trabalhando: "Ei, formiguinha! Deixe de trabalhar tanto! Precisamos nos divertir! Vamos cantar um pouco!".
      <br><br>
      A formiguinha, que já estava cansada, achou a ideia muito boa e, durante aquele dia, ela e a cigarra se tornaram ótimas amigas, se divertindo muito.
      <br><br>
      Entretanto, no dia seguinte, a rainha do formigueiro não gostou nada do que viu e ordenou que a formiguinha voltasse ao trabalho. Além disso, falou para a cigarra: "Dona cigarra, se a senhora não começar a trabalhar, irá sofrer muito no inverno! Seja mais responsável e pense no futuro!".
      <br><br>
      A cigarra não compreendeu a importância do recado dado pela rainha e respondeu: "Que nada! O inverno está tão longe! Deixe para depois!".
      <br><br>
      Entretanto, alguns dias se passaram e o inverno chegou. Infelizmente, a cigarra não possuía alimentos guardados, muito menos um abrigo quentinho.
      <br><br>
      Com seu corpinho gelado e com fome, caminhou com frio até a casa da sua amiga formiguinha, onde implorou por socorro: "Por favor, formiguinhas, me deixem ficar com vocês, tenho muito frio e fome!".
      <br><br>
      A formiguinha imediatamente puxou a cigarra para dentro para salvá-la do frio. Entretanto, logo a rainha interveio e disse: "Já que nós formigas trabalhamos durante todo o verão, agora é a sua vez! Toque e cante para nós!".`,
    },
    {
      titulo: 'O Leão e o Ratinho',
      imagem: 'assets/leao.png',
      texto: `Era uma vez, há muito tempo atrás, um ratinho muito esperto e brincalhão. Um dia, enquanto fazia muito barulho e brincava, acabou incomodando o rei dos animais, o leão.
      <br><br>
      O leão acordou irritado e gritou: "Como ousa me acordar com todo esse barulho?!".
      <br><br>
      Em seguida, colocou sua pata gigante sobre o ratinho, o fazendo ficar com muito medo. Assim, o ratinho implorou: "Por favor, me perdoe! Eu não queria te incomodar e apenas estava brincando! Por favor, me deixe ir embora e um dia poderei te ajudar!".
      <br><br>
      O leão então gargalhou, dizendo: "Ha-ha-ha-ha! E como você poderia me ajudar? Logo você?! Tão pequeno!".
      <br>
      Após rir muito, o leão se acalmou e disse: "Tudo bem, pode ir! Pequeno e fraco como você é, isso não fará diferença!".
      <br><br>
      O tempo se passou e meses depois, enquanto o leão cuidava de seus afazeres, acabou ficando preso em uma armadilha! Desesperado, tentou se livrar de diversas formas, mas apenas se enrolava cada vez mais na armadilha. Para a sorte do leão, o ratinho o viu se debatendo na armadilha e prontamente começou a roer as cordas da rede que o prendia, feliz por ajudar o rei.
      <br><br>
      O leão ficou incrédulo e disse: "Me desculpe por não acreditar que você poderia me ajudar!".
      <br><br>
      Dessa forma, após sair da armadilha o leão e o rato se tornaram grandes amigos para sempre.`,
    }
  ];
}
