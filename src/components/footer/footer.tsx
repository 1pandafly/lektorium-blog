import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
// @ts-ignore
import logo from "../../images/blog_logo.png";
import './footer.css';

const Footer = () => {

    return (
        <Box>
            <Box sx={{
                pt: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 'auto'
            }}>
                <Link to="/">
                    <img src={logo} alt="React Blog" className="footer__logo"/>
                </Link>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px'
                }}>
                    <Typography>
                        <a href="mailto:pandafly@gmail.com" className="footer__mail-link">Contact me</a>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                pt: '20px',
                pb: '20px'
            }}>
                <Typography sx={{
                    textAlign: 'center'
                }}>
                    (c) 2022 Andrii Maslov ;)
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer;