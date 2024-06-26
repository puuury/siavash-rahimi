

let itemHTML = '';
rowItems.forEach((rowItem) => {
    itemHTML = itemHTML + `
    <div class="row">
            <img src="image/${rowItem.srcimage}" class="clickable-image">
            <div class="layer">
                <h5>${rowItem.title}</h5>
                <p>${rowItem.description}</p>
                <button><a src="image/${rowItem.srcimage}">SHOW</a></button>
            </div>
        </div>
    `
});

document.querySelector('.js-image-box').innerHTML = itemHTML;