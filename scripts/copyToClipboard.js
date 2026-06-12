const copyButton = document.querySelector(".copyButton");

copyButton.addEventListener('click', () => {
    const textToCopy = document.querySelector(".textToCopy").textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
});