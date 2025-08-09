function startReverseTyping() {
    const input = document.getElementById("inputText").value;
    const reversed = input.split("").reverse().join("");
    const output = document.getElementById("outputText");
    output.textContent = "";

    let i = 0;
    function typeChar() {
        if (i < reversed.length) {
            output.textContent += reversed[i];
            i++;
            setTimeout(typeChar, 100);
        }
    }
    typeChar();
}

function instantReverse() {
    const input = document.getElementById("inputText").value;
    document.getElementById("outputText").textContent = input.split("").reverse().join("");
}