import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import './pagination.css';

const Pagination = (props: { pages: number, currentPage: number }) => {
    const pagesButtons = [];

    for (let i = 1; i <= props.pages; i++) {
        const buttonClass = i === props.currentPage ? "pagination__button pagination__button-active" : "pagination__button";

        pagesButtons.push(
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                border: '1px solid',
                borderColor: 'text.secondary',
                width: '25px',
                height: '25px',
            }} className={buttonClass}>
                <Link key={i} to={`/page/${i}`}>{i}</Link>
            </Box>
        );
    }

    return (
        <div className="pagination__wrapper">
            {pagesButtons}
        </div>
    )
}

export default Pagination;