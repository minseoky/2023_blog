import Nav from "../components/Nav";
import styles from '../css/Home.module.css';
import Footer from "../components/Footer";


function Home() {
    return (
        <div>
            <Nav />
            <div className={styles.introContainer}>
                <h1>안녕하세요! 저는 소프트웨어학과에 재학 중인 최민석입니다.</h1>
                <p> 이 블로그에서는 저의 공부 내용과 프로젝트 등을 공유하고자 합니다.</p>
                <p>관심 있는 분야나 문의 사항이 있으시면 언제든지 연락해주세요!</p>
            </div>
            <Footer/>
        </div>
    );
}


export default Home;