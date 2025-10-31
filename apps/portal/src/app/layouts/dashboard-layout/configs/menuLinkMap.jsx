// src/layouts/dashboard-layout/configs/menuLinkMap.jsx
import { AssessmentOutlined, GroupOutlined, NewReleasesOutlined } from "@mui/icons-material";

const menuLinkMap = [
    {
        groupLabel: '',
        groupItems: [
            {
                primaryLabel: 'Dashboard',
                secondaryLabel: 'Painel de Controle',
                icon: <AssessmentOutlined />,
                path: '/',
                subItems: null
            }
        ],
    },
    {
        groupLabel: 'Configurações',
        groupItems: [
            {
                primaryLabel: 'Usuários',
                secondaryLabel: 'Gerenciar usuários',
                icon: <GroupOutlined />,
                path: 'usuarios',
                subItems: null
            },
            {
                primaryLabel: 'Assinantes',
                secondaryLabel: 'Triagem de cadastros de assinantes',
                icon: <NewReleasesOutlined />,
                path: '',
                subItems: [
                    {
                        primaryLabel: 'Ativas',
                        secondaryLabel: 'Gerenciar assinantes ativos',
                        path: 'assinantes/ativos'
                    },
                    {
                        primaryLabel: 'Pendentes',
                        secondaryLabel: 'Gerenciar assinantes aguardando a triagem',
                        path: 'assinantes/pendentes'
                    },
                ]
            }
        ],
    },
];

export default menuLinkMap;