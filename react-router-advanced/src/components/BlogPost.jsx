import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h3>Blog Post</h3>
      <p>Displaying blog post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
