import { Component, OnInit } from "@angular/core";
import { CampaignService } from "../../services/capaign.service";
import { PostsService } from "src/app/core/database/services/posts.service";
import { HashtagService } from "src/app/core/database/services/hastag.service";

@Component({
  selector: "app-campaign-details",
  templateUrl: "./campaign-details.component.html",
  styleUrls: ["./campaign-details.component.scss"],
})
export class CampaignDetailsComponent implements OnInit {
  yourPosts = [];
  similarPosts = [];
  similarPostsCount;
  searchedHashtags = [];
  availableHashtags = [];

  constructor(
    private campaignService: CampaignService,
    private postsService: PostsService,
    private hashtagService: HashtagService
  ) {}

  ngOnInit() {
    this.fakeSimilarPostSeeder();
    this.fakeYourPostSeeder();

    this.fetchMandatoryHashtags();
    this.fetchRelatedHashtags();
  }

  fetchRelatedHashtags() {
    this.hashtagService.getAllRelatedHashtags().then((result) => {
      // console.log("hashtag result ", result);
      if (result.length === 0) {
        this.campaignService.getRelatedHashtags().subscribe((res: any) => {
          if (!!res) {
            let exists = false;
            this.searchedHashtags.map((item) => {
              if (item.id == res[0].id) {
                exists = true;
              }
            });

            if (!exists) {
              this.availableHashtags = res;
              this.hashtagService.addAllToRelatedHashtags(res);
            }
          }
        });
      } else {
        this.availableHashtags = result;
      }
    });
  }

  fetchMandatoryHashtags() {
    this.hashtagService.getAllSelectedHashtags().then((result) => {
      // console.log("hashtag result ", result);
      if (result.length === 0) {
        this.campaignService.getMandatoryHashtags().subscribe((res: any) => {
          if (!!res) {
            this.searchedHashtags = res;
            this.hashtagService.addAllToSearchedHashtags(res);

            this.fetchYourPosts(this.searchedHashtags);
            this.fetchSimilarPosts(this.searchedHashtags);
          }
        });
      } else {
        this.searchedHashtags = result;

        console.log('this.searchedHashtags ', this.searchedHashtags);
        this.fetchYourPosts(this.searchedHashtags);
        this.fetchSimilarPosts(this.searchedHashtags);
      }

    });
  }

  fakeYourPostSeeder() {
    this.campaignService.getAllYourPosts().subscribe((res) => {
      if (!!res) {
        this.postsService.addAllToYourPosts(res);
      }
    });
  }

  fakeSimilarPostSeeder() {
    this.campaignService.getAllSimilarPosts().subscribe((res) => {
      if (!!res) {
        this.postsService.addAllToSimilarPosts(res);
      }
    });
  }

  fetchSimilarPosts(hashtags) {
    let tags = hashtags.map((item) => item.name);
    this.postsService.searchSimilarPosts(tags).then((result) => {
      // console.log("your result from db ", result)
        this.similarPosts = result;
        this.similarPostsCount = result.length;
    });
  }

  fetchYourPosts(hashtags) {
    let tags = hashtags.map((item) => item.name);
    // console.log("your tags ", tags);
    this.postsService.searchYourPosts(tags).then((result) => {
        this.yourPosts = result;
    });
  }

  addToSearchedHashtags(hashtag, index) {
    this.searchedHashtags.push(hashtag);
    this.availableHashtags.splice(index, 1);
    this.hashtagService.addToSearchedHashtags(hashtag);
    this.hashtagService.removeRelatedHashtag(hashtag.id);
    this.fetchYourPosts(this.searchedHashtags);
    this.fetchSimilarPosts(this.searchedHashtags);
  }

  addToAvailableHashtags(hashtag, index) {
    if (hashtag.removable) {
      this.availableHashtags.push(hashtag);
      this.searchedHashtags.splice(index, 1);
      this.hashtagService.removeSearchedHashtag(hashtag);
      this.hashtagService.addToRelatedHashtags(hashtag.id);
      this.fetchYourPosts(this.searchedHashtags);
      this.fetchSimilarPosts(this.searchedHashtags);
    }
  }
}

