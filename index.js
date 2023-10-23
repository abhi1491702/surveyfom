document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const submittedData = document.getElementById("submitted-data");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        let dataHtml = "";
        for (const pair of formData.entries()) {
            dataHtml += `<p><strong>${pair[0]}:</strong> ${pair[1]}</p>`;
        }
        submittedData.innerHTML = dataHtml;
        popup.style.display = "flex";
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });
});
