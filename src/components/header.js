const Header = {
       print (){
           return /* html */ `
           <div class="bg-blue-900 py-4">
           <a href="#">
             <img src="https://i.picsum.photos/id/867/200/200.jpg?hmac=o_T4KIW6jPbGySRv8Em8TaP9PH_tgegfmPaYJJ394Y4" alt="" class="h-20 w-100 mx-auto">
           </a>
         </div>
         <div class="bg-orange-300">
           <ul class="flex text-white m-[20px ">
             <li class="mx-[10px] my-[10px] hover:text-black hover:underline font-bold"><a href="/">Trang Chủ</a></li>
             <li class="mx-[10px] my-[10px] hover:text-black hover:underline font-bold"><a href="/news">Chi tiết bài viết</a></li>
             <li class="mx-[10px] my-[10px] hover:text-black hover:underline font-bold"><a href="/dashboard">dashboard</a></li>
             <li class="mx-[10px] my-[10px] hover:text-black hover:underline font-bold"><a href="/sign">Đăng nhập</a></li>
             <li class="mx-[10px] my-[10px] hover:text-black hover:underline font-bold"><a href="/signup">Đăng kí</a></li>
              <form action="" class="ml-[230px] mt-[10px]">
             <input type="text">
             <button class="border bg-blue-800 ... px-[5px] text-white ... border-none hover:bg-yellow-400 ">Tìm kiếm</button>
         </form>   
           </ul>          
         </div>

           `;
       },
};
export default Header;