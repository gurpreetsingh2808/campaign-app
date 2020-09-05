import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { DexieService } from "./dexie.service";
import { Hashtag } from 'src/app/modules/campaign/entities/hashtag.model';

@Injectable({
  providedIn: "root"
})
export class HashtagService extends Dexie {
    
  public searchedHashtags: Dexie.Table<Hashtag, number>; // id is number in this case
  public relatedHashtags: Dexie.Table<Hashtag, number>; // id is number in this case

  constructor(private dexieService: DexieService) {
    super('CampaignDB');
    this.searchedHashtags = this.dexieService.table("searchedHashtags");
    this.relatedHashtags = this.dexieService.table("relatedHashtags");
  }

  getAllSelectedHashtags() {
    return this.searchedHashtags.toArray();
  }

  addAllToSearchedHashtags(hashtags) {
    for(let i=0; i<hashtags.length; i++) {
      this.addToSearchedHashtags(hashtags[i]);
    }
  }

  addToSearchedHashtags(data) {
    return this.searchedHashtags.add(data);
  }

  updateSearchedHashtag(id, data) {
    return this.searchedHashtags.update(id, data);
  }

  removeSearchedHashtag(id) {
    return this.searchedHashtags.delete(id);
  }

  // Methods for related hashtags

  getAllRelatedHashtags() {
    return this.relatedHashtags.toArray();
  }

  addAllToRelatedHashtags(hashtags) {
    for(let i=0; i<hashtags.length; i++) {
      this.addToRelatedHashtags(hashtags[i]);
    }
  }

  addToRelatedHashtags(data) {
    return this.relatedHashtags.add(data);
  }

  updateRelatedHashtag(id, data) {
    return this.relatedHashtags.update(id, data);
  }

  removeRelatedHashtag(id) {
    return this.relatedHashtags.delete(id);
  }

}
