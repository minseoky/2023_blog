import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styles from "../css/LectureNotes.module.css"
import { useState } from "react";

const computerNetworkPosts = [
    { id: 1, title: "게시글 1", date: "2022-10-01" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 2, title: "게시글 2", date: "2022-10-02" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 3, title: "게시글 3", date: "2022-10-03" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 4, title: "게시글 4", date: "2022-10-04" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 5, title: "게시글 5", date: "2022-10-05" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 6, title: "게시글 6", date: "2022-10-06" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 7, title: "게시글 7", date: "2022-10-07" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 8, title: "게시글 8", date: "2022-10-08" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 9, title: "게시글 9", date: "2022-10-09" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
];
const dataStructurePosts = [
    { id: 1, title: "게시글 1", date: "2022-10-01" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 2, title: "게시글 2", date: "2022-10-02" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 3, title: "게시글 3", date: "2022-10-03" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 4, title: "게시글 4", date: "2022-10-04" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
    { id: 5, title: "게시글 5", date: "2022-10-05" , img : "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"},
];
const allPosts = [
    computerNetworkPosts,
    dataStructurePosts
];
const postsPerPage = 8; // 페이지당 최대 게시글 수

function LectureNotes() {
    const [posts, setPosts] = useState(computerNetworkPosts)
    const [sortType, setsortType] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const sortedPosts = posts.sort((a, b) => {
        return new Date(sortType ? a.date : b.date) - new Date(sortType ? b.date : a.date);
    });
    const indexOfLastPost = currentPage * postsPerPage; // 현재 페이지의 마지막 게시글 인덱스
    const indexOfFirstPost = indexOfLastPost - postsPerPage; // 현재 페이지의 첫 번째 게시글 인덱스
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지에 해당하는 게시글 배열
    const totalPages = Math.ceil(posts.length / postsPerPage); // 전체 페이지 수

    const handleClick = (id) => {
        console.log(`게시글 ${id} 클릭됨`);
    };

    const handlePageClick = (pageNum) => {
        setCurrentPage(pageNum);
    };
    const postsHandleClick = (type) => {
        if (type === 'CN') {
            setPosts(computerNetworkPosts);
        } else if (type === 'DS') {
            setPosts(dataStructurePosts);
        }
        setCurrentPage(1);
    };
    return (
        <div>
            <Nav />
            <div className={styles.option}>
                <span>게시글 타입 : </span>
                <button onClick={() => postsHandleClick('CN')}>컴퓨터 네트워크</button>
                <button onClick={() => postsHandleClick('DS')}>자료구조</button>
                <button className={styles.sortButton} onClick={() => setsortType(!sortType)}>
                    {sortType ? "새로운 순으로" : "오래된 순으로"} 정렬
                </button>
            </div>
            <div className={styles.lectureNotesContainer}>
                {currentPosts.map((post) => (
                    <div key={post.id} className={styles.lectureNotesBox} onClick={() => handleClick(post.id)}>
                        <img src={post.img} alt="고래" />
                        <div className={styles.postInfo}>
                            <p>{post.date}</p>
                            <h3>{post.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                        key={pageNum}
                        className={pageNum === currentPage ? styles.activePageButton : styles.pageButton}
                        onClick={() => handlePageClick(pageNum)}
                    >
                        {pageNum}
                    </button>
                ))}
            </div>
            <Footer />
        </div>
    );
}





export default LectureNotes;