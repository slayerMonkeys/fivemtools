const { sidebarEn, sidebarFr, topbarEn, topbarFr } = require("./navigation")

module.exports = {
    title: "Fivem tools",
    locales: {
        "/": {
            lang: "en-US",
            title: "Fivem tools",
            description: "A package with many tools for better development environment for Fivem servers"
        },
        "/fr/": {
            lang: "fr-FR",
            title: "Fivem tools",
            description: "Un paquet avec plusieurs outils pour un meilleur environnement de développement pour les serveurs Fivem",
        }
    },
    themeConfig: {
        locales: {
            "/": {
                selectLanguageName: "English",
                selectLanguageText: "Languages",
                selectLanguageAriaLabel: "Languages",
                navbar: topbarEn,
                sidebar: sidebarEn
            },
            "/fr/": {
                selectLanguageText: "Langues",
                selectLanguageName: "Français",
                selectLanguageAriaLabel: "Langues",
                navbar: topbarFr,
                sidebar: sidebarFr
            }
        }
    }
}
