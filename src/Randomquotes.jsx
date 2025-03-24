import React, { useState, useEffect } from "react";

export default function RandomQuotes() {
  const [data, setData] = useState(null);
  const url = "https://api.api-ninjas.com/v1/quotes";
  const apiKey = "S7qK0qGeNfCRM24DxT1T9g==uMeVfsKkBxCpbCRf";

  async function fetching() {
    try {
      let res = await fetch(url, {
        headers: { "X-Api-Key": apiKey },
      });

      if (!res.ok) {
        console.error("Error fetching data");
        return;
      }

      let ans = await res.json();
      setData(ans[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">Random Quote</h2>
      {data ? (
        <p className="mt-2 text-gray-700">
          "{data.quote}" - <span className="font-semibold">{data.author}</span>
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <button
        onClick={fetching}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Get Another
      </button>
    </div>
  );
}
