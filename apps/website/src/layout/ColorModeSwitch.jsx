import ThemeToggleButton from "@uverest/design-system/molecules/ThemeToggleButton";
import { useAppThemeContext } from "@website/app/providers/AppThemeProvider";

const ColorModeSwitch = () => {
    const { resolvedMode, toggleColorMode } = useAppThemeContext();
    return <ThemeToggleButton mode={resolvedMode} onToggle={toggleColorMode} sx={{ color: 'white' }} />;
}

export default ColorModeSwitch;