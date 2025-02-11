import config from "../config/config.js";
import { Client, Databases, ID, Storage, Query, Flag } from "appwrite";
import { toast } from "react-toastify";

export class Service {
    client = new Client()
    databases;
    bucket;
    constructor() {

        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            // throw error
            toast.error(`updatePost ${error}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            // throw error;
            toast.error(`deletePost ${error}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // return false;
        }
    }

    async getPost(slug) {
        try {

            const result = await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )

            return result
        } catch (error) {
            // throw error;
            toast.error(`getPost ${error}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // return false;
        }
    }

    async getPosts(queries = [Query?.equal('status', 'active')]) {
        try {
            return await this.databases?.listDocuments(
                config?.appwriteDatabaseId,
                config?.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            // throw error
            // toast.error(`getPosts ${error}`, {
            //     position: "top-center",
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });

        }
    }

    // File Upload

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucket,
                ID.unique(),
                file,
            )
        }
        catch (error) {
            toast.error(`uploadFile ${error}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucket,
                fileId = null,
            )
            return true
        } catch (error) {
            toast.error(`deleteFile ${error}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucket,
            fileId
        )
    }
}

const service = new Service()
export default service