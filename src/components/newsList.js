
import axios from "axios";
const NewsList = {
    async  print() {    
            const {data} = await axios.get('http://localhost:3001/posts');
        return /* html */`
    
        <h2 class="text-2xl font-semibold uppercase my-4 ">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
                <div class="border px-4 py-3">
                    <a href="/news/${post.id}">
                        <img src="${post.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="/news/${post.id}" class="text-xl font-semibold text-orange-500">${post.title}</a></h3>
                    <p>${post.desc}</p>
                </div>
            `).join("")}
            
        </div>
        <h2 class="text-2xl font-semibold uppercase my-4 ">hoạt động sinh viên</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
                <div class="border px-4 py-3">
                    <a href="/news/${post.id}">
                        <img src="${post.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="/news/${post.id}" class="text-xl font-semibold text-orange-500">${post.title}</a></h3>
                    <p>${post.desc}</p>
                </div>
            `).join("")}
            
        </div>
        
        `;
    },
};
export default NewsList;