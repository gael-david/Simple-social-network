import { useEffect, useState } from "react";
import { getAllPostsAPI } from "../../../api/getAllPosts";
import CreatePostForm from "../../creation/components/CreatePostForm";
import Feed from "../components/Feed";
import { PostType } from "../../../interfaces/Post";
import { CentralContainer } from "../../../common/components/layouts/CentralContainer";

export default function FeedPage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  async function fetchPosts() {
    const allPosts = await getAllPostsAPI();
    setPosts(allPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <CentralContainer>
      <CreatePostForm reloadFeed={fetchPosts} />
      <Feed title="Votre feed" posts={posts} />
    </CentralContainer>
  );
}