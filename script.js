document.addEventListener('DOMContentLoaded', () => {
    // FILTROS DO MENU (Página menu.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const category = button.getAttribute('data-category');

                menuItems.forEach(item => {
                    if (category === 'todos' || item.getAttribute('data-category') === category) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// MODAL DE DETALHES DO MENU
const pratosDetalhes = {
    "combo-sensi": {
        nome: "Combo Sensi Premium (24 pçs)",
        preco: "32.50",
        desc: "Seleção exclusiva do Chef com Salmão, Atum Toro, Peixe Branco local e Nigiris braseados com azeite de trufa.",
        alergrenios: "Glúten, Peixe, Sésamo",
        harmonizacao: "Saqué Junmai Daiginjo Frio"
    },
    "sashimi-toro": {
        nome: "Sashimi de Atum Toro",
        preco: "18.00",
        desc: "Fatias nobres de ventresca de atum rabo-azul acompanhado de wasabi fresco ralado na hora.",
        alergrenios: "Peixe",
        harmonizacao: "Vinho Branco Seco Alvarinho"
    },
    "ramen-pato": {
        nome: "Ramen de Pato & Cogumelos",
        preco: "16.50",
        desc: "Caldo rico apurado em lume brando durante 12 horas, massa fresca artesanal, peito de pato fumado e ovo ajitama.",
        alergrenios: "Glúten, Ovos, Soja",
        harmonizacao: "Cerveja Japonesa Kirin Ichiban"
    }
};

function abrirModal(idPrato) {
    const prato = pratosDetalhes[idPrato];
    if (!prato) return;

    document.getElementById('modal-title').innerText = prato.nome;
    document.getElementById('modal-price').innerText = `${prato.preco} €`;
    document.getElementById('modal-desc').innerText = prato.desc;
    document.getElementById('modal-allergens').innerText = prato.alergrenios;
    document.getElementById('modal-pairing').innerText = prato.harmonizacao;

    document.getElementById('item-modal').classList.add('active');
}

function fecharModal() {
    document.getElementById('item-modal').classList.remove('active');
}

function enviarReservaWhatsApp(e) {
    e.preventDefault();

    const nome = document.getElementById('res-nome').value;
    const pessoas = document.getElementById('res-pessoas').value;
    const data = document.getElementById('res-data').value;
    const hora = document.getElementById('res-hora').value;

    let texto = `🍣 *NOVA RESERVA DE MESA - SENSI SUSHI*%0A%0A`;
    texto += `👤 *Nome:* ${nome}%0A`;
    texto += `👥 *Pessoas:* ${pessoas}%0A`;
    texto += `📅 *Data:* ${data}%0A`;
    texto += `⏰ *Hora:* ${hora}%0A%0A`;
    texto += `_Aguardo confirmação da disponibilidade._`;

    // 💡 ALTERA O NÚMERO AQUI (substitui o 351912345678 pelo teu)
    const url = `https://wa.me/351938880537?text=${texto}`;
    
    window.open(url, '_blank');
}
