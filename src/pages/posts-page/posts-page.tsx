import PostsList from "../../components/posts-list";
import {useParams} from "react-router-dom";

const PostsPage = () => {
    const {id} = useParams<{ id?: string }>();

    return (
        <PostsList id={id} />
    )
}

export default PostsPage;