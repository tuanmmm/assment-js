import Header from "../components/header";
import Banner from "../components/banner";
import axios from "axios";
const DetailNewsPage = {
  async  print(id) {
      console.log(id)
      const {data} = await axios.get('https://5e79b4b817314d00161333da.mockapi.io/posts/'+id);
        return `
        <div class="banner">
        ${Header.print()}
            ${Banner.print()}
        </div>
            <h1 class="text-center font-bold text-[36px] ">${data.title}</h1>
            <img src="${data.img}" class="mx-auto " />
            <p class="text-justify ">${data.desc}</p>
        `;
    },
};
export default DetailNewsPage;

