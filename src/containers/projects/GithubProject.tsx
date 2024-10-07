import { ReviewCard } from "@/components/ui/marquee";
import React from "react";

export default async function GithubProject() {
  const repos = await fetch("https://api.github.com/users/vuvandinh123/repos")
    .then(async (res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const payload: any = await res.json();
      return payload.map((repo: any) => ({
        name: repo.name,
        id: repo.id,
        description: repo.description,
        url: repo.html_url,
        created_at: repo.created_at,
        language: repo.language,
        start: repo.stargazers_count,
        avatar: repo.owner.avatar_url,
        username: repo.owner.login,
        forks: repo.forks_count,
      }));
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return [];
    });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {repos.map((repo: any) => (
        <ReviewCard className="w-full" key={repo.id} {...repo}></ReviewCard>
      ))}
    </div>
  );
}
