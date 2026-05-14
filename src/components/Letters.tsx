import { useState } from "react";
import { HeartIcon } from "./HeartIcon";

// TODO: Substitua pelos textos que você já escreveu para ela
const letters = [
  {
    title: "O PEDIDO",
    body: `meu lindo, você merece textinhos todo dia.e eu vou fazer!

sou tão sortuda por ter vc na minha vida. eu agradeço muito a Deus por você estar na minha vida!!

como eu disse no outro texto, eu sofri muito já, se quiser eu te explico o por que, e assim cara, você me ajuda tanto !! você está me ajudando muito a tão pouco tempo!!

e eu te amo muito já. nunca amei uma pessoa desse jeito. eu não consigo nem falar o quanto eu amo você. eu só consigo dizer, "eu te amo".

Algumas pessoas entram nas nossas vidas de surpresa. Você entrou na minha num momento em que eu não estava esperando nada. Mas, depois de ter entrado, me fez pensar em como aguentei viver tanto tempo sem você.

Nunca pensei que me apaixonaria tão rapidamente por alguém quanto me apaixonei por você. É difícil até de explicar, sinto que faltam palavras que possam transmitir tudo o que você tem me feito sentir!

obrigada por tudo amor!! 🤍.

Aceita namorar comigo?`,
  },
  {
    title: "Sua primeira declaração de amor",
    body:`Desde que você entrou na minha vida, tudo se tornou melhor, tudo o que eu preciso eu encontrei em você. De repente até um pouco mais que isso.

palavras não são suficiente pra dizer o quanto eu te amo. eu descobri em pouco tempo, que amar alguém verdadeiramente é possível. Tudo que eu precisava aprender, foi você que me ensinou!.

eu percebo agora que nada faz sentido sem você…Não sei dizer se é coincidência se apaixonar pela mesma pessoa todo dia, toda hora, todo minuto, mas sei dizer que você mudou a minha vida.

Eu te amo muito mais do que vc pode compreender. você ilumina minha vida, me trás segurança e conforto. você é o amor que eu sempre procurei e hoje sou grata por ter você na minha vida.

Você é muito mais que suficiente pra mim! eu vou sempre te amar meu amor! 🤍.`,

  },
  {
    title: "Textinho de natal (A gente ia se  ver nesse dia)",
    body: `oii meu amor!! 
quero agradecer por tudo que vc já fez por mim!! 
quero que vc saiba que pode contar cmg para sempre!.
bom, eu queria te dizer que esses dois meses que passamos juntos, foram os melhores meses da minha vida!
u quero que vc saiba que você tem um lugar no
meu coração, que ninguém pode competir. 
eu realmente gostaria de descrever a pessoa que você é, a importância que vc tem pra mim, mais sinto que todas as palavras do mundo não são suficiente pra descrever sua
perfeição. 
você foi e é o melhor presente que Deus poderia ter me
dado, e saber que tenho você, me dá forças pra enfrentar todos os
obstáculos sem medo. 
vc entrou na minha vida em um momento que eu não estava esperando ninguém!
olhar pra você me faz sentir que realmente encontrei a felicidade.
tem dias que eu não quero nem levantar da cama ou até mesmo acordar mas vc me dá força e ânimo pra progredir todos os dias!
vc me fez perceber que eu não preciso passar por dificuldades sozinha!
eu até falaria que te daria o mundo, mas, tem muitas garotas lindas KKKKKKKKK
tudo fica melhor quando converso com você!!.
querer estar com vc em todos os seus momentos sejam eles bons ou ruins!.
querer viver toda a minha vida com você!
eu tô aqui com você! mesmo não estando totalmente! estive ontem, estou hoje, estarei amanhã e até quando você quiser, cuidando e amando você a cada batia do meu coração. 
Vai ser pra sempre nós 2! e claro! logo logo nós 4!
eu poderia passar anos falando do tanto que eu amo vc!
eu quero que vc saiba que vc me dá muito orgulho! vc merece tudo de bom na sua vida meu amor!
eu amo seu sorriso!
eu amo seu olhar!
eu amo seu cabelo!
eu amo seu corpo!
eu amo sua personalidade!
eu amo sua risada!
eu amo seu jeitinho!
eu amo suas brincadeiras!
eu amo vc todinho 🥹🫶🏻.
esse é só o começo da nossa história de amor meu lindo!
feliz 2 meses para a gente amor!
eu amo muito vc meu garoto 🤍!.`,
  },
  {
    title: "Esse textinho foi a primeira coisa que fez no dia",
    body:`meu amor, a cada dia que passa, sinto que meu amor por você só cresce.

Você é a luz que ilumina meus dias, a razão do meu sorriso. Mal posso esperar para estarmos juntos novamente, para poder te abraçar e te encher de todo o amor que sinto.

Você é a pessoa mais incrível que já conheci, e ter você ao meu lado me faz a pessoa mais feliz do mundo. Te amo mais do que tudo nesse mundo, e meu coração está sempre com você, batendo no mesmo compasso do seu.

Você é o meu amor verdadeiro, e nada pode mudar isso. Estarei aqu. Te amo além das palavras gatinho 🤍!`

     },
     {
       title: "Feliz 15 anos, meu amor!",
       body: `Parabéns pelos seus 15 anos, meu amor!

Hoje é um dia especial, e eu quero te dizer o quanto estou feliz por fazer parte da sua vida. Você é incrível, linda, e merece tudo de bom.

Te amo muito!`,
     },
   ];

   export const Letters = () => {
     const [showingLetter, setShowingLetter] = useState<'first' | null>(null);

     const birthdayIndex = letters.length - 1; // last one
     const firstIndex = 0; // first one

     if (showingLetter === 'first') {
       return (
         <section className="py-24 px-6 bg-background">
           <div className="max-w-2xl mx-auto">
             <article className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft animate-fade-up">
               <div className="flex items-center gap-3 mb-4">
                 <button
                   onClick={() => setShowingLetter(null)}
                   className="text-primary hover:text-primary/80 transition-colors"
                   aria-label="Voltar"
                 >
                   ←
                 </button>
                 <HeartIcon className="w-5 h-5 text-primary" />
                 <h3 className="text-2xl md:text-3xl text-foreground">
                   {letters[firstIndex].title}
                 </h3>
               </div>
               <p className="text-foreground/80 leading-relaxed text-lg italic font-light whitespace-pre-line">
                 {letters[firstIndex].body}
               </p>
             </article>
           </div>
         </section>
       );
     }

     return (
       <section className="py-24 px-6 bg-background">
       <div className="max-w-2xl mx-auto">
         <div className="text-center mb-16 animate-fade-up">
           <p className="font-script text-2xl text-primary mb-2">
             Meus textinhos favoritos
           </p>
           <h2 className="text-4xl md:text-5xl text-foreground">
             Os textinhos mais lindos que você já me mandou
           </h2>
           <p className="text-xl md:text-2xl text-foreground/70 mt-4 italic">
             Amor, cada texto aqui está exatamente igual aos que você mandou(até os erros de escritas), eu quis deixar assim de próposito porque queria manter a originalidade ksks
           </p>
           <div className="flex justify-center mt-6">
             <div className="h-px w-24 bg-gradient-gold" />
           </div>
         </div>

         <div className="space-y-12">
           {letters.map((l, i) => (
             <article
               key={i}
               className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft animate-fade-up"
             >
               <div className="flex items-center gap-3 mb-4">
                 <HeartIcon className="w-5 h-5 text-primary" />
                 <h3 className="text-2xl md:text-3xl text-foreground flex-1">
                   {l.title}
                 </h3>
                 {i === birthdayIndex && (
                   <button
                     onClick={() => setShowingLetter('first')}
                     className="ml-auto text-primary hover:text-primary/80 transition-colors"
                     aria-label="Próximo texto"
                   >
                     →
                   </button>
                 )}
               </div>
               <p className="text-foreground/80 leading-relaxed text-lg italic font-light whitespace-pre-line">
                 {l.body}
               </p>
             </article>
           ))}
         </div>
       </div>
     </section>
   );
 }