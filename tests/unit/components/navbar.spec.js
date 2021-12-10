import { shallowMount} from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('Navbar.vue', () => {
    it('largo de Games Opinion', () => {
        const wrapper = shallowMount(Navbar)
        const a = wrapper.find('a')
        expect(a.text()).toHaveLength(13)
    });

    it('que este Administración', ()=>{
        const wrapper = shallowMount(Navbar)
        const adm = wrapper.find('#adm')
        expect(adm.text()).toBe('Administración')
    })

    
}); 