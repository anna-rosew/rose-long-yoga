import React, { useState } from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import FoodImg from "../../styles/imgs/blog/food_blog.png";
import FoodImg2 from "../../styles/imgs/blog/food_blog2.png";
import arrow from "../../styles/imgs/icons/arrow-next.svg";
import { Link } from "react-router-dom";

export default function InsideOutArticle() {
  const [copied, setCopied] = useState(false);

  const onClick = (sectionId) => {
    window.location.href = `#${sectionId}`;
  };

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
          <strong>ARTICLE: </strong>LONG READ
        </h3>
        <h1>Moving from Outside In to Inside Out</h1>
        <p className="article-summary">
          Explore the journey of shifting from a consumer-oriented mindset to an
          inward-focused approach, and discover how making small, conscious
          choices can lead to profound personal transformation.
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={FoodImg}
            className="blog-cover-img"
            alt="Woman doing tree pose outside at sunrise."
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
                  <strong>01 Aug 2024</strong>
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
          Image Courtesy of Chad Stembridge via{" "}
          <a
            href="https://unsplash.com/photos/green-leafed-plant-in-shallow-focus-photography--8FjF1p-aw0"
            alt="unsplash"
            rel="nonreferrer"
          >
            Unsplash
          </a>
        </p>
        <div className="article-intro">
          <div className="contents">
            <h3>CONTENTS:</h3>
            <ul>
              <li
                className="contents-link"
                onClick={() => onClick("introduction")}
              >
                Introduction
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("outside-in-living")}
              >
                Outside In Living
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("point-of-breakdown")}
              >
                The Point of Breakdown
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("inside-out-living")}
              >
                Inside Out Living
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("conscious-practices")}
              >
                Conscious Practices
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
              <li
                className="contents-link"
                onClick={() => onClick("start-small")}
              >
                Start Small
                <img src={arrow} alt="arrow" className="arrow-nav" />
              </li>
            </ul>
          </div>
          <div className="article-intro-text" id="introduction">
            <h2 className="article-subheading">Introduction</h2>
            <p>
              We live in a consumer society where solutions lie outside of us—we
              can buy happiness in a holiday deal, self-esteem in a new outfit,
              relaxation in a spa, success by beating the competition. We are
              bombarded with these messages all day, and for most of us, we
              become unconsciously programmed to believe them. These beliefs
              then power our thoughts, actions, and reactions. This is how we
              find ourselves in Outside In Living.
            </p>
            <p>
              When I’m sad, I reach for a slice of cake. When I’m angry, I pour
              myself a glass of wine. When I’m blue, I buy myself something
              nice. When I’m tired, I watch TV. There’s nothing wrong with any
              of these choices, but they are only temporary solutions. My
              internal programming remains. The next time I’m sad, I reach for a
              slice of cake... and so my life rolls on.
            </p>
            <p>
              For most of us, over time, this leads to feelings of
              disappointment and resignation, and fuels old stories of
              shame—‘I’m not good enough’, ‘I can’t do it’, ‘I’m a failure’,
              ‘I’m the problem’. We begin to identify ourselves as being that
              way and the changes we long for seem to happen for other, more
              fortunate people.
            </p>
            <p>So how do I break the pattern? Inside Out Living.</p>
          </div>
        </div>
        <div className="main-article">
          <h3 id="outside-in-living">Outside In Living</h3>
          <p>
            When you attend to your inner reality, you discover the solutions
            can be unlocked within you. Hold on, that’s so simple, why isn’t
            everyone doing it? Possibly because the messages from the outside
            world are so loud and persistent. Possibly because it’s a level of
            intimacy with myself that feels confronting. Possibly because my
            inner reality is not all flowers and butterflies and it can be messy
            and challenging at times. Possibly because it’s unknown and I can
            find security and comfort in the familiar. What are your reasons?
          </p>

          <h3 id="point-of-breakdown">The Point of Breakdown</h3>
          <p>
            I was practicing Outside In Living in my childhood, my teens, my
            twenties, and into my thirties, and then something changed. My
            choice of external solutions was so poor (booze, recreational drugs,
            men, saving the world—not an easy formula to live by!), and the
            level of pain and shame so great that I was forced to look at how I
            was living. That point of breakdown in my life led to the
            breakthrough of Inside Out Living.
          </p>

          <h3 id="inside-out-living">Inside Out Living</h3>
          <p>
            Inside Out Living is not a formula that is guaranteed to bring peace
            and love every minute of every day. It allows us to see the reality
            of living by our beliefs, our conditioning, and our habitual
            programming. This can be challenging and unwelcome at times. Do I
            want to know how self-centred/stubborn/arrogant/fearful/angry/
            judgemental I can be? NO! Seeing these things, I can easily slip
            into shame and want to hide away. But at a deeper level, I know it’s
            not personal; this is the human condition. And by seeing my patterns
            and beliefs, I have the chance to make new choices. I learn from
            those who’ve gone before me and share with others on the path so I
            know I’m not alone, and I can find the strength to keep going, a day
            at a time.
          </p>
          <p>
            If you’re thinking—this sounds great, but it sounds like hard work.
            Then think about where you are struggling and consider the impact of
            that on you and your life. Start small. Small steps lead to change
            that becomes embedded within you over time.
          </p>

          <h3 id="conscious-practices">Conscious Practices</h3>
          <p>
            In my experience, as I release old beliefs and programming, there is
            more space and I find I’m more aware of how I’m feeling, what I’m
            thinking, what’s driving me. More space to respond rather than
            react. I experience increased vitality. Love becomes more accessible
            as a state of being (rather than a response to someone else loving
            me). Inside Out Living is no longer an act of faith, but an
            experiential reality. And when I do fall back into Outside In
            Living, as I inevitably will, I find it happens less often and I
            spend less time there. I come to know that I have the inner
            resources to deal with it.
          </p>
          <p>
            Conscious practices such as meditation, journaling, being in nature,
            exercise, etc., have been key to this transformation. If I weren’t
            meditating regularly and keeping myself fit and healthy, I know I
            would not have much to give others. These practices create a space
            in my body and mind that I live from. They allow me to more readily
            notice when I’m moving towards Outside In Living and to course
            correct as I go.
          </p>

          <h3 id="start-small">Start Small</h3>
          <p>What’s calling to you?</p>
          <p>
            Begin with the smallest step that makes sense for you. A step that
            you know you can take, today.
          </p>
          <div className="article-highlight">
            <p>
              "Inside Out Living is no longer an act of faith, but an
              experiential reality."
            </p>
          </div>
          <div className="featured-image">
            <div className="featured-image-container">
              <BlurryImage
                src={FoodImg2}
                className="blog-feature-img"
                alt="Image of fruits and a healthy meal."
              />
            </div>
            <p className="image-caption">
              Image Courtesy of Brooke Larke via{" "}
              <a
                href="https://unsplash.com/photos/variety-of-sliced-fruits-08bOYnH_r_E"
                alt="unsplash"
                rel="nonreferrer"
              >
                Unsplash
              </a>
            </p>
          </div>
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
