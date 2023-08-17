document.addEventListener("DOMContentLoaded", function() {
    const luasForm = document.getElementById("luas-form");
    const kelilingForm = document.getElementById("keliling-form");
    const luasResult = document.getElementById("luas-result");
    const kelilingResult = document.getElementById("keliling-result");
    const luasLink = document.querySelector('a[href="#luas"]');
    const kelilingLink = document.querySelector('a[href="#keliling"]');
    const luasSection = document.getElementById("luas");
    const kelilingSection = document.getElementById("keliling");

    luasForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const alas = parseFloat(document.getElementById("alas").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);
        const luas = 0.5 * alas * tinggi;
        luasResult.textContent = `Luas: ${luas.toFixed(2)}`;
    });

    kelilingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const sisi1 = parseFloat(document.getElementById("sisi1").value);
        const sisi2 = parseFloat(document.getElementById("sisi2").value);
        const sisi3 = parseFloat(document.getElementById("sisi3").value);
        const keliling = sisi1 + sisi2 + sisi3;
        kelilingResult.textContent = `Keliling: ${keliling.toFixed(2)}`;
    });

    function clearLuasForm() {
        document.getElementById("alas").value = "";
        document.getElementById("tinggi").value = "";
        luasResult.textContent = "";
    }

    function clearKelilingForm() {
        document.getElementById("sisi1").value = "";
        document.getElementById("sisi2").value = "";
        document.getElementById("sisi3").value = "";
        kelilingResult.textContent = "";
    }

    // Event listener untuk tombol Clear pada formulir Luas
    document.getElementById("luas-clear").addEventListener("click", clearLuasForm);

    // Event listener untuk tombol Clear pada formulir Keliling
    document.getElementById("keliling-clear").addEventListener("click", clearKelilingForm);

    luasSection.style.display = "block";
    kelilingSection.style.display = "none";

    luasLink.addEventListener("click", function(event) {
        event.preventDefault();
        luasSection.style.display = "block";
        kelilingSection.style.display = "none";
    });

    kelilingLink.addEventListener("click", function(event) {
        event.preventDefault();
        kelilingSection.style.display = "block";
        luasSection.style.display = "none";
    });

});
