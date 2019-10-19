import axios from 'axios';

export default class Search {
    constructor(qry){
        this.qry = qry; 
    }
    
    async getResults(){
        const key = 'f91d1dca91b9294c090ac6af72ea04b6'
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.qry}`);
            console.log(res);
            this.result = res.data.recipes;            
        } catch (error) {
            alert(error);
        }
    };

}




