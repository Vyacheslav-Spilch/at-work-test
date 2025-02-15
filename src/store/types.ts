import { AppDispatch } from "./store";

export interface ThunkConfig {
    dispatch: AppDispatch;
    rejectValue: string;
}