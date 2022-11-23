import {loadingAC} from "../../hw10/bll/loadingReducer";

export type StateType = {
    themeId: number
}

const initState: StateType = {
    themeId: 1,
}

type ActionsType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: +action.id}
        default:
            return state
    }
}

type changeThemeAT = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): changeThemeAT => ({ type: 'SET_THEME_ID', id }) // fix any
