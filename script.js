const buttonContainer = document.getElementById("buttonContainer");
    const actionButton = document.createElement("button");
    actionButton.textContent = "Виконати";
    buttonContainer.appendChild(actionButton);

    actionButton.addEventListener("click", () => {
      const input = document.getElementById("Input").value;
      const firstString = document.getElementById("firstString").value;
      const secondString = document.getElementById("secondString").value;
      const resultElement = document.getElementById("result");

      if (input.length !== 1) {
        resultElement.textContent = "Помилка: введіть лише один символ!";
        resultElement.style.color = "red";
        return;
      }

      if (firstString === "") {
        resultElement.textContent = "Помилка: рядок S1 не може бути порожнім!";
        resultElement.style.color = "red";
        return;
      }

      const stringParts = firstString.split(input);
      const modedString = stringParts.join(secondString + input);

      resultElement.textContent = "Результат: " + modedString;
      resultElement.style.color = "darkblue";
    });