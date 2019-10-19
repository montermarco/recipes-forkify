// Global app controller 
import Search from './modules/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';


// Global app state
const state = {};


const controlSearch = async () => {
    const qry = searchView.getInput();
    
    if(qry){
        
        state.search = new Search(qry);
        
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults);

        await state.search.getResults();
        clearLoader();
        searchView.renderResults(state.search.result);
        
    }
};

/*  EVENT LISTENERS  */
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

