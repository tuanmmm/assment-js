import data from "../data";

const DetailNewsPage = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return `
            <h1 class="text-center font-bold text-[36px] ">${result.title}</h1>
            <img src="${result.img}" class="mx-auto " />
            <p class="text-justify ">${result.desc}</p>
        `;
    },
};
export default DetailNewsPage;

