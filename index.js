const textElements = {
    userAgent: document.getElementById('userAgent'),
    platform: document.getElementById('platform'),
    appVersion: document.getElementById('appVersion'),
    vendor: document.getElementById('vendor'),
    product: document.getElementById('product'),

    language: document.getElementById('language'),
    languages: document.getElementById('languages'),
    timeZone: document.getElementById('timeZone'),

    hardwareConcurrency: document.getElementById('hardwareConcurrency'),
    deviceMemory: document.getElementById('deviceMemory'),
    uadPlatform: document.getElementById('useragentdata?platform'),
    uadBrands: document.getElementById('useragentdata?brands'),
    uadMobile: document.getElementById('useragentdata?mobile'),

    screenWidth: document.getElementById('screenWidth'),
    screenHeight: document.getElementById('screenHeight'),
    availWidth: document.getElementById('availWidth'),
    availHeight: document.getElementById('availHeight'),
    colorDepth: document.getElementById('colorDepth'),
    pixelDepth: document.getElementById('pixelDepth'),
    monitorOrientation: document.getElementById('orientation'),
}

document.addEventListener('DOMContentLoaded', function() {
    textElements.userAgent.textContent = "ur browser: " + (navigator.userAgent || "idk");
    textElements.platform.textContent = "wat platform r u on: " + (navigator.platform || "idk");
    textElements.appVersion.textContent = "ap verszion: " + (navigator.appVersion || "idk");
    textElements.vendor.textContent = "vendoor: " + (navigator.vendor || "idk");
    textElements.product.textContent = "product: " + (navigator.product || "idk");

    textElements.language.textContent = "goo goo ga ga: " + (navigator.language || "idk");
    textElements.languages.textContent = "goo goo ga ga(s): " + (navigator.languages || "idk");
    textElements.timeZone.textContent = "time lines: " + (Intl.DateTimeFormat().resolvedOptions().timeZone || "idk");

    textElements.hardwareConcurrency.textContent = "fried cpu cores: " + (navigator.hardwareConcurrency || "idk");
    textElements.deviceMemory.textContent = "goldfish memory: " + (navigator.deviceMemory || "idk");
    textElements.uadPlatform.textContent = "windows, mac or linux: " + (navigator.userAgentData?.platform || "idk");
    textElements.uadBrands.textContent = "greedy company: " + (toString(navigator.userAgentData?.brands) || "idk");
    textElements.uadMobile.textContent = "phoner? " + (toString(navigator.userAgentData?.mobile) || "idk");

    textElements.screenWidth.textContent = "wiiiide amount: " + (screen.width || "idk");
    textElements.screenHeight.textContent = "tol amount: " + (screen.height || "idk");
    textElements.availWidth.textContent = "actual widddddde: " + (screen.availWidth || "idk");
    textElements.availHeight.textContent = "actual tol: " + (screen.availHeight || "idk");
    textElements.colorDepth.textContent = "mor vibrant colrs (or somthin): " + (screen.colorDepth || "idk");
    textElements.pixelDepth.textContent = "mor vibrant colrs (but different): " + (screen.pixelDepth || "idk");
    textElements.monitorOrientation.textContent = "screen twister: " + (screen.orientation?.type || "idk");
});