const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function webViewEngineConstruct() {
    const webViewElement = document.createElement("div");

    webViewElement.classList.add("web-view-com");
    webViewElement.id = "web-view-com";

    const styleElement = document.createElement("style");

    document.getElementById("web-view-engine").contentDocument.body.appendChild(webViewElement);
    document.getElementById("web-view-engine").contentDocument.head.appendChild(styleElement);
}

function inputTransaction(transactionMod) {
    const webViewEngine = document.getElementById("web-view-engine");

    const htmlInputElement = document.getElementById("html-input-element");
    const cssInputElement = document.getElementById("css-input-element");
    const jsInputElement = document.getElementById("js-input-element");

    switch (transactionMod) {
        case ("html"):
            webViewEngine.contentDocument.getElementById("web-view-com").innerHTML = htmlInputElement.value;
            break;
        case ("css"):
            webViewEngine.contentDocument.querySelector("style").innerHTML = cssInputElement.value;
            break;
        case ("js"):
            try {
                webViewEngine.contentWindow.eval(jsInputElement.value);
            } catch (error) {}
            break;

    }
}

function inputElementReset(inputTransaction) {
    const webViewEngine = document.getElementById("web-view-engine");

    const htmlInputElement = document.getElementById("html-input-element");
    const cssInputElement = document.getElementById("css-input-element");
    const jsInputElement = document.getElementById("js-input-element");

    switch (inputTransaction) {
        case ("html"):
            htmlInputElement.value = "";
            break;
        case ("css"):
            cssInputElement.value = "";
            break;
        case ("js"):
            jsInputElement.value = "";
            break;
    }

    webViewEngine.contentDocument.querySelector("style").innerHTML = cssInputElement.value;
    webViewEngine.contentDocument.getElementById("web-view-com").innerHTML = htmlInputElement.value;
}

function inputElementGrower(inputTransaction) {
    let htmlSubComCardWrapper = document.getElementById("html-sub-com-card-wrapper");
    let cssSubComCardWrapper = document.getElementById("css-sub-com-card-wrapper");
    let jsSubComCardWrapper = document.getElementById("js-sub-com-card-wrapper");

    switch (inputTransaction) {
        case ("html"):
            htmlSubComCardWrapper.style.height = "5px";
            htmlSubComCardWrapper.style.height = (htmlSubComCardWrapper.scrollHeight) + "px";
            break;
        case ("css"):
            cssSubComCardWrapper.style.height = "5px";
            cssSubComCardWrapper.style.height = (cssSubComCardWrapper.scrollHeight) + "px";
            break;
        case ("js"):
            jsSubComCardWrapper.style.height = "5px";
            jsSubComCardWrapper.style.height = (jsSubComCardWrapper.scrollHeight) + "px";
            break;
    }
}