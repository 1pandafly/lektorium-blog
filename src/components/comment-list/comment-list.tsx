import {useEffect, useState} from "react";
import Herokuapp from "../../services/herokuapp";
import {PostListItemType} from "../posts-list/type";
import CommentListItem from "../comment-list-item";
import Spinner from "../spinner";
import {Box, Typography} from "@mui/material";

const CommentList = (props: {id: number}) => {
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        const herokuapp = new Herokuapp();

        herokuapp.getData(`comments?postId=${props.id}&_sort=createdAt&_order=asc`)
            .then((res) => {
                setCommentsList(res.data);
            });
    }, [props.id]);

    const postsListHtml = commentsList.map((item: PostListItemType) => {
        return (
            <CommentListItem
                key={item.id}
                body={item.body}
                userId = {item.userId}
                createdAt = {new Date(item.createdAt)}
                updatedAt = {new Date(item.updatedAt)}
            />
        )
    });

    if (CommentList.length === 0) {
        return <Spinner/>
    }

    return (
        <Box>
            <Typography sx={{
                mb: '15px'
            }}>
                Comments ({commentsList.length})
            </Typography>
            {postsListHtml}
        </Box>
    )
}

export default CommentList;