import Dexie from 'dexie';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/modules/campaign/entities/post.model';
import { Hashtag } from 'src/app/modules/campaign/entities/hashtag.model';

@Injectable({
  providedIn: "root",
})
export class DexieService extends Dexie {

    public yourPosts: Dexie.Table<Post, number>;
    public similarPosts: Dexie.Table<Post, number>;
    public searchedHashtags: Dexie.Table<Hashtag, number>;
    public relatedHashtags: Dexie.Table<Hashtag, number>;

      constructor() {
        super('CampaignDB');
        this.version(1).stores({
            yourPosts: '++id, imageUrl, *tags, uploadedOn, likesCount, commentCount',
            similarPosts: '++id, imageUrl, *tags, uploadedOn, likesCount, commentCount',
            searchedHashtags: '++id, name, removable',
            relatedHashtags: '++id, name, removable',
        });
      }
}