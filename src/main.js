import Navigo from "navigo";
import HomePage from "./papes/home";
import AboutPage from "./papes/about";
import Header from "./components/header";
import DetailNewsPage from "./papes/detailNews";
import NewsPage from "./papes/news";
import Sign from "./papes/sign";
import Signup from "./papes/signup";
import Dashboard from "./papes/dashboard";
import admin from "./papes/admin/news";
import Addnews from "./papes/admin/addnews";
import EditNews from "./papes/admin/editnews";
const router = new Navigo("/" , { linksSelector: "a" });
const render = (content) => {
  //  document.getElementById("header").innerHTML = Header.print();
    document.getElementById("app").innerHTML = content;
}
router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    
    "/news": () => {
        render(NewsPage.print());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewsPage.print(id));
    },
    "/sign" : () => {
        render(Sign.print());
    }
    ,
    "/signup" : () => {
        render(Signup.print());
    },
    "/dashboard" : () => {
        render(Dashboard.print());
    },
    "/admin/news" : () => {
        render(admin.print());
    }
    ,"/admin/news/addnews" : () => {
        render(Addnews.print());
    },
    "/admin/news/:id/editnews" : ({data}) => {
        const { id } = data;
        render(EditNews.print(id));
    }

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