import NewsList from "../components/newsList";

const NewsPage = {
    print() {
        return `
            ${NewsList.print()}
        `;
    },
};
export default NewsPage;