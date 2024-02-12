"use client";
import React, { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null); // Change the type to string | null

  async function query(data: any) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result: Blob = await response.blob();

      // Create a URL for the Blob
      const imageUrl = URL.createObjectURL(result);
      setImageUrl(imageUrl);

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const handleGenerateImage = async () => {
    try {
      const result = await query({ inputs: text });
      console.log("result", result);
      // Update the state or perform other actions with the result
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <>
    <div className="text-3xl font-bold text-center m-3">Image Genertaor Tool</div>
    {/* <div className="text-lg font-bold text-center m-3">Convert Text to Image</div> */}
    <div className="">
      <div className="   p-4">
        
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Prompt Here..."
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex justify-center m-4">
          <button className="border border-gray-300 rounded-lg p-3 bg-black text-white" onClick={handleGenerateImage}>
            Generate Image
          </button>
        </div>
        {imageUrl && (
          <img className="ml-8" src={imageUrl} height={250} width={300} alt="Generated Image" />
        )}
      </div>
      </div>

      {/* <form className='p-6'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..."
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleGenerateImage} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search </button>
        {imageUrl && 

<img src={imageUrl} height={200} width={200} alt="Generated Image" />}
    </div>
</form> */}
    </>
  );
}
