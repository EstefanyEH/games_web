
import store from '@/store'

describe('Prueba de agregar opinion', () => {       
    it('Agregar una nueva opinión',()=>{
        let new_opinion={
            opinion:"Fome",
            nombre:"Juanita",
            juego:"Cards",
        }

        expect(store.state.opinions).toHaveLength(0);
        store.dispatch('add_opinion',new_opinion);
        expect(store.state.opinions).toHaveLength(1);

    });

    it('editar opinión',()=>{
        let edit_opinion={
            id:0,
            opinion:"Me gusto",
            nombre:"Juanita",
            juego:"Cards",}
        
 
        expect(store.state.opinions[0].opinion).toContain('Fome');
        store.dispatch('edit_opinion',edit_opinion);
        expect(store.state.opinions[0].opinion).toContain('Me gusto');
     })
    
});