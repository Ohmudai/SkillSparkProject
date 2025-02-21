import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "../../css/Allpost.css";
import { useNavigate } from "react-router";
import {Helmet} from 'react-helmet'


export default function AllPost() {
  const [comment, setComment] = useState("");

  const [post, setPost] = useState([]);

  const Navigate = useNavigate();

  const getPostResponse = async () => {
    const response = await axios.get("http://localhost:3000/post/allpost", {
      headers: {
        "Content-type": "application/json",
      },
    });

    setPost(response.data.postDetails);
  };

  const handleLike = async (postId) => {
    const response = await axios.post(
      "http://localhost:3000/post/like",
      { id: postId, email: localStorage.getItem("username") },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    getPostResponse();
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const submitComment = async (postId, comment) => {
    const response = await axios.post(
      "http://localhost:3000/post/comment",
      { id: postId, comment: comment },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.data.success == true) {
      alert("Commented");
      const commentInput = document.querySelectorAll("#comment");
      commentInput.value = " ";
    } else {
      alert("Unable to comment on this post");
    }
  };

  const showcmnt = async (postId) => {
    Navigate(`/comments/${postId}`);
  };

  useEffect(() => {
    getPostResponse();
  }, []);

  return (
    <>
    <Helmet><title>All post</title></Helmet>
      <div id="outlet">
        <div id="postSection" style={{ margin: "20px" }}>
          {post.length == 0 ? (
            <div>NO POST AVAILABLE</div>
          ) : (
            post.map((eachpost) => {
              return (
                <div id="postCard">
                  <div id="postCardProfileSection">
                    <img src={eachpost.userId.profilePic.url} style={{height:"70px", width:"70px", borderRadius:"50%"}} alt="profilePic" />
                    <p >{eachpost.userId.userName}</p>

                  </div>
                  <p>Caption: {eachpost.caption}</p>

                  <img
                    src={eachpost.post.imageurl}
                    style={{ width: "300px", height: "300px" }}
                  />

                  <button
                    onClick={() => {
                      handleLike(eachpost._id);
                    }}
                  >
                    {eachpost.likes.noOfLikes}Like
                  </button>
                  <input
                    type="text"
                    onChange={handleComment}
                    id="comment"
                    placeholder="Comment Here!"
                  />
                  <button
                    onClick={() => {
                      submitComment(eachpost._id, comment);
                    }}
                  >
                    Submit Comment
                  </button>
                  <button
                    onClick={() => {
                      showcmnt(eachpost._id);
                    }}
                  >
                    Show Comments
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
