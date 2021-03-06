import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { appReducer, settingsReducer } from "@state"

const appPersistConfig = {
    key: "app",
    storage,
    whitelist: ["durations", "stagesPattern"],
}

const settingsPersistConfig = {
    key: "settings",
    storage,
}

export const rootReducer = combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
    settings: persistReducer(settingsPersistConfig, settingsReducer),
})

export type RootStateType = ReturnType<typeof rootReducer>
