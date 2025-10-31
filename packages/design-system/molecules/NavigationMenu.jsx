// packages/design-system/molecules/NavigationMenu.jsx
import { Link as MuiLink } from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import { scrollTo } from "@uverest/utils/scrollTo";
import useScrollSpy from "@uverest/shared/hooks/useScrollSpy";
import { isHashLink, isNavLink, isExternalLink } from "@uverest/utils/links";

const defineRenderedComponent = (link) => {
    if (isHashLink(link) || isExternalLink(link)) return MuiLink;
    if (isNavLink(link)) return NavLink;
    return "a";
};

const NavigationMenu = ({ items, renderButton, offset = 80 }) => {

    const routerNavigate = useNavigate();

    // ids só dos anchors (#)
    const sectionIds = items
        .map((item) => (isHashLink(item.to) ? item.to.replace("#", "") : null))
        .filter(Boolean);

    const activeId = useScrollSpy(sectionIds, offset);

    return (
        <>
            {items.map((item) => {

                const targetId = isHashLink(item.to) ? item.to.replace("#", "") : null;

                // hash links usam scrollspy
                const isActive = targetId && activeId === targetId;

                const handleClick = (e) => {

                    if (item.onClick) {
                        item.onClick(e);
                        return;
                    }

                    if (isHashLink(item.to)) {
                        e.preventDefault();
                        scrollTo(item.to, offset);
                    }

                    if (isExternalLink(item.to)) {
                        if (item.to.startsWith("mailto:") || item.to.startsWith("tel:")) {
                            return; // deixa o navegador cuidar
                        }
                        e.preventDefault();
                        window.open(item.to, "_blank");
                    }

                    if (isNavLink(item.to)) {
                        e.preventDefault();
                        routerNavigate(item.to);
                    }

                    return;
                };

                // 🔑 injeta className automaticamente
                const className = isActive && isHashLink(item.to) ? "active" : undefined;

                return renderButton({
                    ...item,
                    className,
                    handleClick,
                    Component: defineRenderedComponent(item.to),
                    href: item.to,
                    submenu: item.submenu ?? null,
                });
            })}
        </>
    );
}

export default NavigationMenu;