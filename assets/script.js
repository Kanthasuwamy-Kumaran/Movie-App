const imageData = [
    './assets/imge/LEO.jpg',
        './assets/imge/JAILER.jpg',
    './assets/imge/AYALAAN.jpg',
    './assets/imge/VIDAMUYARCHCHI.jpg',
    './assets/imge/CHITHTHA.jpg',
    './assets/imge/CHANDRAMUKHI2.jpg',
    './assets/imge/MYAYON.jpg',

];


        function renderImages(images) {
            const container = document.querySelector('.images');
            container.innerHTML = '';

            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imgElement.alt = '';

                const item = document.createElement('div');
                item.classList.add('image-box');

                const text = document.createElement('div');
                text.classList.add('text');
                const imageName = image.split('/').pop().split('.')[0];
                text.textContent = imageName;

                item.appendChild(imgElement);
                item.appendChild(text);

                container.appendChild(item);
            });
        }

        function handleSearch() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const filteredImages = imageData.filter(image => image.toLowerCase().includes(searchTerm));
            renderImages(filteredImages);
        }

        renderImages(imageData);

        document.getElementById('search-input').addEventListener('input', handleSearch);