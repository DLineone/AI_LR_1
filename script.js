let toTestButton = document.querySelector(".toTestButton");
let toInsertButton = document.querySelector(".toInsertButton");
let test = document.querySelector(".test");
let insert = document.querySelector(".insert");
let testContent = document.querySelector(".test-content");
let insertContent = document.querySelector(".insert-content");

let Nsymptoms = 16;
let Nillnes = 4;

let symptoms = [
    "Общее недомогание", 
    "Сухость, першение", 
    "Кашель сначала сухой, затем мокрый", 
    "Голос хриплый или беззвучный", 
    "Иногда боль при глотании", 
    "Головная боль", 
    "Повышенная температура тела", 
    "Быстрая утомляемость гортани", 
    "Периодический кашель с мокротой", 
    "Охриплость с афонией", 
    "Ощущение дискомфорта в гортани", 
    "Жжение в горле", 
    "Кашель при обострении", 
    "Сухой кашель", 
    "Слизистая покрыта густой слизью", 
    "Откашливание с прожилками крови"
];

let illnes = [
    "Ларингит острый",
    "Ларингит хронический катаральный",
    "Ларингит хронический гипертрофический",
    "Ларингит хронический атрофический"
];

let diagnoses = [
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
];

InitTest();

toTestButton.onclick = function()
{
    toTest();
}

function toTest()
{
    test.style = "display: ;";
    insert.style = "display: none;";
    InitTest();
}

toInsertButton.onclick = function()
{
    toInsert();
}

function toInsert()
{
    test.style = "display: none;";
    insert.style = "display: ;";
}


function InitTest()
{
    testContent.innerHTML = `<button class = "init-test">Start test</button>`;
    let initTestButton = document.querySelector(".init-test");
    let iterator = 0;
    let ansver = [];
    initTestButton.onclick = function () {revealTestIterable(iterator, ansver);};
}

function revealTestIterable(iterator, ansver)
{
    testContent.innerHTML = `<div class="question">У вас присутствует "${symptoms[iterator]}"?</div>
        <div class="ansver">
            <button class="yes">Да</button>
            <button class="no">Нет</button>
        </div>`;
        let buttonYes = document.querySelector(".yes");
        let buttonNo = document.querySelector(".no");

        buttonYes.onclick = function (){
            ansver.push(1);
            iterator++;
            console.log(ansver);
            if(iterator < Nsymptoms) revealTestIterable(iterator, ansver);
            else showAnsver(ansver);
        }

        buttonNo.onclick = function (){
            ansver.push(0);
            iterator++;
            console.log(ansver);
            if(iterator < Nsymptoms) revealTestIterable(iterator, ansver);
            else showAnsver(ansver);
        }
}

function showAnsver(ansver)
{
    let nIlnes = -1;
    let compareAnsver = [];
    for(let i = 0; i < Nillnes; i++)
    {
        compareAnsver = [];
        for(let j = 0; j < Nsymptoms; j++)
        {
            compareAnsver.push(diagnoses[j][i]);
        }

        if(compareAnsver.join() === ansver.join())
        {
            nIlnes = i;
            break;
        }
    }

    console.log(compareAnsver.join());
    console.log(ansver.join());
    console.log(nIlnes);
    if(nIlnes >= 0)
    {
        testContent.innerHTML = `<p style = " text-align: center">Ваше заболевание "${illnes[nIlnes]}"! <br>Поздравляем!</p>`;
    }
    else
    {
        testContent.innerHTML = `<p style = " text-align: center">Такого заборевания нету( <br>Может хотите его описать?</p>
            <button class="toInsertButtonAns">Заполнение базы знаний</button>`;
        let toInsertButtonAns = document.querySelector(".toInsertButtonAns");
        toInsertButtonAns.onclick = function () {toInsert()};
    }
}