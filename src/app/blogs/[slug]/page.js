import PostData from "./data";

export async function generateMetadata({ params }) {
  return {
    title: params?.slug,
    description: params?.slug,
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
