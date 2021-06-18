function showAlert() {
    alert("3");
}


(function () {

    //TODO: Event Handlers (Html, Dom, Listener)
    const button = document.querySelector("button");
    button.onclick = () => {
        alert("2");
    };

    button.addEventListener("click", showAlert);
    button.removeEventListener("click", showAlert);

    button.addEventListener("click", () => {
        alert("4")
    });

    //TODO: document(DOMContentLoaded), (offline, online
    window.addEventListener("online", () => {
        alert("online");
    })

    window.addEventListener("offline", () => {
        alert("offline");
    })

    document.addEventListener("DOMContentLoaded", () => {
        console.log("End")
        document.querySelector("h1").style.display = "none";
    });

    //TODO: HTMLElement handleEvent
    let obj = {
        handleEvent(event) {
            alert(event.type)
            event.stopPropagation();
        }
    }

    document.querySelector(".handle-event").addEventListener("click", obj);
    document.querySelector("#sec_test").addEventListener("click", (event) => {
        alert("section")
    });
    //bubble

})();