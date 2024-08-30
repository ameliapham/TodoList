import type { Translations } from '../types';

export const translations: Translations<"en"> = {
    "Header": {
        // cSpell:disable
        "owner Todo list": ({ ownerName }) => `Liste de tâches de ${ownerName}`,
        //"Log in": "Se Connecter",
        "Log out": "se Déconnecter"
        // cSpell:enable
    }
};