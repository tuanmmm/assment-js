import Banner from "../components/banner";
import NewsList from "../components/newsList";
import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = {
   async print() {
        return /* html */`
            <div class="banner">
            ${Header.print()}
                ${Banner.print()}
            </div>
            <div class="news">
                ${await NewsList.print()}
            </div><!--End .news-->   
            <div class="footer">
                ${Footer.print()}
            </div><!--End .news-->        
        `;
    },
};
export default HomePage;