import {doc, getDocs, query, setDoc, where} from "firebase/firestore/lite";
import {dbComments} from "@/db/connectDB";

export const setComment = async (comment) => {
    const refDoc = doc(dbComments)
    try {
        await setDoc(refDoc, {
            ...comment,
            dbID: refDoc.id
        })
    } catch (e) {
        console.error(e)
    }
}
export const getByPost = async (postId) => {
    return (await getDocs(query(dbComments, where('postId', '==', postId)))).docs
}