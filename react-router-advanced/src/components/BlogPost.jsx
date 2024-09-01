import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();
  return (
    <div>
      <h3>Blog Post</h3>
      <p>Displaying blog post with ID: {postId}</p>
    </div>
  );
}

export default BlogPost;
