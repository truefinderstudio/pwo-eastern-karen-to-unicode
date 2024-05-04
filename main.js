// main.js
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('checkbox');
    const convertButton = document.getElementById('convertButton');
    const copyButton = document.getElementById('copyButton');

    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme', this.checked);
    });

    convertButton.addEventListener('click', function() {
        var inputText = document.getElementById('input').value;
        var ncrText = unicodeToNCR(inputText); // Call from converter.js
        var convertedText = convertText(ncrText); // Call from converter.js
        var outputText = NCRToUnicode(convertedText); // Call from converter.js
        document.getElementById('output').value = outputText;
    });

    copyButton.addEventListener('click', function() {
        var outputText = document.getElementById('output');
        outputText.select();
        document.execCommand('copy');
        alert('Text copied to clipboard!');
    });
});
