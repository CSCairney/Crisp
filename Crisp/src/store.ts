import { configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import teamReducer from "../src/modules/team/store";
import userReducer from "../src/modules/login/store";
import mapReducer from "../src/modules/mapSettings/store";
import { listenerMiddleware } from "./modules/common/services/listenersService";

export function createStore(preloadedState = {}) {
    return configureStore({
            preloadedState,
            reducer: {
                teamState: teamReducer,
                userState: userReducer,
                mapState: mapReducer
            },
            middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().prepend(listenerMiddleware.middleware),
        }
    )
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;