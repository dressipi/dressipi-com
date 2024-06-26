---
title: 'Personalized Sportswear Looks: Garment Data is Key'
date: 2022-02-17 15:12:00 Z
published: false
image: "/uploads/SportswearOutfitsBanner.JPG"
author: Georgina Fisher
---

### Right from the start brands have showcased their product through looks and outfits: from catwalk collections to window displays, shop mannequins to advertising campaigns and on today’s social media platforms. They play a huge part in our everyday life.

At Dressipi, we have always known they are an important part of how a customer shops and due to the rise in athleisure and the casualisation of fashion, these looks are now an increasingly important tool for selling sportswear. 

Dressipi now creates up to 100 million looks for retailers with larger numbers of SKUs. Personalising recommendations and styling garments as looks in multiple ways for sportswear is different to creating “outfits” for fashion garments. In sportswear it is key to understand how different items can be used and worn for different sporting activities, whether an item can cross over into lifestyle or leisurewear and how it works with other items that customer already owns.

## Approaching personalized looks from a technical point of view

Not all garments can be matched together and their compatibility depends on factors such as activity, season, category, features, trends and sport team. It is crucial to build a system that will handle all these factors while being efficient and performant at the same time. It also must be able to tune different inputs to match potential changes in starting requirements over time.

## Apparel-Specific Attributes

The first step in building looks is reviewing the product attributes in the context of sportswear. Each garment has a number of attributes (category, season, activity, garment attributes such as fit, style, length, neckline, etc) that describe it in a uniform way and those attributes must be accurate. It’s especially important in sportswear to understand that some customers will be wearing garments to train and others for lifestyle. 

At Dressipi we combine technology, text classification and image recognition, with our sportswear stylists, to deliver the best results. For example, the neckline of a top can be described through one of 25 different attributes. That is the level of detail and accuracy Dressipi provides.

<br>
<p style="text-align:center"><img style="margin-left: 0px; width: 600px;" alt="Sample of Dressipi attributes for sports bottoms" src="/uploads/SportswearOutfits1.JPG"/></p>
<br>

As a tech company, Dressipi uses a number of technologies to make garment labeling effective. Unfortunately, Computer Vision models or Convolutional Neural Networks are still not good enough to provide 99% accurate results. Hence, we constantly work on improving those models.

## Garment Relationships: Tennis Skirt & Football Boots?!

Another thing a machine needs to know is which garment categories can be combined together and for which activity. The activity is important because rules will be different for different activities. A tennis skirt shouldn’t be styled with football boots while a team jersey can. To achieve this, we have trained our algorithms to understand those relationships.

<br>
<p style="text-align:center"><img style="margin-left: 0px; width: 600px;" alt="Example of outfit recommendations for Football and Lifestyle occasions" src="/uploads/SportswearOutfits2.JPG"/></p>
<br>

Our algorithms also handle combinations of different garment attributes and how they can be styled together. We have a set of rules where combinations of attributes that cannot go together are listed - e.g. football jerseys can only be matched with other products from the same club. Rules are written by sportswear stylists and can be easily and quickly updated as new trends may “break” rules already set. For example, the rise in athleisure meaning we can style sportswear as everyday looks. 

## Adding the personalization to personalized looks

At this stage, looks aren’t personalized yet. Personalization happens in real-time when a garment is requested. At that moment we pick the remaining garments in the look by checking if they are recommended for a user. As not all garments have an equal recommended score, they are sorted in order of descending goodness. Even though always returning the best-recommended garments sounds good in theory, in practice, that means there will be a lot of homogeneous looks. Looks’ diversity is equally important as the best-recommended garments. That is why we aggregate looks to ensure diversity and blocklist garments that have already been shown for a short period of time. Consequently, slightly less recommended garments are returned but a diversity of looks is increased.

<br>
<p style="text-align:center"><img style="margin-left: 0px; width: 600px;" alt="Example of personalized outfit recommendations for Running and Lifestyle occasions" src="/uploads/SportswearOutfits3.JPG"/></p>
<br>

## Building context into Looks

Sportswear looks have different purposes at different stages of the customer journey:

**Looks on the PDP**: Here, showing different looks for different activities is important here to show the customer the versatility of the garment and make them more likely to purchase.<br> 
**Looks on the basket page**: Creating looks on the basket page should be around trying to cross-sell products. Increase the AOV by promoting products with a lower price such as a water bottle or a foam roller.<br> 
**Looks in post-purchase emails**: Get the customer to come back and buy again by adding looks built around their newly bought item to post-purchase emails. Again, showing the versatility of the garment for different activities and personalized for them - these customers are not new now and you will have information on their preferences.

## Conclusion

Dressipi is unique in its ability to deliver personalized looks. Although ‘What The Model Is Wearing’ delivers some uplift (~1%), personalizing looks will deliver an additional 2-3% incremental revenue, demonstrating that there is a clear user appetite for this. The success has been proven by numerous AB tests with our clients, improving revenue, conversion, AOV and retention whilst also inspiring the customer and creating amazing experiences.

Personalized looks tell stories about garments and help show customers how different garments can be styled together. There will always be a need for outfitting and whether your vision is for a customer to try on looks through AR or VR, you will still need the Dressipi technology to pick out the best look for you.

If you’d like to learn how to get started on delivering personalized looks at scale to your customers, please get in touch.