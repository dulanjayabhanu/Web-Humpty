const tagHierarchy = [
    { name: "a", bodyContent: "scriptless" },
    { name: "abbr", bodyContent: "scriptless" },
    { name: "address", bodyContent: "scriptless" },
    { name: "area", bodyContent: "empty" },
    { name: "article", bodyContent: "scriptless" },
    { name: "aside", bodyContent: "scriptless" },
    { name: "audio", bodyContent: "scriptless" },
    { name: "b", bodyContent: "scriptless" },
    { name: "base", bodyContent: "empty" },
    { name: "bdi", bodyContent: "scriptless" },
    { name: "bdo", bodyContent: "scriptless" },
    { name: "blockquote", bodyContent: "scriptless" },
    { name: "body", bodyContent: "scriptless" },
    { name: "br", bodyContent: "empty" },
    { name: "button", bodyContent: "scriptless" },
    { name: "canvas", bodyContent: "scriptless" },
    { name: "caption", bodyContent: "scriptless" },
    { name: "cite", bodyContent: "scriptless" },
    { name: "code", bodyContent: "scriptless" },
    { name: "col", bodyContent: "empty" },
    { name: "colgroup", bodyContent: "scriptless" },
    { name: "data", bodyContent: "scriptless" },
    { name: "datalist", bodyContent: "scriptless" },
    { name: "dd", bodyContent: "scriptless" },
    { name: "del", bodyContent: "scriptless" },
    { name: "details", bodyContent: "scriptless" },
    { name: "dfn", bodyContent: "scriptless" },
    { name: "dialog", bodyContent: "scriptless" },
    { name: "div", bodyContent: "scriptless" },
    { name: "dl", bodyContent: "scriptless" },
    { name: "dt", bodyContent: "scriptless" },
    { name: "em", bodyContent: "scriptless" },
    { name: "embed", bodyContent: "empty" },
    { name: "fieldset", bodyContent: "scriptless" },
    { name: "figcaption", bodyContent: "scriptless" },
    { name: "figure", bodyContent: "scriptless" },
    { name: "footer", bodyContent: "scriptless" },
    { name: "form", bodyContent: "scriptless" },
    { name: "h1", bodyContent: "scriptless" },
    { name: "h2", bodyContent: "scriptless" },
    { name: "h3", bodyContent: "scriptless" },
    { name: "h4", bodyContent: "scriptless" },
    { name: "h5", bodyContent: "scriptless" },
    { name: "h6", bodyContent: "scriptless" },
    { name: "head", bodyContent: "scriptless" },
    { name: "header", bodyContent: "scriptless" },
    { name: "hgroup", bodyContent: "scriptless" },
    { name: "hr", bodyContent: "empty" },
    { name: "html", bodyContent: "scriptless" },
    { name: "i", bodyContent: "scriptless" },
    { name: "iframe", bodyContent: "scriptless" },
    { name: "img", bodyContent: "empty" },
    { name: "input", bodyContent: "empty" },
    { name: "ins", bodyContent: "scriptless" },
    { name: "kbd", bodyContent: "scriptless" },
    { name: "label", bodyContent: "scriptless" },
    { name: "legend", bodyContent: "scriptless" },
    { name: "li", bodyContent: "scriptless" },
    { name: "link", bodyContent: "empty" },
    { name: "main", bodyContent: "scriptless" },
    { name: "map", bodyContent: "scriptless" },
    { name: "mark", bodyContent: "scriptless" },
    { name: "meta", bodyContent: "empty" },
    { name: "meter", bodyContent: "scriptless" },
    { name: "nav", bodyContent: "scriptless" },
    { name: "noscript", bodyContent: "scriptless" },
    { name: "object", bodyContent: "scriptless" },
    { name: "ol", bodyContent: "scriptless" },
    { name: "optgroup", bodyContent: "scriptless" },
    { name: "option", bodyContent: "scriptless" },
    { name: "output", bodyContent: "scriptless" },
    { name: "p", bodyContent: "scriptless" },
    { name: "param", bodyContent: "empty" },
    { name: "picture", bodyContent: "scriptless" },
    { name: "pre", bodyContent: "scriptless" },
    { name: "progress", bodyContent: "scriptless" },
    { name: "q", bodyContent: "scriptless" },
    { name: "rb", bodyContent: "scriptless" },
    { name: "rp", bodyContent: "scriptless" },
    { name: "rt", bodyContent: "scriptless" },
    { name: "rtc", bodyContent: "scriptless" },
    { name: "ruby", bodyContent: "scriptless" },
    { name: "s", bodyContent: "scriptless" },
    { name: "samp", bodyContent: "scriptless" },
    { name: "script", bodyContent: "scriptless" },
    { name: "section", bodyContent: "scriptless" },
    { name: "select", bodyContent: "scriptless" },
    { name: "small", bodyContent: "scriptless" },
    { name: "source", bodyContent: "empty" },
    { name: "span", bodyContent: "scriptless" },
    { name: "strong", bodyContent: "scriptless" },
    { name: "style", bodyContent: "scriptless" },
    { name: "sub", bodyContent: "scriptless" },
    { name: "summary", bodyContent: "scriptless" },
    { name: "sup", bodyContent: "scriptless" },
    { name: "svg", bodyContent: "scriptless" },
    { name: "table", bodyContent: "scriptless" },
    { name: "tbody", bodyContent: "scriptless" },
    { name: "td", bodyContent: "scriptless" },
    { name: "template", bodyContent: "scriptless" },
    { name: "textarea", bodyContent: "scriptless" },
    { name: "tfoot", bodyContent: "scriptless" },
    { name: "th", bodyContent: "scriptless" },
    { name: "thead", bodyContent: "scriptless" },
    { name: "time", bodyContent: "scriptless" },
    { name: "title", bodyContent: "scriptless" },
    { name: "tr", bodyContent: "scriptless" },
    { name: "track", bodyContent: "empty" },
    { name: "u", bodyContent: "scriptless" },
    { name: "ul", bodyContent: "scriptless" },
    { name: "var", bodyContent: "scriptless" },
    { name: "video", bodyContent: "scriptless" },
    { name: "wbr", bodyContent: "empty" }
];

const htmlInputElement = document.getElementById("html-input-element");
const cssInputElement = document.getElementById("css-input-element");
const jsInputElement = document.getElementById("js-input-element");

function closeTagWriter() {
    const fragmentArray = htmlInputElement.value.split(" ");

    let trackingToken;
    let finalKeyToken;
    let matchingKeyArray = [];

    if (fragmentArray.length <= 2) {
        trackingToken = fragmentArray[fragmentArray.length - 1];
    } else {
        trackingToken = fragmentArray[fragmentArray.length - 2];
    }

    for (let x = 0; x < tagHierarchy.length; x++) {
        if (trackingToken.includes(tagHierarchy[x].name)) {
            matchingKeyArray.push(tagHierarchy[x]);
        }
    }

    for (let y = 0; y < matchingKeyArray.length; y++) {
        if (trackingToken === matchingKeyArray[y].name) {
            finalKeyToken = matchingKeyArray[y];
            break;
        } else {
            if (y == (matchingKeyArray.length - 1)) {
                finalKeyToken = matchingKeyArray[y];
            }
        }
    }

    let finalContent = "";

    for (let z = 0; z < fragmentArray.length; z++) {

        if (z == (fragmentArray.length - 1)) {
            let valiedTag;

            if (finalKeyToken.bodyContent === "scriptless") {
                valiedTag = "<" + finalKeyToken.name + ">" + "</" + finalKeyToken.name + ">";
            } else if (finalKeyToken.bodyContent === "empty") {
                valiedTag = "<" + finalKeyToken.name + "/>";
            }

            finalContent += valiedTag;
        } else {
            if (z == 0) {
                finalContent += fragmentArray[z];
            } else {
                finalContent += " " + fragmentArray[z];
            }
        }
    }

    htmlInputElement.value = finalContent;
}

htmlInputElement.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === " ") {
        closeTagWriter();
    } else if (event.key === "Tab") {
        tabKeyBehaviourOverride(event, "html");
    }
});

cssInputElement.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        tabKeyBehaviourOverride(event, "css");
    }
});

jsInputElement.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        tabKeyBehaviourOverride(event, "js");
    }
});

function tabKeyBehaviourOverride(event, inputTransaction) {
    switch (inputTransaction) {
        case ("html"):
            htmlInputElement.value = htmlInputElement.value + "    ";
            break;
        case ("css"):
            cssInputElement.value = cssInputElement.value + "    ";
            break;
        case ("js"):
            jsInputElement.value = jsInputElement.value + "    ";
            break;
    }
    event.preventDefault();
    event.stopPropagation();
}

let appContent;
let isFlushed = false;

window.onresize = () => {
    if (window.innerWidth < 992) {
        if (!isFlushed) {
            isFlushed = true;
            console.log(document.getElementById("app-content").innerHTML);
            appContent = document.getElementById("app-content").innerHTML;
            document.getElementById("app-content").innerHTML = "";
        }
    } else {
        if (isFlushed) {
            isFlushed = false;
            document.getElementById("app-content").innerHTML = appContent;
            appContent = "";
        }
    }
};