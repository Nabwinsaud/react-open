import { useLocation, useParams } from "react-router-dom";
import { data, IPost } from "../components/Blog";
export default function SingleBlog() {
  const { id } = useParams();
  //   const post = data.getPosts(Number(id));
  //   const location = useLocation();
  //   console.log(location);
  //   console.log(location.pathname.split("/")[2]);
  //   console.log(typeof location.pathname.split("/")[2]);

  //   const post: IPost | undefined = data.getPosts(parseInt(id as string, 10));
  const post: IPost | undefined = data.getPosts(Number(id));
  return (
    <div>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "600", color: "green" }}>
          {post?.title}
        </p>
        <span>{post?.body}</span>
        <p>{post?.tags}</p>
        <p>Reactions :{post?.reactions}</p>
      </div>
    </div>
  );
}
