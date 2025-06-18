import { styled, Box } from '@mui/material';

const CustomNavbar = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 64, // Add a height
    backgroundColor: theme.palette.primary.dark,
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
}))

export default CustomNavbar