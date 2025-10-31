// apps/website/src/app/config/navigationMap.js
export const navigationMap = {
    main: [
        { label: "Home", to: "/" },
        { label: "Sobre", to: "/sobre" },
        {
            label: "Serviços",
            to: "#",
            submenu: [
                { label: "Caça Vazamento", to: "/caca-vazamento" },
                { label: "Encanador Hidráulico", to: "/encanador" },
                { label: "Desentupimentos", to: "/desentupimentos" },
                { label: "Limpeza e Sucção de Fossas", to: "/limpa-fossa" },
                { label: "Hidrojateamento", to: "/hidrojateamento" },
                { label: "Dedetização e Controle de Pragas", to: "/dedetizacao" },
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