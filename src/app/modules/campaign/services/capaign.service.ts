import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CampaignService {
  constructor(private httpClient: HttpClient) {}

  getAllYourPosts() {
    return this.httpClient.get<any>("assets/mock/your_posts.json");
  }

  getYourPosts(hashtags) {
    return this.httpClient.get<any>("assets/mock/your_posts.json").pipe(
      map((res) => {
        let filteredItems = [];

        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < hashtags.length; j++) {
            if (res[i].tags.includes(hashtags[j])) {
              filteredItems.push(res[i]);
              break;
            }
          }
        }
        return filteredItems;
      })
    );
  }

  getAllSimilarPosts() {
    return this.httpClient.get<any>("assets/mock/similar_posts.json");
  }

  getSimilarPosts(hashtags) {
    return this.httpClient.get<any>("assets/mock/similar_posts.json").pipe(
      map((res) => {
        let filteredItems = [];

        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < hashtags.length; j++) {
            if (res[i].tags.includes(hashtags[j])) {
              filteredItems.push(res[i]);
              break;
            }
          }
        }
        return filteredItems;
      })
    );
  }

  getMandatoryHashtags() {
    return this.httpClient.get<any>("assets/mock/mandatory_hashtags.json");
  }

  getRelatedHashtags() {
    return this.httpClient.get<any>("assets/mock/related_hashtags.json");
  }
}
