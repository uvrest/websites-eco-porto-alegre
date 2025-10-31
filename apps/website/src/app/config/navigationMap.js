// apps/website/src/app/config/navigationMap.js
export const navigationMap = {
    main: [
        { label: "Home", to: "/" },
        { label: "Sobre", to: "/sobre" },
        {
            label: "Serviços",
            to: "#",
            submenu: [
                { label: "Serviço 1", to: "/servico-1" },
                { label: "Serviço 2", to: "/servico-2" },
                { label: "Serviço 3", to: "/servico-3" },
            ],
        },
        { label: "Contato", to: "/contato" },
    ],
    legal: [
        { label: "Privacidade", to: "/privacidade" },
        { label: "Termos", to: "/termos" },
    ],
    hash: [
        { label: "Motivos", to: "#por-que" },
        { label: "Processo", to: "#processo" },
    ],
    actions: [
        { label: "Ligar", to: "tel:5551999999999" },
        { label: "E-mail", to: "mailto:teste@gmail.com" },
    ]
};