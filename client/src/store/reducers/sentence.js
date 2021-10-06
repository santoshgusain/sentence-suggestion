import {sentenceTypes} from '../types'

const initialState = {
    isLoading: false, 
    sentences: [],
}

export default function sentenceReducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case sentenceTypes.IS_LOADING:
            return{
                ...state,
                isLoading: payload
            }
        case sentenceTypes.LOAD_SENTENCE:
            return {
                ...state,
                isLoading: false,
                sentences: payload.sentences
            }
        default:
            return state;
    }
}