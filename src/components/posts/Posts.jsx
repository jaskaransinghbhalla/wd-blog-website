import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <img className="postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
        </img>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, </span>
          <hr/>
          <span className="postDate">
          1 Hour Ago
          </span>
        </div>
    </div>
    
  );
}