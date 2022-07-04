import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";



export default function NewsGrid() {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, [url]);

  if (post)
    return (
      <div>
        <div class="bg-blue69">
          <div class="flex flex-row justify-center lg:w-7/12 lg:mx-auto md:mx-10">
            <div class="flex basis-auto">
              <p class="text-white font-normal inline text-lg">
                We are now hosting events with Zoom Webinars!
              </p>
              <p class="text-white font-normal text-lg pl-8 underline">
                Find out more
              </p>
            </div>
            <p class="text-white font-normal text-lg ml-auto text-right">X</p>
          </div>
        </div>

        <div class=" flex flex-col items-center my-9 mx-9 sm:mx-14 md:mx-32 xl:mx-96 text-center">
          <h1 class="text-black font-semibold text-5xl">Latest News</h1>
          <p class="text-lg text-black-300 mt-5">
            The alignment is done after the lengths and auto margins are
            applied, meaning that, if in a Flexbox layout there is at least one
            flexible element, with flex-grow different from 0, it will have no
            effect as there won't be any available space.
          </p>
        </div>

        <div class="flex gap-y-8 gap-x-8 flex-row flex-wrap md:mx-auto md:w-5/6 lg:w-4/6 lg:mx-auto sm:mx-10">
          {post &&
            post.length > 0 &&
            post.map((post) => (

              <div class="grow lg:basis-1/4 sm:w-full md:basis-1/3 text-center shadow-md shadow-slate-300 rounded-2xl py-11 px-8">
                <div class="relative">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                      class="shadow rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <div class="bg-blue69 absolute blue69 items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block top-auto bottom-3 left-auto right-2">
                    <span>Press News</span>
                  </div>
                </div>

                <div>
                  <h3 class="mt-2 text-black font-semibold text-lg">
                    {post.title}
                  </h3>
                  <p class="mt-2 text-base text-gray-500 text-justify">
                    {post.body}
                  </p>
                </div>
                <div class="text-left mt-3.5">
                <Link to="/SecondPage" state={post.id} class="font-bold">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}
