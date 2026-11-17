let pyodideInstance = null;

async function initPython() {
    const statusEl = document.getElementById("pyodide-status");
    const runBtn = document.getElementById("run-btn");
    const outputEl = document.getElementById("python-output");

    try {
        pyodideInstance = await loadPyodide();
        statusEl.textContent = "Python prêt";
        statusEl.className = "status-ready";
        runBtn.disabled = false;
    } catch (err) {
        statusEl.textContent = "Erreur de chargement Python";
        outputEl.textContent = err.toString();
    }
}

async function runPythonCode() {
    if (!pyodideInstance) return;
    const code = document.getElementById("python-editor").value;
    const outputEl = document.getElementById("python-output");
    outputEl.textContent = "";

    try {
        pyodideInstance.setStdout({
            batched: (text) => {
                outputEl.textContent += text + "\n";
            }
        });
        pyodideInstance.setStderr({
            batched: (text) => {
                outputEl.textContent += "[Erreur] " + text + "\n";
            }
        });

        await pyodideInstance.runPythonAsync(code);
        if (outputEl.textContent === "") {
            outputEl.textContent = "Exécution terminée sans erreur (aucune sortie print).";
        }
    } catch (err) {
        outputEl.textContent += err.toString();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initPython();
    document.getElementById("run-btn").addEventListener("click", runPythonCode);
    document.getElementById("clear-btn").addEventListener("click", () => {
        document.getElementById("python-output").textContent = "";
    });
});