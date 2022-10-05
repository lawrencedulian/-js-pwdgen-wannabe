// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// DATA
// ASKING USER NAME
let userName = prompt("Come ti chiami?");
console.log(userName, typeof userName);

// ASKING USER SURNAME
let userSurname = prompt("Qual'è il tuo cognome?");
console.log(userSurname, typeof userSurname);

// ASKING FAVOURITE COLOR
let userFavColor = prompt("Qual'è il tuo colore preferito?");
console.log(userFavColor, typeof userFavColor);

// DATA PROCESSING
let passwordgenerator = userName + userSurname + userFavColor + 21;
console.log(passwordgenerator);

// PREPARING OUTPUT PHRASE
let passwordresult = `Ciao! La tua password sicura è ${passwordgenerator}`;

// OUTPUT
document.getElementById("passwordresult").innerHTML = passwordresult;