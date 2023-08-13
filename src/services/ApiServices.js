import dotenv from "dotenv";
dotenv.config();

console.log(process.env);
const API_URL = process.env.API_URL;

export async function getAllVideos() {
  const response = await fetch(`${API_URL}/api/v1/videos/thumbnail`);
  console.log(response);
  return await response.json();
}

export async function getVideo(videoId) {
  const response = await fetch(`${API_URL}/api/v1/video/${videoId}`);
  return await response.json();
}

export async function postComment(data, videoID) {
  console.log(data);
  const response = await fetch(`${API_URL}/api/v1/comments/${videoID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function getComments(videoId) {
  const response = await fetch(`${API_URL}/api/v1/comments/${videoId}`);
  return await response.json();
}

export async function getProducts(videoId) {
  const response = await fetch(`${API_URL}/api/v1/products/${videoId}`);
  return await response.json();
}
