import NewsList from "../components/newsList";
import Header from "../components/header";
const NewsPage = {
    print() {
        return `
            ${Header.print()}
            ${NewsList.print()}
        `;
    },
};
export default NewsPage;