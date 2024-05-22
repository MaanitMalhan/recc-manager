import { ReccContext } from "../context/ReccContext";
import { useContext } from "react";

export const useReccContext = () => {
    const context = useContext(ReccContext);

    if (!context) {
        throw Error('useReccContext must be used within a ReccContextProvider');
    }

    return context;
}