# Projeto 1 - Cifra de César 

### Sobre o desafio do projeto:
A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.).


### Sobre o tema:
* Pro layout eu queria algo que deixasse bem claro e organizado o espaço de cada função. 
Também optei por um texto explicativo, mas que não "entregasse" pro usuário o que está sendo feito ali.

![esboço](https://github.com/marinamassaneiro/SAP008-cipher/blob/main/Esbo%C3%A7o%20papel.jpg?raw=true)

* Tentei pensar num tema simples, mas que pudesse ter uma comunicação divertida com os usuários. 
 Serão pessoas que tem o costume de se comunicar/enviar mensagens e "felicitações" online 
 e que procuram por uma mensagem diferente do habitual, quase como um joguinho entre amigos.

* O objetivo é também utilizar o site como "meio de comunicação",
 já que é possível resolver a mensagem recebida por lá. 
 Para isso no "encode" a assinatura da mensagem vem também com o offset entre parênteses, 
 assim a pessoa que receber a mensagem coloca esse número na caixa de offset para descriptografar a mensagem recebida.

### Parte obrigatória
* Usar VanillaJS; (__OK__)

* Implementar `cipher.encode` e `cipher.decode`; (__OK__)

* Passar o linter com a configuração definida; <br>
__Não sei se entendi__

* Passar as provas unitárias; <br>
__Não sei se entendi__

* Testes unitários cobrindo 70% dos statements, functions e lines, e
no mínimo 50% das branches; (__OK__)

* Interface que: <br> 
Permita escolher o `offset` (chave de deslocamento); (__OK__) <br>
Permita escrever um texto para ser cifrado e um para ser decifrado; (__OK__) <br>
Mostre o resultado cifrado e decifrado corretamente. (__OK__) <br>

### Parte Opcional: "Hacker edition"

* Cifrar/decifrar minúsculas; (__OK__)<br>
    * Consegui de um jeito diferente do que os teste exigiam.
Fiz com a ideia de que a letra "Z" (maiúscula) pulasse para a letra "a"(minuscula). 
Depois que vi os testes alterei para ser compatível com eles, mantendo cada alfabeto no seu próprio giro.

* Cifrar/decifrar _outros_ caractéres (espaços, pontuação, `ç`, `á`, ...); <br>
    * Consegui inserir o espaço sem cifrar ou decifrar, mas os demais, 
por serem códigos espaçados entre si, não fiz. Optei por revisar alguns detalhes do projeto até aqui.

* Permitir usar `offset` negativo; <br>
    * Não cheguei até aqui.


### Objetivos de aprendizagem

#### HTML
* Uso de HTML semântico<br>

#### CSS
* Uso de seletores de CSS;
* Empregar o modelo de caixa (box model): borda, margem, preenchimento.

#### Web APIs
* Uso de seletores de DOM;
* Manipulação de eventos de DOM;
* Manipulação dinâmica de DOM.

#### JavaScript
* Tipos de dados primitivos
* Strings (cadeias de caracteres)
* Variáveis (declaração, atribuição, escopo)
* Uso de condicionais (if-else, switch, operador ternário)
* Uso de laços (for, for..of, while)
* Uso de funções (parâmetros, argumentos, valor de retorno)
* Testes unitários
* Módulos de ECMAScript (ES modules)
* Uso de linter (ESLINT)
* Uso de identificadores descritivos (Nomenclatura | Semântica)

#### Controle de Versões (Git e GitHub)
* Git: Instalação e configuração
* Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)
* GitHub: Criação de contas e repositórios, configuração de chave SSH
* GitHub: Implantação com GitHub Pages

#### user-centricity
* Desenhar a aplicação pensando e entendendo a usuária

#### product-design
* Criar protótipos para obter feedback e iterar
* Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)

