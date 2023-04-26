const tittle = document.querySelector('h1');
const b = document.querySelector('.tittle-dettail');

function changedTittle(text, seconds) {
    setTimeout(() => {
        tittle.innerHTML = text;
    }, 3000 * seconds);
}

function changedTittleDettail(text, seconds) {
    setTimeout(() => {
        b.innerHTML = text;
    }, 3000 * seconds);
}

for (let i = 1; i < 100; i++) {
    changedTittle('Tudo sobre', i);
    changedTittleDettail('Tecnologia',i);
    i++;
    changedTittle('Tendências do mundo', i);
    changedTittleDettail('Tech',i);
    i++;
    changedTittle('Inovações', i);
    changedTittleDettail('em Alta',i);
    i++;
    changedTittle('Conteúdos', i);
    changedTittleDettail('para Você',i);
    i++;
}