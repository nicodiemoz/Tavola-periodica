function showInfo(elementSymbol) {
    const infoSection = document.getElementById('info-section');
    
    // Informazioni sugli elementi, puoi modificarli o aggiungere altri
    const elementInfo = {
        'H': {
            name: 'Idrogeno',
            description: 'L\'idrogeno è il primo elemento della tavola periodica ed è l\'elemento più leggero.',
            image: 'images/hydrogen.jpg' // Aggiungi qui la tua immagine
        },
        'He': {
            name: 'Elio',
            description: 'L\'elio è un gas nobile, noto per il suo uso nei palloni aerostatici.',
            image: 'images/helium.jpg'
        },
        'Li': {
            name: 'Litio',
            description: 'Il litio è un metallo alcalino utilizzato nelle batterie ricaricabili.',
            image: 'images/lithium.jpg'
        }
        // Puoi continuare ad aggiungere altri elementi con lo stesso schema.
    };

    const selectedElement = elementInfo[elementSymbol];
    
    // Se l'elemento è disponibile, mostra le informazioni
    if (selectedElement) {
        infoSection.innerHTML = `
            <h2>${selectedElement.name}</h2>
            <p>${selectedElement.description}</p>
            <img src="${selectedElement.image}" alt="${selectedElement.name}">
        `;
    } else {
        infoSection.innerHTML = '<p>Informazioni non disponibili.</p>';
    }
}
