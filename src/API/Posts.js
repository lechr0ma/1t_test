import {addDoc, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, startAt} from "firebase/firestore/lite";
import {dbPosts} from "@/db/connectDB";


export const addPost = async (post) => {
    try {
        const docRef = await addDoc(dbPosts, {
            ...post
        })
    } catch (e) {
        console.error(e)
    }
}
export const setPost = async (post) => {
    const refDoc = doc(dbPosts)
    try {
        await setDoc(refDoc, {
            ...post,
            dbID: refDoc.id
        })
    } catch (e) {
        console.error(e)
    }
}
export const getAllPosts = () => {
    return getDocs(dbPosts).then((res) => {
        return res.docs.map((el) => el.data())
    })
}

export const getOne = async (id) => {
    const refDoc = doc(dbPosts, id)
    return (await getDoc(refDoc)).data()
}

export const getLimit = async (page, lim) => {
    const total = (await getDocs(query(dbPosts, orderBy('id')))).docs
    const startPost = total[lim * (page - 1)]
    const first = query(dbPosts, orderBy('id'), limit(lim), startAt(startPost))
    const postsSnap = (await getDocs(first)).docs
    postsSnap.forEach(e => console.log(e.data().id))
    return {total, postsSnap}
}
export const deletePost = async (id) => {
    return await deleteDoc(doc(dbPosts, id))
}
