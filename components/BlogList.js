import React, { useRef, useState } from "react";

const Blogs = ({ bloglists }) => {
    //  console.log("bloglists", bloglists);
  return (
    <table width={500}>
      <tr>
        {bloglists.results.map((blog, i) => {
          return (
            <tr>
              <td>{blog.id}</td>
              <td>{blog.top_description_title}</td>
              <td>{blog.card_photo.url}</td>
              <td>{blog.slug}</td>
            </tr>
          );
        })}
      </tr>
    </table>
  );
};

export default Blogs;
