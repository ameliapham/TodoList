import type { Translations } from '../types';

export const translations: Translations<"en"> = {
    "Header": {
        "owner Todo list": ({ ownerName })=> `${ownerName}'s Todo List`,
        //"Log in": "Log in",
        "Log out": "Log out"
    }
};