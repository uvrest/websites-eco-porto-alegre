import { Box, List, ListSubheader } from '@mui/material';
import { LAYOUT_CONFIG } from '../configs/config';
import menuLinkMap from '../configs/menuLinkMap';
import MenuItem from './MenuItem';

const MenuList = ({ sidebarCollapsed }) => {
    return (
        <List
            component='nav'
            dense={LAYOUT_CONFIG.sidebar.denseMode}
            sx={{
                position: 'relative',
                overflowX: 'hidden',
                overflowY: 'auto',
                scrollbarWidth: 'thin',
            }}
        >
            {menuLinkMap.map((group) => {
                return (
                    <Box key={group.groupLabel || Math.random()}>

                        {!sidebarCollapsed && (
                            <ListSubheader>{group.groupLabel}</ListSubheader>
                        )}

                        {group.groupItems.map((item, itemIndex) => (
                            <MenuItem key={itemIndex} item={item} sidebarCollapsed={sidebarCollapsed} />
                        ))}
                    </Box>
                )
            })}
        </List>
    )
}

export default MenuList;