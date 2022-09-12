import {Link} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Herokuapp from "../../services/herokuapp";
import './post-list-item.css';

const PostListItem = (props: {
    id: number,
    title: string,
    userId: number,
    createdAt: Date
}) => {
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const herokuapp = new Herokuapp();

        herokuapp.getData(`users/${props.userId}`)
            .then((res) => {
                setAuthor(`${res.data.firstname} ${res.data.lastname}`);
            });
    }, []);

    return (
        <Box sx={{
            mb: '20px',
            p: '10px',
            boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.05)',
            borderRadius: '10px'
        }}>
            <Link to={`/post/${props.id}`} className="post-list__item">
                <Box>
                    <Typography sx={{
                        fontSize: '20px',
                        color: 'text.primary',
                        textDecoration: 'none'
                    }}>
                        {props.title}
                    </Typography>

                    <Box>
                        <Typography sx={{
                            fontSize: '14px',
                            color: 'text.secondary',
                            textAlign: 'right'
                        }}>
                            {props.createdAt.toLocaleDateString().toString()}
                        </Typography>
                        <Typography sx={{
                            fontSize: '14px',
                            color: 'text.secondary',
                            textAlign: 'right'
                        }}>
                            {author}
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </Box>

    )
}

export default PostListItem;