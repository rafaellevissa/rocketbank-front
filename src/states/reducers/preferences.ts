import { TOGGLE_DARKTHEME, TOGGLE_SIDEBAR } from "../types";

const preferences: any = (state = { darkThemeEnabled: false, menuEnabled: false }, action: any) => 
{
    switch (action.type) 
    {
        case TOGGLE_DARKTHEME:
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
  
        case TOGGLE_SIDEBAR:
            return { ...state, menuEnabled: !state.menuEnabled }

        default:
            return state;
    }
};

export default preferences;