// apps/website/src/app/config/navigationMap.js
export const navigationMap = {
    main: [
        { label: "Home", to: "/" },
        { label: "Sobre", to: "/sobre" },
        {
            label: "Serviços",
            to: "#",
            submenu: [
                { label: "Caça Vazamento", to: "/servicos/caca-vazamento" },
                { label: "Encanador Hidráulico", to: "/servicos/encanador" },
                { label: "Desentupimentos", to: "/servicos/desentupimentos" },
                { label: "Limpeza e Sucção de Fossas", to: "/servicos/limpa-fossa" },
                { label: "Hidrojateamento", to: "/servicos/hidrojateamento" },
                { label: "Dedetização e Controle de Pragas", to: "/servicos/dedetizacao" },
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