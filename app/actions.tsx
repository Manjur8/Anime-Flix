"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { API_BASE_URL } from "@/constant/ApiConstant";

export const fetchAnimes = async (page: number) => {
    const jsonData = await fetch(`${API_BASE_URL}/api/animes?page=${page}&limit=8&order=popularity`);

    const data = await jsonData.json();

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))
}