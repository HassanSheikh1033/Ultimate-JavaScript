// CallBacks Function in JS :
function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        console.log("Script loaded with SRC: " + src)
        callback(null, src);
    }
    script.onerror = () => {
        console.log("Error loading with SRC" + src);
        callback(new Error("Src"));
    }
    document.body.appendChild(script);
}
function Hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello World!" + src)
}

function GoodMorning(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("GoodMorning!" + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", Hello);




// Asynchronous Example (Using setTimeout):
function fetchData(callback) {
    setTimeout(function () {
        const data = "Fetched data from server";
        callback(data); // Call the callback function with the fetched data
    }, 2000); // Simulating a 2-second delay for fetching data
}

function processFetchedData(data) {
    console.log("Processing data:", data);
}

fetchData(processFetchedData);
// In this example, the fetchData function simulates fetching data asynchronously. It takes a callback function as an argument and
//  calls it after the data is fetched. The processFetchedData function is passed as a callback and processes the fetched data when
//   it is available.


// Handling Asynchronous Operations (Using Callbacks):
function fetchData(callback, errorCallback) {
    // Simulating an asynchronous API call
    setTimeout(function() {
        const success = true;
        if (success) {
            const data = "Fetched data from server";
            callback(data);
        } else {
            const error = "Error fetching data";
            errorCallback(error);
        }
    }, 2000);
}

function processFetchedData(data) {
    console.log("Processing data:", data);
}

function handleFetchError(error) {
    console.error("Error:", error);
}

fetchData(processFetchedData, handleFetchError);
// In this example, the fetchData function takes two callbacks: callback for successful data retrieval and errorCallback for handling
//  errors. Depending on the success or failure of the operation, it calls the appropriate callback. Callbacks are essential for
//   handling asynchronous operations, allowing you to write non-blocking code and execute functions in a specific order, ensuring
//    that your program behaves as expected even when dealing with time-consuming tasks.

