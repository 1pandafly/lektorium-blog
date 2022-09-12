import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Herokuapp from "../../services/herokuapp";
import Spinner from "../../components/spinner";
import CommentList from "../../components/comment-list";
import {Box, Typography} from "@mui/material";

const SinglePostPage = () => {
    const {id} = useParams<{ id?: string }>();
    const [postData, setPostData] = useState({
        id: 0,
        title: '',
        body: '',
        userId: 0,
        createdAt: '',
        updatedAt: ''
    });

    useEffect(() => {
        const herokuapp = new Herokuapp();

        herokuapp.getData(`posts/${id}`)
            .then((res) => {
                setPostData(() => {
                    return {...res.data}
                });
            });
    }, [id]);

    if (!postData.id) {
        return <Spinner/>
    }

    return (
        <Box>
            <Typography variant='h1' sx={{
                mt: '20px',
                mb: '20px',
                fontSize: '30px',
                fontWeight: '600'
            }}>
                {postData.title}
            </Typography>
            <Typography sx={{
                fontSize: '16px',
                lineHeight: '150%'
            }}>
                {postData.body}
            </Typography>
            <Box sx={{
                mt: '30px',
                pl: '40px'
            }}>
                <CommentList id={postData.id} />
            </Box>
        </Box>
    )
}

export default SinglePostPage;