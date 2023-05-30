const assert = require('assert');
// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
    
    I.amOnPage('/');
    I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item__title');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });


  Scenario('unliking one restaurant', async ({ I }) => {
    
  I.amOnPage('/');
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

 
  I.amOnPage('/#/like');
  I.seeElement('.post-item__title a');
  const firstLikedRestaurant = locate('.post-item__title a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

 
  I.seeElement('.title-detail');
  const likedRestaurantTitle = await I.grabTextFrom('.title-detail');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  });