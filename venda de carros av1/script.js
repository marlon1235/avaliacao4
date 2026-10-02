```javascript
// Pega o botão do Dark Mode
const botaoDark = document.getElementById("darkMode");


// Quando clicar no botão
botaoDark.addEventListener("click", function () {

    // Ativa ou desativa o modo escuro
    document.body.classList.toggle("dark");


    // Altera o texto do botão
    if (document.body.classList.contains("dark")) {

        botaoDark.innerHTML = "☀️ Light Mode";

    } else {

        botaoDark.innerHTML = "🌙 Dark Mode";

    }

});
```
