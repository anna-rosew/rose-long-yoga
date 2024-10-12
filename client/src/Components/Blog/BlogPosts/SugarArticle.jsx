import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import SugarImg from "../../styles/imgs/blog/sugar_blog.png"; // Replace with actual image path
import SweetenersImg from "../../styles/imgs/blog/sugar_blog2.png"; // Replace with actual image path
import { Link } from "react-router-dom";

export default function SugarArticle() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="container">
      <div className="blog-article">
        <h3 className="subtitle">
          <strong>ARTICLE: </strong>HEALTH & NUTRITION
        </h3>
        <h1>Sugar - Where Do I Go from Here?</h1>
        <p className="article-summary">
          Learn about the impact of sugar on your health, how to recognize
          hidden sugars in your diet, and discover healthier alternatives to
          satisfy your sweet tooth.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={SugarImg}
            className="blog-cover-img"
            alt="Sugar cubes on a table."
          />
          <div className="overlay-row">
            <div style={{ display: "flex" }}>
              <div className="column" style={{ marginRight: "20px" }}>
                <p>Written by</p>
                <p>
                  <strong>Rose Long</strong>
                </p>
              </div>
              <div className="column">
                <p>Published on</p>
                <p>
                  <strong>14 Aug 2024</strong>
                </p>
              </div>
            </div>
            <div className="button-column">
              {copied && <p className="copied-message">Copied!</p>}
              <button className="copy-button" onClick={handleCopy}>
                COPY LINK
              </button>
            </div>
          </div>
        </div>
        <p className="image-caption">
          Image Courtesy of Daniel Kraus via{" "}
          <a
            href="https://unsplash.com/photos/a-pile-of-sugar-cubes-sitting-on-top-of-each-other-TXVntZ190Ao"
            alt="unsplash"
            rel="nonreferrer"
          >
            Unsplash
          </a>
        </p>
        <div className="article-intro-short">
          <div className="article-intro-text">
            <p>
              You may be able to take it or leave it, or it may have been your
              first true love. If you have a sweet tooth, sugar is a natural fix
              when you're feeling tired or in need of comfort. Or you may
              associate it with enjoying yourself and having fun. Whatever your
              relationship and the associations you have with the sweet stuff,
              we now know just how powerful sugar is. Research shows that its
              effects are as powerful and addictive as cocaine, yikes!
            </p>
            <p>
              What I find helpful to know is how much sugar I'm eating, so the
              first tip is...
            </p>
          </div>
        </div>
        <div className="main-article">
          <div className="article-section" id="read-label">
            <h2 className="article-subheading">Read the Label</h2>
            <p>
              Look at the 'carbs as sugars' on the nutrition panel - this
              includes both natural and added sugars; less than 5g per 100g is
              low, more than 15g per 100g is high.
            </p>
            <p>
              Here are some examples to give you a picture of what we're talking
              about here:
            </p>
            <ul className="article-list">
              <li>
                A large single biscuit with 18g of sugar is equal to 4 1/2 cubes
                of sugar.
              </li>
              <li>
                A medium sized chocolate bar with 24g of sugar is equal to 6
                cubes of sugar.
              </li>
              <li>
                An 8.3oz can of energy drink with 27g of sugar is equal to 7
                cubes of sugar.
              </li>
              <li>
                One pint of vanilla ice cream with 84g of sugar is equal to 21
                cubes of sugar.
              </li>
              <li>
                A liter of fizzy drink with 124g of sugar is equal to 31 cubes
                of sugar.
              </li>
              <li>
                A glass of white wine can contain anything from less than 1g of
                sugar (less than a quarter of a teaspoon) up to 6g (one and a
                half teaspoons) per glass.
              </li>
            </ul>
          </div>
          <div className="article-section" id="daily-allowance">
            <h2 className="article-subheading">What's My Daily Allowance?</h2>
            <p>
              There are two types of sugar - naturally occurring sugars and
              added sugar. The recommendations from the World Health
              Organization (WHO) are that only 5% of your daily calorie intake
              should consist of added sugars. This equates to approximately five
              to six teaspoons (25g) for women and seven to eight teaspoons
              (35g) for men. And many health professionals think this is a
              little too high for most of us.
            </p>
          </div>
          <div className="article-section" id="recognize-sugar">
            <h2 className="article-subheading">
              How to Recognize Sugar in Ingredients
            </h2>
            <p>
              Sugars ending in -ose include: Sucrose, Maltose, Dextrose,
              Fructose, Glucose, Galactose, Lactose, High fructose corn syrup,
              Glucose solids.
            </p>
            <p>Regardless of how they sound, the following are all sugar:</p>
            <ul className="article-list">
              <li>
                Cane juice, Dehydrated cane juice, Cane juice solids, Cane juice
                crystals
              </li>
              <li>Dextrin, Maltodextrin, Dextran</li>
              <li>Barley malt, Beet sugar, Corn syrup, Corn syrup solids</li>
              <li>Caramel, Buttered syrup, Carob syrup</li>
              <li>Brown sugar, Date sugar, Malt syrup</li>
              <li>Diatase, Diatastic malt</li>
              <li>
                Fruit juice, Fruit juice concentrate, Dehydrated fruit juice,
                Fruit juice crystals
              </li>
              <li>Golden syrup, Turbinado, Sorghum syrup, Refiner's syrup</li>
              <li>Ethyl maltol, Maple syrup, Yellow sugar</li>
            </ul>
          </div>
          <div className="article-section" id="unhealthy-sweeteners">
            <h2 className="article-subheading">
              Top 4 Sweeteners That Are Shown to Be Unhealthy
            </h2>
            <p>
              Aspartame, Acesulfame-K, Sucralose, Saccharin. For more info visit{" "}
              <a
                href="https://www.nhs.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.nhs.uk
              </a>{" "}
              and search artificial sweeteners.
            </p>
          </div>
        </div>
        <div className="article-highlight">
          <p>What are the healthier options?</p>
          <p>
            Try this: Naturally Green Stevia Powder, Natural Sweetener, from a
            South American plant, contains no sugars, just naturally sweet
            tasting. Low GI so doesn’t mess with your blood sugar levels.
          </p>
          <p>
            Try this: Xylitol Natural Sweetener. Found in fibrous fruits and
            vegetables, naturally low GI.
          </p>
          <p>
            Try this: Organic Coconut Sugar. Naturally nutritious and low GI.
            There is a question about sustainability with this one - there are
            ones that are labeled 'sustainable', though be warned, labels are
            like the media, they don’t always tell the truth!
          </p>
        </div>
        <div className="featured-image">
          <div className="featured-image-container">
            <BlurryImage
              src={SweetenersImg}
              className="blog-feature-img"
              alt="Different types of natural sweeteners."
            />
          </div>
          <p className="image-caption">
            Image Courtesy of Towfiqu Barbhuiya via{" "}
            <a
              href="https://unsplash.com/photos/person-holding-white-ceramic-mug-N2n01mhpbmg"
              alt="unsplash"
              rel="nonreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
      <div className="article-bottom-buttons">
        <Link to="/blog" className="back-button">
          MORE CONTENT
        </Link>
        <Link to="/work" className="journey-button">
          START YOUR JOURNEY
        </Link>
      </div>
    </div>
  );
}
