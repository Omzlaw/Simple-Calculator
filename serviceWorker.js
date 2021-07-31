if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(err => {
        console.log("SW Registration failed!");
        console.log(err);
    })
} else {
    console.log('Service worker not supported');
}