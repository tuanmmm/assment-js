import NewsList from "../components/newsList";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
const NewsPage = {
   async print() {
    const {data} = await axios.get('https://5e79b4b817314d00161333da.mockapi.io/posts');
        return `
            ${Header.print()}
            ${await NewsList.print()}
            ${Footer.print()}
        `;
    },
};
export default NewsPage;