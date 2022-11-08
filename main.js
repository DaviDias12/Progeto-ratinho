let audios = [
  {caminho:'Audio/projeto_ratinho_audios_grito.mp3', legenda:'GRITO'},
  {caminho:'Audio/projeto_ratinho_audios_jesus.mp3', legenda:'Jesus'},
  {caminho:'Audio/projeto_ratinho_audios_nao-e-o-pai.mp3', legenda:'Ele não é o pai'},
  {caminho:'Audio/projeto_ratinho_audios_pare.mp3', legenda:'PARE'},
  {caminho:'Audio/projeto_ratinho_audios_que-isso-meu-filho.mp3', legenda:'Que isso meu fio'},
  {caminho:'Audio/projeto_ratinho_audios_ratinhoo.mp3', legenda:'RATINHO'},
  {caminho:'Audio/projeto_ratinho_audios_uepa.mp3', legenda:'UEPA'},
  {caminho:'Audio/projeto_ratinho_audios_vixi-ratinho.mp3', legenda:'VIXI'},
  {caminho:'Audio/projeto_ratinho_audios_xaropinho.mp3', legenda:'Xaropinho'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
  legendas[i].textContent = audios[i].legenda;
  botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
      let som = audios[botao.getAttribute('data-item')];
      audioTag.setAttribute('src', som.caminho);
      
      audioTag.addEventListener('loadeddata', () => {
          audioTag.play();
      });
  });
});