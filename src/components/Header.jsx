import { StickyNote2 } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';

/**
 * @function Header 
 * @returns header HTML
 */
export default function Header() {
  return (
    <header>
      <AppBar position='static'>
        <Toolbar>
          <StickyNote2 sx={{ mr: 2 }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow:1 }}>
            React Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}