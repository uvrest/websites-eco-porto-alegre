import palette from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';
import shape from './shape';
import transitions from './transitions';

export { themeConfig } from './_config';

export default function getThemeOptions(mode = 'light') {

    const currentPalette = palette[mode] ?? palette.light;

    return {
        palette: { ...currentPalette, mode },
        typography,
        breakpoints,
        shape,
        spacing: 8, // opcional (MUI já assume 8)
        transitions,
        components,
    };
}