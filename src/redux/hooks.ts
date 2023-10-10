import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { TAppDispatch, TRootState } from "./types";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
