document.getElementById("suggestionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const suggestion = document.getElementById("suggestionInput").value;
    alert(`Grazie! Il suggerimento "${suggestion}" è stato ricevuto (non viene salvato realmente).`);
    document.getElementById("suggestionInput").value = "";
});
