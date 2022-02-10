import Navigo from "navigo";
import HomePage from "./papes/home";
import AboutPage from "./papes/about";
// import Header from "./components/header";
import DetailNewsPage from "./papes/detailNews";
import NewsPage from "./papes/news";
import Sign from "./papes/sign";
import Signup from "./papes/signup";
import Dashboard from "./papes/admin/dashboard";
import AdminNewsPage from "./papes/admin/news";
import Addnews from "./papes/admin/news/add";
// import EditNews from "./papes/admin/editnews";
const router = new Navigo("/" , { linksSelector: "a" });
const render =  async (content,id) => {
//    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender(id);
}
router.on({
    "/": () => render(HomePage),
    "/about": () => render(AboutPage), 
    "/news": () => render(NewsPage),
    "/news/:id": ( data ) =>  render(DetailNewsPage, data.data.id),
    "/sign" : () => render(Sign) ,
    "/signup" : () =>  render(Signup),
    "/admin/dashboard" : () => render(Dashboard),
    "/admin/news" : () => render(AdminNewsPage ),
    "/admin/news/add" : () => render(Addnews),
    // "/admin/news/:id/editnews" : ({data}) => {
    //     const { id } = data;
    //     render(EditNews);
    // }

});
router.resolve();




// class TuongPhep {
//     constructor(name, congVatLy, congPhep) {
//         this.tenTuong = name;
//         this.congVatLyTuong = congVatLy;
//         this.congPhepTuong = congPhep;
//     }
//     showInfo() {
//         console.log(`
//             ${this.tenTuong}
//             ${this.congVatLyTuong}
//             ${this.congVatLyTuong}
//         `)
//     }
// }

// const tuong1 = new TuongPhep("Natalya", 150, 0);
// console.log(tuong1.tenTuong);


// const person = { // object litteral
//     name: 'Dat',
//     showInfo: () => {
//         console.log(this.name);
//     }
// };

// person.showInfo();

// const render = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 // connect sucessfully
//                 resolve("Hello Async/await")
//             } catch (error) {
//                 reject("Lỗi");
//             }
//         }, 3000)
//     })
// }

// render()
//     .then(result => {
//         result.push(5);
//         return result;
//     })
//     .then(data => {
//         data.push(6);
//     })
//     .catch(error => console.log(error))

// const printFunctionPromise = async () => {
//     const result = await render();
//     return result;
// }