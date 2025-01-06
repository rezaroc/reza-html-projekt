function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function showTuningOptions(model) {
    const tuningOptions = {
        'BMW 3 Serie': ['Stage 1', 'Stage 2', 'Stage 3'],
        'BMW 5 Serie': ['Stage 1', 'Stage 2'],
        'Audi A3': ['Stage 1', 'Stage 3'],
        'Volkswagen Golf': ['Stage 1', 'Stage 2'],
        'Mercedes A-Klasse': ['Stage 1'],
        'Audi A4': ['Stage 1', 'Stage 2', 'Stage 3'],
        'Volkswagen Passat': ['Stage 1', 'Stage 2'],
        'Mercedes C-Klasse': ['Stage 1', 'Stage 2'],
        'BMW X5': ['Stage 1', 'Stage 2'],
        'Audi Q5': ['Stage 1', 'Stage 3'],
        'Volkswagen Tiguan': ['Stage 1', 'Stage 2'],
        'Mercedes E-Klasse': ['Stage 1', 'Stage 2'],
        'BMW M4': ['Stage 1', 'Stage 2', 'Stage 3'],
        'Mercedes GLE': ['Stage 1', 'Stage 2', 'Stage 3']
    };

    const options = tuningOptions[model] || [];
    const optionsContainer = document.getElementById('tuning-options');
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => alert(`${option} geselecteerd voor ${model}`);
        optionsContainer.appendChild(button);
    });
}
