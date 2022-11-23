import {loadingAC} from "../../hw10/bll/loadingReducer";

export type StateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

type ActionsType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
