import { toyService } from '../../services/toy-service.js'
export default {
    state: {
        toys: null,
        filterBy: {
            type:null
        }
    },
    getters: {
        toys(state) {
            var toysForDisplay 
            return state.toys
        },
    },
    mutations: {
        loadToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toyId === toy._id)
            state.toys.splice(idx, 1)
        },
        setFilter(state, {filterBy}){
            state.filterBy = filterBy
        }
    },
    actions: {
        loadToys(context) {
            toyService.query()
                .then((toys) => {
                    context.commit({ type: 'loadToys', toys })
                })
        },
        saveToy(context, { toy }) {
            console.log(toy)
            toyService.save(toy)
        },
        removeToy(context, { toyId }) {
            toyService.remove(toyId)
                .then(() => {
                    context.commit({type:'removeToy', toyId})
                })
        }

    }

}


