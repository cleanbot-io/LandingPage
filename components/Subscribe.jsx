"use client";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
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
    <div className="relative bg-custom-blue flex flex-col items-baseline justify-center p-40 gap-4 rounded-md">
      <h2 className="text-2xl text-white font-bold">Subscribe for Updates</h2>
      <div className="relative">
        <div className="relative flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 pl-4 pr-32 border border-white rounded-full"
            disabled={loading}
          />
          <button
            className="absolute right-1 top-1 bg-black text-white text-custom-blue p-2 pl-6 pr-6 rounded-full"
            onClick={handleSubscribe}
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </div>
      <p className="text-white">
        Be the first to hear about our newest product updates!
      </p>
    </div>
  );
}

export default Subscribe;
