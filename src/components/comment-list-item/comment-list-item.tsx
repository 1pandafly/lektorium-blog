import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Herokuapp from "../../services/herokuapp";

const CommentListItem = (props: {
    userId: number,
    body: string,
    createdAt: Date,
    updatedAt: Date
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
        <div>
            <Box sx={{
                mb: 1,
                p: 1,
                border: '1px solid',
                borderColor: 'primary.main',
                borderRadius: '15px',
            }}>
                <div>
                    <Typography sx={{
                        mb: '5px',
                        fontSize: '16px',
                        color: 'text.primary'
                    }}>
                        {props.body}
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
                </div>
            </Box>
        </div>
    )
}

export default CommentListItem;