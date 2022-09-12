import {Box, Typography} from "@mui/material";
// @ts-ignore
import logo from '../../images/blog_logo.png';
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <Box sx={{
            pb: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Link to="/">
                <img src={logo} alt="React Blog" className="header__logo" />
            </Link>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px'
            }}>
                <Typography>Menu</Typography>
                <Typography>Login</Typography>
            </Box>
        </Box>
    )
}

export default Header;