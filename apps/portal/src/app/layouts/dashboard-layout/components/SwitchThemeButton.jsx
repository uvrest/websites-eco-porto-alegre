// src/layouts/dashboard-layout/components/SwitchThemeButton.jsx
import ThemeToggleButton from "@uverest/design-system/molecules/ThemeToggleButton";
import { useAppThemeContext } from "@portal/app/contexts/AppThemeContext";

const SwitchThemeButton = () => {
    const { resolvedMode, toggleColorMode } = useAppThemeContext();
    return <ThemeToggleButton mode={resolvedMode} onToggle={toggleColorMode} />;
}

export default SwitchThemeButton;