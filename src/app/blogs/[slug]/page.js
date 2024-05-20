import PostData from "./data";

export async function generateMetadata({ params }) {
  return {
    title: params?.slug || "Post from Hey-Stack",
    description: params?.slug || "Blog post from Hey-Stack",
  };
}

const PostDetails = ({ params }) => {
  return (
    <>
      <PostData params={params} />
    </>
  );
};

export default PostDetails;
