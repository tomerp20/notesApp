import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NoteIcon from '@mui/icons-material/Note';

export default function Header() {
  return (
    <AppBar position="static">
    <Toolbar>
        <MenuIcon color="inherit" />
        <Box display="flex" flex="1">
            <Typography variant="h6">Notes App</Typography>
        </Box>
        <NoteIcon />
    </Toolbar>
   </AppBar>
  )
}
