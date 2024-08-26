import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

export const languages = ["en", "fr"] as const

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString,
    /** For use outside of React */
    getTranslation,
} = createI18nApi<
    | typeof import("./TodoList").i18n
>()(
    {
        languages,
        fallbackLanguage
    },
    {
        "en": {
            "TodoList": {
                "Todo List": "Todo List",
            }
        },
        /* spell-check: disable */
        "fr": {
            "TodoList": {
                "Todo List": "Liste de tâches",
            }
        },
        /* spell-check: enable */
    }
);