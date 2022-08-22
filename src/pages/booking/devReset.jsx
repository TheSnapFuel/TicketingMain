import Head from 'next/head';
import Image from 'next/image';

import  { app, database } from '../../../firebase/clientApp.ts';
import { collection, getDoc, updateDoc, doc } from 'firebase/firestore';

const saveNote = () => {
    const inputDataRef = doc(database, "inputData", "storageJSONtickets");
    console.log(inputDataRef)
    updateDoc(inputDataRef, {JSONticketsAll:"ok ksasdsaWor"})
}

const getNotes = async() => {
    const inputDataRef = doc(database, "inputData", "storageJSONtickets");
    const docSnap = await getDoc(inputDataRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()["JSONticketsAll"]);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}

const dbInstance = collection(database, 'inputData');
        <div className="flex items-center justify-between">
            <span className="text-sm text-[#585757]">
                Resets the localStorage
            </span>
            <label
                htmlFor="status"
                className="inline-flex relative items-center mb-4 cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    id="status"
                    className="sr-only peer"
                    onChange={e => {
                        localStorage.setItem("tickets","{}")
                    }}
                />
                <div className="w-11 h-6 bg-transparent ring-2 ring-gray-300/25 peer-checked:ring-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-[6px] peer-checked:after:bg-accent after:border-gray-300/25 after:border-2 peer-checked:after:border-0 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
        </div>
export default function Home() {
	return (
        <div className="col-span-12">
        <label htmlFor="status">Dev Rest:</label>
        <div className="flex items-center justify-between">
            <span className="text-sm text-[#585757]">
                Resets the localStorage
            </span>
            <label
                htmlFor="status"
                className="inline-flex relative items-center mb-4 cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    id="status"
                    className="sr-only peer"
                    onChange={e => {
                        localStorage.setItem("tickets","{}")
                    }}
                />
                <div className="w-11 h-6 bg-transparent ring-2 ring-gray-300/25 peer-checked:ring-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-[6px] peer-checked:after:bg-accent after:border-gray-300/25 after:border-2 peer-checked:after:border-0 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
        </div>
        <button
            className="w-40 mb-2 bg-accent py-2 px-6 rounded-xl shadow-sm shadow-accent transform hover:scale-110 duration-200"
            type="submit"
            onClick={() => 
                {
                saveNote()
                }}>
            add
        </button>
        <button
            className="w-40 mb-2 bg-accent py-2 px-6 rounded-xl shadow-sm shadow-accent transform hover:scale-110 duration-200"
            type="submit"
            onClick={() => 
                {
                getNotes()
                }}>
            get
        </button>
        <hr className="mt-4 border-[#292b2e] mb-8" />
    </div>
	);
}
