function verificarPadraoBenford() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbers = inputNumbers.match(/\d/g); // Remove tudo que não é número
    const count = Array(10).fill(0); // Array para contar a ocorrência de cada dígito

    if (!numbers) {
        alert("Por favor, insira números válidos.");
        return;
    }

    numbers.forEach(number => {
        const firstDigit = parseInt(number.toString()[0]);
        count[firstDigit]++;
    });

    const totalNumbers = numbers.length;
    const percentages = count.map(num => ((num / totalNumbers) * 100).toFixed(2));

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Resultados:</h2>';
    for (let i = 1; i < 10; i++) {
        resultDiv.innerHTML += `<p>Ocorrência do dígito ${i}: ${percentages[i]}%</p>`;
    }

    // Criar o gráfico de barras
    const ctx = document.getElementById('barChart').getContext('2d');

    document.getElementById('entrada').style.display = 'none';
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                label: 'Ocorrência dos Dígitos',
                data: percentages.slice(1), // Ignorando o primeiro elemento (índice 0)
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) {
                            return value + '%'; // Adicionando o símbolo de porcentagem nos ticks do eixo Y
                        }
                    }
                }]
            }
        }
    });

}
