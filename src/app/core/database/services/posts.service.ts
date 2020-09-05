import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { DexieService } from "./dexie.service";
import { Post } from "src/app/modules/campaign/entities/post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService extends Dexie {
  public yourPosts: Dexie.Table<Post, number>; // id is number in this case
  public similarPosts: Dexie.Table<Post, number>; // id is number in this case

  constructor(private dexieService: DexieService) {
    super("CampaignDB");
    this.yourPosts = this.dexieService.table("yourPosts");
    this.similarPosts = this.dexieService.table("similarPosts");
  }

  getAllYourPosts() {
    return this.yourPosts.toArray();
  }

  searchYourPosts(hashtags) {
    return this.yourPosts
      .where("tags")
      .anyOf(hashtags).toArray();
  }

  addAllToYourPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
      this.addToYourPosts(posts[i]);
    }
  }

  addToYourPosts(data) {
    return this.yourPosts.add(data);
  }

  updateYourPost(id, data) {
    return this.yourPosts.update(id, data);
  }

  removeYourPost(id) {
    return this.yourPosts.delete(id);
  }

  // Methods related to similar posts

  getAllSimilarPosts() {
    return this.similarPosts.toArray();
  }

  searchSimilarPosts(hashtags) {
    return this.similarPosts
      .where("tags")
      .anyOf(hashtags).toArray();
  }

  addAllToSimilarPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
      this.addToSimilarPosts(posts[i]);
    }
  }

  addToSimilarPosts(data) {
    return this.similarPosts.add(data);
  }

  updateSimilarPost(id, data) {
    return this.similarPosts.update(id, data);
  }

  removeSimilarPost(id) {
    return this.similarPosts.delete(id);
  }
}
