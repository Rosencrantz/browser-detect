/**
 * Uses CSS classNames on the HTML tag to describe user agent. CSS developers use these classNames to apply
 * CSS style that work around browser incompatibilities
 */
AJS.describeBrowser = function (userAgent) {

    userAgent = userAgent || navigator.userAgent;

    var isChrome = /chrome/.test( navigator.userAgent.toLowerCase() ),
        isSafari = !isChrome&&/safari/.test( navigator.userAgent.toLowerCase() ),
        match = jQuery.uaMatch(userAgent),
        browser = match.browser,
        version = match.version.replace(/\.0$/, ""),
        classNames = [];

    if (isChrome) {
        classNames.push("chrome");
    }

    if (isSafari) {
        classNames.push("safari");
    }


    classNames.push(browser);

    if (browser === "msie") {

        classNames.push(browser + "-" + version);

        version = parseInt(version);
        while (version > 6) {
            --version;
            classNames.push(browser + "-gt-" + version);
        }
    }

    jQuery("html").addClass(classNames.join(" "));
};
