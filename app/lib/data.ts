import axios from 'axios';

import { Post } from '@/app/lib/types';

const API_URL = 'https://api.tlxxzj.com/';
const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  //withCredentials: true,
});

export async function getPosts(): Promise<Post[]> {
  const response = await apiInstance.get('posts/');
  return response.data;
}

export async function getPost(id: string): Promise<Post> {
  const response = await apiInstance.get(`posts/${id}/`);
  return response.data;
}
