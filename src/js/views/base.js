export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResultList: document.querySelector('.results__list'),
    searchResults: document.querySelector('.results')
};

export const elStr = {
    loader: 'loader' 
};

export const renderLoader = parent => {
    const loader = `
    <div class="${elStr.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>        
    `;
    parent.insertAdjacentHTML('afterbegin',  loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elStr.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
};