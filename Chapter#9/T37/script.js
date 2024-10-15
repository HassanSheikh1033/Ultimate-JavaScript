// CallBack Function :
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
        sendEmergencyMessageToCeo();
        return;
    }
    alert("GoodMorning!" + src);
}

// CallBack Hell & Pyramid of Doom :
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function GoodMorning(error, src) {
    if (error) {
        console.log(error);
        sendEmergencyMessageToCeo();
        return;
    }
    alert("GoodMorning!" + src);
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap2.bundle.min.js", function GoodMorning(error, src) {
        if (error) {
            console.log(error);
            sendEmergencyMessageToCeo();
            return;
        }
        alert("GoodMorning!" + src);
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js", function GoodMorning(error, src) {
            if (error) {
                console.log(error);
                sendEmergencyMessageToCeo();
                return;
            }
            alert("GoodMorning!" + src);
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js", function GoodMorning(error, src) {
                if (error) {
                    console.log(error);
                    sendEmergencyMessageToCeo();
                    return;
                }
                alert("GoodMorning!" + src);
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap5.bundle.min.js", function GoodMorning(error, src) {
                    if (error) {
                        console.log(error);
                        sendEmergencyMessageToCeo();
                        return;
                    }
                    alert("GoodMorning!" + src);
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap6.bundle.min.js", function GoodMorning(error, src) {
                        if (error) {
                            console.log(error);
                            sendEmergencyMessageToCeo();
                            return;
                        }
                        alert("GoodMorning!" + src);

                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap7.bundle.min.js", function GoodMorning(error, src) {
                            if (error) {
                                console.log(error);
                                sendEmergencyMessageToCeo();
                                return;
                            }
                            alert("GoodMorning!" + src);
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap8.bundle.min.js", function GoodMorning(error, src) {
                                if (error) {
                                    console.log(error);
                                    sendEmergencyMessageToCeo();
                                    return;
                                }
                                alert("GoodMorning!" + src);
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap9.bundle.min.js", function GoodMorning(error, src) {
                                    if (error) {
                                        console.log(error);
                                        sendEmergencyMessageToCeo();
                                        return;
                                    }
                                    alert("GoodMorning!" + src);
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap10.bundle.min.js", function GoodMorning(error, src) {
                                        if (error) {
                                            console.log(error);
                                            sendEmergencyMessageToCeo();
                                            return;
                                        }
                                        alert("GoodMorning!" + src);
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap11.bundle.min.js", function GoodMorning(error, src) {
                                            if (error) {
                                                console.log(error);
                                                sendEmergencyMessageToCeo();
                                                return;
                                            }
                                            alert("GoodMorning!" + src);
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap12.bundle.min.js", function GoodMorning(error, src) {
                                                if (error) {
                                                    console.log(error);
                                                    sendEmergencyMessageToCeo();
                                                    return;
                                                }
                                                alert("GoodMorning!" + src);
                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap13.bundle.min.js", function GoodMorning(error, src) {
                                                    if (error) {
                                                        console.log(error);
                                                        sendEmergencyMessageToCeo();
                                                        return;
                                                    }
                                                    alert("GoodMorning!" + src);
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap14.bundle.min.js", function GoodMorning(error, src) {
                                                        if (error) {
                                                            console.log(error);
                                                            sendEmergencyMessageToCeo();
                                                            return;
                                                        }
                                                        alert("GoodMorning!" + src);
                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap15.bundle.min.js", function GoodMorning(error, src) {
                                                            if (error) {
                                                                console.log(error);
                                                                sendEmergencyMessageToCeo();
                                                                return;
                                                            }
                                                            alert("GoodMorning!" + src);
                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap16.bundle.min.js", function GoodMorning(error, src) {
                                                                if (error) {
                                                                    console.log(error);
                                                                    sendEmergencyMessageToCeo();
                                                                    return;
                                                                }
                                                                alert("GoodMorning!" + src);
                                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap17.bundle.min.js", function GoodMorning(error, src) {
                                                                    if (error) {
                                                                        console.log(error);
                                                                        sendEmergencyMessageToCeo();
                                                                        return;
                                                                    }
                                                                    alert("GoodMorning!" + src);
                                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap18.bundle.min.js", function GoodMorning(error, src) {
                                                                        if (error) {
                                                                            console.log(error);
                                                                            sendEmergencyMessageToCeo();
                                                                            return;
                                                                        }
                                                                        alert("GoodMorning!" + src);
                                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap19.bundle.min.js", function GoodMorning(error, src) {
                                                                            if (error) {
                                                                                console.log(error);
                                                                                sendEmergencyMessageToCeo();
                                                                                return;
                                                                            }
                                                                            alert("GoodMorning!" + src);
                                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap20.bundle.min.js", function GoodMorning(error, src) {
                                                                                if (error) {
                                                                                    console.log(error);
                                                                                    sendEmergencyMessageToCeo();
                                                                                    return;
                                                                                }
                                                                                alert("GoodMorning!" + src);
                                                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap21.bundle.min.js", function GoodMorning(error, src) {
                                                                                    if (error) {
                                                                                        console.log(error);
                                                                                        sendEmergencyMessageToCeo();
                                                                                        return;
                                                                                    }
                                                                                    alert("GoodMorning!" + src);
                                                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap22.bundle.min.js", function GoodMorning(error, src) {
                                                                                        if (error) {
                                                                                            console.log(error);
                                                                                            sendEmergencyMessageToCeo();
                                                                                            return;
                                                                                        }
                                                                                        alert("GoodMorning!" + src);
                                                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap23.bundle.min.js", function GoodMorning(error, src) {
                                                                                            if (error) {
                                                                                                console.log(error);
                                                                                                sendEmergencyMessageToCeo();
                                                                                                return;
                                                                                            }
                                                                                            alert("GoodMorning!" + src);
                                                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap24.bundle.min.js", function GoodMorning(error, src) {
                                                                                                if (error) {
                                                                                                    console.log(error);
                                                                                                    sendEmergencyMessageToCeo();
                                                                                                    return;
                                                                                                }
                                                                                                alert("GoodMorning!" + src);
                                                                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap25.bundle.min.js", function GoodMorning(error, src) {
                                                                                                    if (error) {
                                                                                                        console.log(error);
                                                                                                        sendEmergencyMessageToCeo();
                                                                                                        return;
                                                                                                    }
                                                                                                    alert("GoodMorning!" + src);
                                                                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap25.bundle.min.js", function GoodMorning(error, src) { })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    });
});