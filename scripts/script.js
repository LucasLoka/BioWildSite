// Adiciona um evento de clique para os links do menu
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Suaviza a rolagem até o elemento alvo
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');

    const newsData = [
        {
            title: 'Desmatamento no Brasil teve queda de 11,6% em 2023, aponta estudo',
            content: 'O Relatório Anual de Desmatamento (RAD) indica que Cerrado passou a Amazônia e se tornou o bioma mais desmatado no Brasil. Do total das áreas desmatadas em 2023, 31% estavam no Cerrado e 25%, na Amazônia.'
        },
        {
            title: 'Pará tem 67% de redução em alertas de desmatamento em 15 municípios',
            content: 'Desde o ano passado os municípios são alvo de ações da Operação Curupira, de combate ao desmatamento. Na análise dos dados de áreas recobertas por alertas de desmatamento dos municípios de Altamira, Anapu, São Félix do Xingu, Pacajá, Novo Progresso, Itaituba, Portel, Senador José Porfírio, Novo Repartimento, Uruará, Rurópolis, Placas, Trairão, Jacareacanga e Medicilândia foram 1.387 km² de áreas recobertas por alertas de desmatamento em 2023 contra 452 km² em 2024 – o que indica uma redução, em números absolutos, de 935 km².'
        },
        {
            title: 'Cachorros são resgatados após denúncia de maus-tratos em Mandaguaçu',
            content: 'O Departamento de Meio Ambiente recebeu uma denúncia feita por uma moradora do município à Promotoria de Justiça da Comarca de Mandaguaçu, sobre dois cães que estavam sendo mantidos presos, sem comida, sem água e sem acompanhamento veterinário, caracterizando nesta situação um crime de maus-tratos aos animais. Após o recebimento da denúncia o Departamento de Meio Ambiente, em parceria com o Departamento de Saúde e Vigilância Sanitária, solicitou o suporte da Polícia Militar e Ambiental para acompanhamento e garantia da execução do trabalho dos agentes municipais no resgate dos animais. Após a retirada dos cachorros da residência, os animais foram transportados pela Polícia Ambiental até uma clínica veterinária especializada, na cidade de Maringá, para dar início imediato do processo de tratamento e recuperação dos animais, que estavam muito debilitados e com graves problemas de saúde. COMO DENUNCIAR MAUS-TRATOS AOS ANIMAIS? Ligar no Departamento de Meio Ambiente no telefone (44) 3245-4502 ou na Ouvidoria da Prefeitura no telefone (44) 3245-8400. O morador não precisa se identificar, apenas repassar as informações necessárias, que o departamento responsável irá se deslocar até o local para averiguação.'
        }
        // Adicione mais notícias conforme necessário
    ];

    function loadNews() {
        newsData.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            const newsTitle = document.createElement('div');
            newsTitle.classList.add('news-title');
            newsTitle.textContent = news.title;

            const newsContent = document.createElement('div');
            newsContent.classList.add('news-content');
            newsContent.textContent = news.content;

            newsItem.appendChild(newsTitle);
            newsItem.appendChild(newsContent);
            newsContainer.appendChild(newsItem);
        });
    }

    loadNews();
});
