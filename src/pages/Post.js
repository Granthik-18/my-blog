import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const { slug } = useParams();
    const { userData } = useSelector((state) => state.auth);
    const [post, setPost] = useState(null);

    const navigate = useNavigate();

    const isAuthor = post && userData ? post.userId === userData.$id : false;



    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {

                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="h-screen py-8">
            <Container>
                <div className="bg-indigo-200 rounded-xl p-4">
                    <div className="w-full flex justify-center mb-4  relative ">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="border-2 border-indigo-900 rounded-md"
                        />

                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-600" className="mr-3 hover:bg-green-400 ">
                                        Edit
                                    </Button>
                                </Link>
                                <Button className="hover:bg-red-400 bg-red-600" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-6">
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                    </div>
                    <div className="browser-css">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
