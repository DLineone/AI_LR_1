let toTestButton = document.querySelector(".toTestButton");
let toInsertButton = document.querySelector(".toInsertButton");
let test = document.querySelector(".test");
let insert = document.querySelector(".insert");

toTestButton.onclick = function()
{
    test.style = "display: ;";
    insert.style = "display: none;";
}

toInsertButton.onclick = function()
{
    test.style = "display: none;";
    insert.style = "display: ;";
}

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
]