import HeaderAdmin from "../../../components/headeradmin";
const Addnews = {
    print(){
        return /* html */`
        <div>
        ${HeaderAdmin.print()}
      </div>
      <div>
      <form action="" id="form-add-post">
          <input type="text"
              id="title-post"
              class="border border-black"
              placeholder="Title post"
          > 
          <br />
          <input type="file"
              id="img-post"
              class="border border-black"
              placeholder="Imager post"
          > <br />
          <textarea name="" 
              id="desc-post" 
              class="border border-black"
              cols="30" 
              rows="10"></textarea>
          <button class="bg-blue-500 p-4 inline-block text-white">Thêm bài viết</button>
      </form>
      </div>
        `;
        }, 
        afterRender(){
          
        }
};
export default Addnews;