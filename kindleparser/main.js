const endOfLine = "\n";
const kindleNoteDelimiter = "==========" + endOfLine;
const titlePrefix = endOfLine + "# ";
const titleSuffix = endOfLine + endOfLine;

let convertButton = document.getElementById('convertButton');
let copyButton = document.getElementById('copyButton');
let inputContent = document.getElementById('inputContent');
let outputContent = document.getElementById('outputContent');
let outputContentHtmlWrapper = document.getElementById('outputContentHtmlWrapper');
let outputContentHtml = document.getElementById('outputContentHtml');

// test only
// fetch('sample.txt')
//     .then(response => response.text())
//     .then(data => {
//         inputContent.value = data;
//     })

convertButton.addEventListener("click", () => {
    let outputContentMarkdown = parseMyClippings(inputContent.value);
    outputContent.value = outputContentMarkdown;
    outputContentHtml.innerHTML = marked(outputContentMarkdown);
    outputContentHtmlWrapper.style.visibility = "visible";
});

copyButton.addEventListener("click", () => {
    window.prompt("Press Ctrl+C / Cmd+C to copy to the clipboard", outputContent.value);
})

function parseMyClippings(inputContent) {
    // read into map of sets
    let organisedNotesMap = new Map();
    inputContent.split(kindleNoteDelimiter).forEach(note => {
        let lines = note.split(endOfLine);
        let title = lines[0].trim();
        if (title.length > 1) {
            let body = lines.slice(2).join(endOfLine);
            if (!organisedNotesMap.has(title)) {
                organisedNotesMap.set(title, new Set());
            }
            let bodyTrimmed = trimNewLinesSpacesDots(body) + '.';
            bodyTrimmed = bodyTrimmed.charAt(0).toUpperCase() + bodyTrimmed.slice(1)
            organisedNotesMap.get(title).add(bodyTrimmed);
        }
    });

    let stringOutput = '';
    organisedNotesMap.forEach((bodySet, title) => {
        stringOutput += titlePrefix + title + titleSuffix;
        bodySet.forEach(bodyEntry => stringOutput += bodyEntry + endOfLine + endOfLine)
    });
    
    return stringOutput;
}

function trimNewLinesSpacesDots(content)
{
    return content
        // starting
        .replace(/([\.\r\n]+)$/, "")
        .replace(/([\.\n]+)$/, "")
        // ending
        .replace(/(^[\.\r\n]+)/, "")
        .replace(/(^[\.\n]+)/, "")
        .trim();
}
