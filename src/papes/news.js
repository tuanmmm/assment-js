import NewsList from "../components/newsList";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
const NewsPage = {
   async print() {
    const {data} = await axios.get('http://localhost:3001/posts');
        return `
            ${Header.print()}
            ${await NewsList.print()}
            ${Footer.print()}
        `;
    },
};
export default NewsPage;