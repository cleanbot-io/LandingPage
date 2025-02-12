"use client";

import React, { useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import {  toast } from "react-toastify";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      // Query Firestore to check if the email already exists
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.error("This email is already subscribed!");
      } else {
        // Add the email to the Firestore collection if it's not already there
        await addDoc(collection(db, "users"), { email });
        toast.success("Subscribed successfully!");
        setEmail(""); // Clear input after success
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Failed to subscribe. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-custom-blue flex flex-col items-center justify-center p-8 gap-4 rounded-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl text-white font-bold text-center">Subscribe for Updates</h2>
      <div className="w-full relative flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 pl-4 w-full border border-white rounded-full"
          disabled={loading}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
          onClick={handleSubscribe}
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      <p className="text-white text-center">
        Be the first to hear about our newest product updates!
      </p>
    </div>
  );
  
}

export default Subscribe;
