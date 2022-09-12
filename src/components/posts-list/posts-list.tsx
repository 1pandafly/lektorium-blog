import Herokuapp from "../../services/herokuapp";
import Spinner from "../spinner";
import {useEffect, useState} from "react";
import PostListItem from "../post-list-item";
import {PostListItemType} from "./type";
import Pagination from "../pagination";
import {POSTS_PER_PAGE} from "../../constants/constants";
import {Box, Container} from "@mui/material";

const PostsList = (props: { id?: string }) => {
    const [postsList, setPostsList] = useState([]);
    const [pagesQuantity, setPagesQuantity] = useState(0);

    useEffect(() => {
        const herokuapp = new Herokuapp();

        herokuapp.getData(`posts?_page=${props.id}&_limit=${POSTS_PER_PAGE}`)
            .then((res) => {
                setPostsList(res.data);
                setPagesQuantity(Math.ceil(Number(res.headers['x-total-count']) / POSTS_PER_PAGE));
            });
    }, [props.id]);

    const postsListHtml = postsList.map((item: PostListItemType) => {
        return (
            <PostListItem
                key={item.id}
                id={item.id}
                title={item.title}
                userId={item.userId}
                createdAt={new Date(item.createdAt)}
            />
        )
    });

    if (postsList.length === 0) {
        return <Spinner/>
    }

    return (
        <Container>
            {postsListHtml}
            <Box sx={{
                pt: '20px',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Pagination
                    pages={pagesQuantity}
                    currentPage={Number(props.id)}
                />
            </Box>
        </Container>
    )
}

export default PostsList;