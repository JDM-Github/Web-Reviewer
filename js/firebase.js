import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey            : "AIzaSyCZJ3a6Uu5Uouxz_hsM_N6TAiujEX689Hs",
    authDomain        : "ccc-our-reviewer.firebaseapp.com",
    projectId         : "ccc-our-reviewer",
    storageBucket     : "ccc-our-reviewer.appspot.com",
    messagingSenderId : "218865181537",
    appId             : "1:218865181537:web:b834ba7ed02273825fdb20",
    measurementId     : "G-D64DE3C87Y"
};

const app                 = initializeApp (firebaseConfig);
const analytics           = getAnalytics  (app);
export const db           = getFirestore  (app);
export const auth         = getAuth       (app);

export const loadScreen   = document.getElementById(`loading-screen`);
export async function getAllQuiz(quizQueryDocs) {

    const newResult = [];
    quizQueryDocs.forEach((doc) => {
        let number = 1;
        let getAllQuestion = true;

        while (getAllQuestion) {
            const newDic = doc.data()[`q${number}`];
            if (newDic == null) {
                getAllQuestion = false;
                break;
            }
            newResult.push([]);
            if (newDic.current  != null) newResult[number-1].push(newDic.current );
            if (newDic.question != null) newResult[number-1].push(newDic.question);
            if (newDic.answer   != null) newResult[number-1].push(newDic.answer  );
            if (newDic.A        != null) newResult[number-1].push(newDic.A       );
            if (newDic.B        != null) newResult[number-1].push(newDic.B       );
            if (newDic.C        != null) newResult[number-1].push(newDic.C       );
            if (newDic.D        != null) newResult[number-1].push(newDic.D       );
            number++;
        }
    });
    return newResult;
}
export async function getCourseDocs(course) {
    try {
        loadScreen.style.display = "flex";
        const docRef = doc(db, "Course", course);
        const docCollection = collection(docRef, "Quiz");
        const queryColl     = await query(docCollection);
        return await getDocs(queryColl);
    } catch (error) {
        console.error("Error loading users messages: ", error);
    } finally {
        loadScreen.style.display = "none";
    }
}
export const allCourseQuiz = [
    await getAllQuiz(await getCourseDocs("ENV"))
];

