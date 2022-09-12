import Header from "../header";
import Footer from "../footer";
import {Navigate, Route, Routes} from 'react-router-dom';
import Homepage from "../../pages/home-page";
import PostsPage from "../../pages/posts-page";
import SinglePostPage from "../../pages/single-post-page";
import {Container} from "@mui/material";
import './app.css';

const App = () => {

    return (
        <Container maxWidth="md" className="main" sx={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            minHeight: '100vh'
        }}>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/page/:id" element={<PostsPage />} />
                <Route path="/post/:id" element={<SinglePostPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Container>
    )
}

export default App;