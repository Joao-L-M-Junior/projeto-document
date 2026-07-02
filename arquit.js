// Aguarda o HTML completo ser carregado pelo navegador antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- Comportamento do Botão ---
    const uolButton = document.getElementById('abrir-uol');
    if (uolButton) { // Proteção para verificar se o botão existe
        uolButton.addEventListener('click', function() {
            window.open('http://uol.com.br', '_blank');
        });
    }

    // --- Configuração do Gráfico de Barras ---
    const canvasElement = document.getElementById('meuGrafico');
    
    if (canvasElement) { // Proteção para verificar se o canvas existe
        const ctx = canvasElement.getContext('2d');
        
        const meuGrafico = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                datasets: [{
                    label: 'Vendas',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        console.error("Erro: O elemento canvas com id 'meuGrafico' não foi encontrado no HTML.");
    }

});
