import Banner from "../components/banner";
import NewsList from "../components/newList";

const HomePage = {
    print() {
        return /* html */`
            <div class="banner">
                ${Banner.print()}
            </div>
            <div class="news">
                ${NewsList.print()}
            </div><!--End .news-->         
        `;
    },
};
export default HomePage;