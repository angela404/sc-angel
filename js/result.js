let products = [];

        // Memuat data produk dari file JSON
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                const query = new URLSearchParams(window.location.search).get('query').toLowerCase();
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(query)
                );
                displayProducts(filteredProducts);
            });

        // Fungsi untuk menampilkan produk dalam bentuk card
        function displayProducts(items) {
            const container = document.getElementById('resultsContainer');
            if (items.length === 0) {
                container.innerHTML = '<p>Tidak ada produk yang ditemukan.</p>';
            } else {
                items.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'resultsProduct';
                    card.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <p>Rp ${item.price}</p>
                        <p>${item.desc}</p>
                    `;
                    container.appendChild(card);
                });
            }
        }