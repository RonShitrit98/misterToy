import { includeBooleanAttr } from '@vue/shared'
import { toyService } from '../../services/toy-service.js'
export default {
    state: {
        toys: null,
        filterBy: {
            type: '',
            searchBy: '',
        }
    },
    getters: {
        toys(state) {
            return state.toys
            // if(!state.toys) return
            // var toysForDisplay =state.toys
            // toysForDisplay = state.toys.filter(toy => (!state.filterBy.type || state.filterBy.type === toy.type)
            // &&(!state.filterBy.searchBy||toy.name.includes(state.filterBy.searchBy)))
            // return toysForDisplay
        },
    },
    mutations: {
        loadToys(state, { toys , filterBy}) {
            state.toys = toys
            if(filterBy) state.filterBy = JSON.parse(JSON.stringify(filterBy))
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toyId === toy._id)
            state.toys.splice(idx, 1)
        },
    },
    actions: {
        loadToys(context) {
            toyService.query(context.state.filterBy)
                .then((toys) => {
                    context.commit({ type: 'loadToys', toys })
                })
        },
        saveToy(context, { toy }) {
            console.log(toy)
            toyService.save(toy)
        },
        removeToy(context, { toyId }) {
            console.log(toyId)
            toyService.remove(toyId)
                .then(() => {
                    context.commit({ type: 'removeToy', toyId })
                })
                .catch(()=>{
                    console.log('boop')

                })
        },

        setFilter(context, { filterBy }) {
            toyService.query(filterBy)
                .then((toys) => {
                    context.commit({ type: 'loadToys', toys, filterBy })
                })
        }
    }

}


