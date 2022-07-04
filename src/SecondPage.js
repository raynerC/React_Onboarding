import "./App.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams, useLocation } from "react-router-dom";
import React, { useEffect, useState, componentDidMount } from "react";
import axios from "axios";

function FetchComments({ postId }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  const [comment, setComment] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setComment(response.data);

    });
  }, [url]);

  /* return {
    props: {
      comment,
    },
  }; */
  
    return (
      comment &&
      comment.length > 0 &&
      comment.map((comment) => (
        <div class="px-5">
          <p class="text-base text-black-300 mt-8 -fontbold">{comment.email}</p>
          <p class="text-base text-black-300 mt-5">{comment.body}</p>
          <div class="border-t border-black my-7"></div>
        </div>
      ))
    );
}

function DisplayPageContent({ postId }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPageContent(response.data);
      console.log(response.data);
    });
  }, [url]);

  /* return {
    props: {
      pageContent
    },
  }; */
  console.log(postId);
  if (pageContent)
    return (
      <>
        <h1 class="text-blue69 font-bold text-5xl mb-14">
          {pageContent.title}
        </h1>
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          class="rounded my-3.5 my-3 h-auto align-middle border-none px-11"
        />
        <p class="text-base text-black-300 mt-5">{pageContent.body}</p>
      </>
    );
}

export default function SecondPage() {
  componentDidMount () 
    const { postId } = this.props.location.state
  console.log(postId);
  //  if (props.comment)
  return (
    <div>
      <div class="flex items-center">
        <div class="md:w-2/3 lg:w-1/3 w-4/5 items-left my-9 mx-auto text-left">
          <div class="flex items-center">
            <IoIosArrowBack />
            <Link to="/NewsGrid" class="font-bold">
              Back
            </Link>
          </div>

          <DisplayPageContent postId={postId} />
         
          <p class="text-base text-black-300 mt-5">
            The alignment is done after the lengths and auto margins are
            applied, meaning that, if in a Flexbox layout there is at least one
            flexible element, with flex-grow different from 0, it will have no
            effect as there won't be any available space.The alignment is done
            after the lengths and auto margins are applied, meaning that, if in
            a Flexbox layout there is at least one flexible element, with
            flex-grow different from 0, it will have no effect as there won't be
            any available space.The alignment is done after the lengths and auto
            margins are applied, meaning that, if in a Flexbox layout there is
            at least one flexible element, with flex-grow different from 0, it
            will have no effect as there won't be any available space.
          </p>

          <div class="border-t border-black my-7"></div>

          <h2 class="text-blue69 font-bold text-3xl mb-6">Comments (4)</h2>

          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Placeholder"
              class="px-3 py-3 placeholder-indigo-800/50 text-black relative bg-white bg-white rounded text-m border-2 outline-none focus:outline-none focus:ring w-full border-blue69"
            />
          </div>

          {/* {props.comment &&
            props.length > 0 &&
            props.comment.map((comment) => (
              <div class="px-5">
                <p class="text-base text-black-300 mt-8 -fontbold">
                  {comment.email}
                </p>
                <p class="text-base text-black-300 mt-5">{comment.body}</p>
                <div class="border-t border-black my-7"></div>
              </div>
            ))} */}

          <FetchComments postId={2} />
        </div>
      </div>
      <div class="md:w-1/3"></div>
    </div>
  );
}
