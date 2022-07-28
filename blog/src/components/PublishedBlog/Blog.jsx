import React from "react";
import "./Blog.css";

function Blog() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div className="cont-blog">
        <div className="blog-title">
          <h1 className="title">My First Blog</h1>
        </div>
        <div className="blog-img"></div>
        <div className="blog-desc">
          <h1 className="desc-head">Description</h1>
          <p className="description">
            Gambit Esports became the champion of VCT 2021: Stage 3 Masters
            Berlin. In the grand final of the championship, the Russian team
            beat Team Envy with a score of 3: 0, thus earning $ 225,000. <br />
            <br />
            The final meeting began on the Bind map, which became the choice of
            the Russian team. However, the first half was dominated by the North
            Americans, who showed solid defense and won the half with a score of
            7: 5. But after the change of sides, Gambit already managed to seize
            the advantage, at some point and even got a chance to close the
            card. Nevertheless, Team Envy managed to reduce the case to
            overtime, as a result of which the victory was still in favor of the
            Russian team - 15:13. <br />
            <br />
            On Haven, once a permaban of Gambit, the Russian team managed to
            contain the onslaught of the North Americans, who won just 8 rounds
            for the strong side. Of course, this was not enough in the match
            against Gambit, which played an impeccable half in the attack,
            winning the opponent's pick with a score of 13:11.
            <br />
            <br /> On the Split map, the intrigue continued until the start of
            the second half, when Gambit abruptly switched on the fifth gear and
            began to gain round after round. At some point, it began to seem
            that Team Envy resigned to their fate, doing nothing in the attack.
            Such a gift was skillfully used by the Russian team, which
            confidently closed their own selection with a score of 13: 9, and at
            the same time won the championship. <br />
            <br />
            Following this victory, Team Gambit directly qualified for VALORANT
            Champions 2021, making room for Fnatic, which is now progressing to
            the championship on points scored. At the same time, Team Envy will
            also be represented at the tournament in Berlin, occupying the
            second place in the North American table.
          </p>
        </div>
      </div>
    </>
  );
}

export default Blog;
